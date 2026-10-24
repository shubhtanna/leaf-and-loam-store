<script setup lang="ts">
useHead({ title: 'Your cart' })
const { cart, refresh, set, remove } = useCart()
const { data } = await useFetch('/api/cart', { key: 'cart-page' })
if (data.value) cart.value = data.value
onMounted(refresh)
</script>

<template>
  <section class="wrap">
    <h1 class="page">Your cart</h1>
    <template v-if="cart && cart.count">
      <div class="bag">
        <div>
          <div v-for="i in cart.items" :key="i.sku" class="line">
            <div class="mini"><PlantArt :art="i.art" :leaf="i.leaf" :pot="i.pot" /></div>
            <div><NuxtLink :to="`/plants/${i.slug}`">{{ i.name }}</NuxtLink><small>{{ inr(i.price) }} each</small></div>
            <div class="qty">
              <button type="button" aria-label="Fewer" @click="set(i.sku, i.qty - 1)">−</button>
              <span>{{ i.qty }}</span>
              <button type="button" aria-label="More" @click="set(i.sku, i.qty + 1)">+</button>
            </div>
            <strong>{{ inr(i.lineTotal) }}</strong>
            <button type="button" class="link" @click="remove(i.sku)">Remove</button>
          </div>
        </div>
        <aside class="sum">
          <p><span>Subtotal</span><span>{{ inr(cart.subtotal) }}</span></p>
          <p><span>Delivery</span><span>{{ cart.delivery ? inr(cart.delivery) : 'Free' }}</span></p>
          <p class="total"><span>Total</span><span>{{ inr(cart.total) }}</span></p>
          <p v-if="cart.delivery" class="note">Add {{ inr(cart.freeFrom - cart.subtotal) }} more for free delivery.</p>
          <button type="button" class="btn wide" @click="navigateTo('/checkout')">Checkout</button>
        </aside>
      </div>
    </template>
    <template v-else>
      <p class="muted">Your cart is empty.</p>
      <NuxtLink to="/shop/indoor-plants" class="btn">Find a plant</NuxtLink>
    </template>
  </section>
</template>
