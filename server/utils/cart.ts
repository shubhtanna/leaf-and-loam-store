import type { H3Event } from 'h3'
import { bySku, DELIVERY_FEE, FREE_DELIVERY_FROM } from '../data/catalog'

export interface CartLine { sku: string; qty: number }
const COOKIE = 'll_cart'

export function readCart(event: H3Event): CartLine[] {
  try {
    const raw = getCookie(event, COOKIE)
    const lines = raw ? (JSON.parse(raw) as CartLine[]) : []
    return lines.filter((l) => bySku(l.sku) && l.qty > 0)
  } catch {
    return []
  }
}

export function writeCart(event: H3Event, lines: CartLine[]) {
  setCookie(event, COOKIE, JSON.stringify(lines), { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 14 })
}

export function summarise(lines: CartLine[]) {
  const items = lines.map((l) => {
    const p = bySku(l.sku)!
    return { sku: p.sku, slug: p.slug, name: p.name, price: p.price, qty: l.qty, lineTotal: p.price * l.qty, art: p.art, leaf: p.leaf, pot: p.pot }
  })
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0)
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE
  return { items, count: items.reduce((s, i) => s + i.qty, 0), subtotal, delivery, total: subtotal + delivery, freeFrom: FREE_DELIVERY_FROM }
}
