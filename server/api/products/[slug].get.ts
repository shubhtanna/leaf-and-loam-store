import { bySlug, PRODUCTS } from '../../data/catalog'

export default defineEventHandler((event) => {
  const product = bySlug(getRouterParam(event, 'slug') ?? '')
  if (!product) throw createError({ statusCode: 404, statusMessage: 'Plant not found' })
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4)
  return { product, related }
})
