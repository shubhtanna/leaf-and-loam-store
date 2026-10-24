// Cart state shared by the header badge, product pages and the cart page.
export interface CartSummary {
  items: { sku: string; slug: string; name: string; price: number; qty: number; lineTotal: number; art: string; leaf: string; pot: string }[]
  count: number
  subtotal: number
  delivery: number
  total: number
  freeFrom: number
}

export function useCart() {
  const cart = useState<CartSummary | null>('cart', () => null)

  async function refresh() {
    cart.value = await $fetch<CartSummary>('/api/cart')
  }
  async function change(action: 'add' | 'set' | 'remove', sku: string, qty?: number) {
    cart.value = await $fetch<CartSummary>('/api/cart', { method: 'POST', body: { action, sku, qty } })
  }
  return { cart, refresh, add: (sku: string, qty = 1) => change('add', sku, qty), set: (sku: string, qty: number) => change('set', sku, qty), remove: (sku: string) => change('remove', sku) }
}
