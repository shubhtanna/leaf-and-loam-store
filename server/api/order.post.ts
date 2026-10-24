// Places a demo order: validates the delivery details, empties the cart and returns an order number.
// Demo store: nothing is charged, stored or shipped.
export default defineEventHandler(async (event) => {
  const f = await readBody<Record<string, string>>(event)
  const cart = summarise(readCart(event))
  if (!cart.count) throw createError({ statusCode: 400, statusMessage: 'Your cart is empty.' })

  const errors: Record<string, string> = {}
  if (!f?.name || f.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[6-9]\d{9}$/.test(String(f?.phone ?? '').replace(/\D/g, '').slice(-10))) errors.phone = 'Please enter a 10-digit mobile number.'
  if (!f?.address || f.address.trim().length < 8) errors.address = 'Please enter your full address.'
  if (!f?.city?.trim()) errors.city = 'Please enter your city.'
  if (!/^\d{6}$/.test(String(f?.pincode ?? ''))) errors.pincode = 'Please enter a 6-digit PIN code.'
  if (Object.keys(errors).length) {
    setResponseStatus(event, 422)
    return { errors }
  }

  const id = 'LL' + Date.now().toString(36).toUpperCase().slice(-6)
  writeCart(event, [])
  return { id, total: cart.total, count: cart.count, payment: f.payment === 'upi' ? 'UPI on delivery' : 'Cash on delivery' }
})
