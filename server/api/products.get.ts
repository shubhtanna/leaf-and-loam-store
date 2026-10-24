import { CATEGORIES, FEATURED, PAGE_SIZE, PRODUCTS } from '../data/catalog'

// GET /api/products?category=indoor-plants&offset=0  ·  ?featured=1  ·  ?q=snake
export default defineEventHandler((event) => {
  const q = getQuery(event)
  let list = PRODUCTS
  if (q.featured) list = FEATURED.map((s) => PRODUCTS.find((p) => p.slug === s)!)
  else if (q.category) {
    if (!CATEGORIES.some((c) => c.slug === q.category)) throw createError({ statusCode: 404, statusMessage: 'Unknown category' })
    list = PRODUCTS.filter((p) => p.category === q.category)
  }
  if (q.q) {
    const t = String(q.q).toLowerCase()
    list = list.filter((p) => `${p.name} ${p.botanical ?? ''} ${p.category}`.toLowerCase().includes(t))
  }
  const offset = Math.max(0, Number(q.offset) || 0)
  const limit = Math.min(48, Number(q.limit) || PAGE_SIZE)
  return { total: list.length, offset, items: list.slice(offset, offset + limit) }
})
