<script setup lang="ts">
const { cart, refresh } = useCart()
const { data: categories } = await useFetch('/api/categories', { key: 'categories' })
onMounted(() => { if (!cart.value) refresh() })
</script>

<template>
  <div>
    <div class="strip">Free delivery above ₹799 · Plants packed in breathable boxes · 7-day healthy-plant guarantee</div>
    <header class="site">
      <div class="wrap bar">
        <NuxtLink to="/" class="logo">Leaf <span>&amp;</span> Loam</NuxtLink>
        <nav>
          <NuxtLink v-for="c in categories" :key="c.slug" :to="`/shop/${c.slug}`">{{ c.name }}</NuxtLink>
        </nav>
        <div class="tools">
          <NuxtLink to="/search">Search</NuxtLink>
          <NuxtLink to="/cart" class="cart-link">Cart <span v-if="cart?.count" class="count">{{ cart.count }}</span></NuxtLink>
        </div>
      </div>
    </header>
    <main><slot /></main>
    <footer class="site">
      <div class="wrap cols">
        <div>
          <p class="logo small">Leaf <span>&amp;</span> Loam</p>
          <p class="muted">A family nursery on the outskirts of Bengaluru, delivering plants across India since 2020.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <NuxtLink v-for="c in categories" :key="c.slug" :to="`/shop/${c.slug}`">{{ c.name }}</NuxtLink>
        </div>
        <div>
          <h4>Help</h4>
          <NuxtLink to="/delivery">Delivery &amp; guarantee</NuxtLink>
          <NuxtLink to="/about">Our nursery</NuxtLink>
        </div>
      </div>
      <p class="wrap demo">Demo store built for testing AI shopping agents. No real orders, payments or deliveries.</p>
    </footer>
  </div>
</template>
