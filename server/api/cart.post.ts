import { bySku } from '../data/catalog'

// Body: { action: 'add' | 'set' | 'remove', sku, qty? }
export default defineEventHandler(async (event) => {
  const body = await readBody<{ action?: string; sku?: string; qty?: number }>(event)
  const product = body?.sku ? bySku(body.sku) : undefined
  if (!product) throw createError({ statusCode: 400, statusMessage: 'Unknown product' })
  if (product.stock === 0 && body.action !== 'remove') throw createError({ statusCode: 409, statusMessage: 'Out of stock' })

  const max = Math.min(10, product.stock)
  let lines = readCart(event)
  if (body.action === 'remove') {
    lines = lines.filter((l) => l.sku !== product.sku)
  } else if (body.action === 'set') {
    const qty = Math.max(0, Math.min(max, Number(body.qty) || 0))
    lines = qty ? lines.map((l) => (l.sku === product.sku ? { ...l, qty } : l)) : lines.filter((l) => l.sku !== product.sku)
  } else {
    const add = Math.max(1, Number(body.qty) || 1)
    const line = lines.find((l) => l.sku === product.sku)
    if (line) line.qty = Math.min(max, line.qty + add)
    else lines.push({ sku: product.sku, qty: Math.min(max, add) })
  }
  writeCart(event, lines)
  return summarise(lines)
})
