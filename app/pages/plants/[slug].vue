<script setup lang="ts">
const route = useRoute()
const { data, error } = await useFetch(`/api/products/${route.params.slug}`, { key: `plant-${route.params.slug}` })
if (error.value || !data.value) throw createError({ statusCode: 404, statusMessage: 'Plant not found', fatal: true })
const p = computed(() => data.value!.product)
useHead({ title: p.value.name, meta: [{ name: 'description', content: p.value.desc }] })

const { add } = useCart()
const qty = ref(1)
const added = ref(false)
async function addToCart() {
  await add(p.value.sku, qty.value)
  added.value = true
}
const categoryName = computed(() => ({ 'indoor-plants': 'Indoor plants', 'outdoor-plants': 'Outdoor plants', planters: 'Planters', 'plant-care': 'Plant care' })[p.value.category])
</script>

<template>
  <div>
    <section class="wrap pdp">
      <div class="pdp-art"><PlantArt :art="p.art" :leaf="p.leaf" :pot="p.pot" /></div>
      <div>
        <p class="crumbs"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink :to="`/shop/${p.category}`">{{ categoryName }}</NuxtLink></p>
        <h1>{{ p.name }}</h1>
        <p v-if="p.botanical" class="botanical">{{ p.botanical }}</p>
        <p class="price big">
          <strong>{{ inr(p.price) }}</strong>
          <template v-if="pctOff(p.price, p.mrp)"> <s>{{ inr(p.mrp) }}</s> <span class="off">{{ pctOff(p.price, p.mrp) }}% off</span></template>
        </p>
        <p class="muted small">Inclusive of all taxes · {{ p.size }}</p>
        <p :class="['stock', { out: p.stock === 0 }]">{{ p.stock === 0 ? 'Sold out · back soon' : p.stock < 10 ? `Only ${p.stock} left` : 'In stock · ships in 1–2 days' }}</p>
        <div class="buy">
          <select v-model.number="qty" aria-label="Quantity" :disabled="p.stock === 0">
            <option v-for="n in Math.min(5, Math.max(1, p.stock))" :key="n" :value="n">{{ n }}</option>
          </select>
          <button type="button" class="btn" :disabled="p.stock === 0" @click="addToCart">Add to cart</button>
        </div>
        <p v-if="added" class="added">Added to your cart. <NuxtLink to="/cart">View cart →</NuxtLink></p>
        <p class="desc">{{ p.desc }}</p>
        <dl v-if="p.light" class="facts">
          <div><dt>Light</dt><dd>{{ p.light }}</dd></div>
          <div><dt>Water</dt><dd>{{ p.water }}</dd></div>
          <div><dt>Pets</dt><dd>{{ p.petSafe ? 'Pet-friendly' : 'Keep away from pets' }}</dd></div>
        </dl>
      </div>
    </section>
    <section v-if="data?.related.length" class="wrap">
      <h2 class="sec">You may also like</h2>
      <div class="grid"><ProductCard v-for="r in data.related" :key="r.sku" :product="r" /></div>
    </section>
  </div>
</template>
