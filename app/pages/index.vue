<script setup lang="ts">
useHead({ title: '' })
const { data: categories } = await useFetch('/api/categories', { key: 'categories' })
const art: Record<string, [string, string, string]> = {
  'indoor-plants': ['monstera', '#2e7d32', '#efe9df'],
  'outdoor-plants': ['flower', '#e91e63', '#c96f4a'],
  planters: ['pot', '#ffffff', '#c96f4a'],
  'plant-care': ['can', '#00897b', '#26a69a'],
}
</script>

<template>
  <div>
    <section class="hero">
      <div class="wrap hero-in">
        <div>
          <p class="eyebrow">Grown in Bengaluru · Delivered across India</p>
          <h1>Bring home a little <em>green</em>.</h1>
          <p class="lead">Healthy, nursery-grown plants in ready-to-gift pots, plus everything you need to keep them happy. Every plant ships with a care card.</p>
          <NuxtLink to="/shop/indoor-plants" class="btn">Shop indoor plants</NuxtLink>
          <NuxtLink to="/shop/outdoor-plants" class="btn ghost">Balcony &amp; garden</NuxtLink>
        </div>
        <div class="hero-art">
          <PlantArt art="monstera" leaf="#2e7d32" pot="#efe9df" bg="#dfe9d6" />
          <PlantArt art="blades" leaf="#33691e" pot="#c96f4a" bg="#e9efe2" />
        </div>
      </div>
    </section>

    <section class="wrap">
      <h2 class="sec">Shop by category</h2>
      <div class="cats">
        <NuxtLink v-for="c in categories" :key="c.slug" :to="`/shop/${c.slug}`" class="cat">
          <PlantArt :art="art[c.slug][0]" :leaf="art[c.slug][1]" :pot="art[c.slug][2]" bg="#f1f5ec" fill />
          <div>
            <strong>{{ c.name }}</strong>
            <span>{{ c.blurb }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="wrap">
      <h2 class="sec">Customer favourites</h2>
      <ProductGrid :query="{ featured: '1' }" />
    </section>

    <section class="wrap promise">
      <div><strong>Healthy-plant guarantee</strong><span>Arrives unwell? We replace it within 7 days.</span></div>
      <div><strong>Packed to travel</strong><span>Breathable boxes, secured soil, no damage in transit.</span></div>
      <div><strong>Care that helps</strong><span>WhatsApp our gardeners any time.</span></div>
    </section>
  </div>
</template>
