<script setup lang="ts">
useHead({ title: 'Order placed' })
const route = useRoute()
const total = Number(route.query.total) || 0
const items = Number(route.query.items) || 0
</script>

<template>
  <section class="wrap thanks">
    <p class="eyebrow">Thank you!</p>
    <h1 class="page">Your plants are on their way</h1>
    <p class="lead">Order {{ route.params.id }}<template v-if="items"> · {{ items }} item{{ items > 1 ? 's' : '' }} · {{ inr(total) }} · {{ route.query.pay }}</template></p>
    <p class="muted">We pack within 24 hours. You'll get a WhatsApp message with tracking.</p>
    <NuxtLink to="/" class="btn">Keep browsing</NuxtLink>
  </section>
</template>
