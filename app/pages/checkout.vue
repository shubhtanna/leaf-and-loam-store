<script setup lang="ts">
useHead({ title: 'Checkout' })
const { data: cart } = await useFetch('/api/cart', { key: 'checkout-cart' })
if (!cart.value?.count) await navigateTo('/cart')

const form = reactive({ name: '', phone: '', email: '', address: '', city: '', pincode: '', payment: 'cod' })
const errors = ref<Record<string, string>>({})
const placing = ref(false)

async function place() {
  placing.value = true
  errors.value = {}
  try {
    const res = await $fetch<{ id: string; total: number; count: number; payment: string }>('/api/order', { method: 'POST', body: form })
    useCart().cart.value = null
    await navigateTo({ path: `/order/${res.id}`, query: { total: res.total, items: res.count, pay: res.payment } })
  } catch (e: any) {
    errors.value = e?.data?.errors ?? { form: e?.data?.statusMessage || 'Something went wrong. Please try again.' }
  } finally {
    placing.value = false
  }
}
</script>

<template>
  <section class="wrap">
    <h1 class="page">Checkout</h1>
    <div v-if="cart?.count" class="co">
      <form class="co-form" novalidate @submit.prevent="place">
        <h3>Delivery details</h3>
        <label>Full name<input v-model="form.name" autocomplete="name" /><small v-if="errors.name">{{ errors.name }}</small></label>
        <div class="two">
          <label>Mobile<input v-model="form.phone" type="tel" inputmode="numeric" autocomplete="tel" /><small v-if="errors.phone">{{ errors.phone }}</small></label>
          <label>Email (optional)<input v-model="form.email" type="email" autocomplete="email" /></label>
        </div>
        <label>Address<input v-model="form.address" autocomplete="street-address" /><small v-if="errors.address">{{ errors.address }}</small></label>
        <div class="two">
          <label>City<input v-model="form.city" autocomplete="address-level2" /><small v-if="errors.city">{{ errors.city }}</small></label>
          <label>PIN code<input v-model="form.pincode" inputmode="numeric" maxlength="6" /><small v-if="errors.pincode">{{ errors.pincode }}</small></label>
        </div>
        <h3>Payment</h3>
        <label class="radio"><input v-model="form.payment" type="radio" value="cod" /> Cash on delivery</label>
        <label class="radio"><input v-model="form.payment" type="radio" value="upi" /> UPI on delivery</label>
        <p v-if="errors.form" class="err">{{ errors.form }}</p>
        <button class="btn wide" type="submit" :disabled="placing">{{ placing ? 'Placing order…' : `Place order · ${inr(cart.total)}` }}</button>
        <p class="muted small">Demo store: no payment is taken and nothing is shipped.</p>
      </form>
      <aside class="sum">
        <h3>Your order</h3>
        <p v-for="i in cart.items" :key="i.sku"><span>{{ i.name }} × {{ i.qty }}</span><span>{{ inr(i.lineTotal) }}</span></p>
        <p><span>Delivery</span><span>{{ cart.delivery ? inr(cart.delivery) : 'Free' }}</span></p>
        <p class="total"><span>Total</span><span>{{ inr(cart.total) }}</span></p>
      </aside>
    </div>
  </section>
</template>
