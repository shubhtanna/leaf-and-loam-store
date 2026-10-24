import { CATEGORIES, PRODUCTS } from '../data/catalog'

export default defineEventHandler(() =>
  CATEGORIES.map((c) => ({ ...c, count: PRODUCTS.filter((p) => p.category === c.slug).length })),
)
