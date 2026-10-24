<script setup lang="ts">
const props = defineProps<{ product: { sku: string; slug: string; name: string; price: number; mrp: number; size: string; stock: number; art: string; leaf: string; pot: string; light?: string } }>()
const { add } = useCart()
const added = ref(false)
async function addToCart() {
  await add(props.product.sku)
  added.value = true
  setTimeout(() => (added.value = false), 1400)
}
</script>

<template>
  <article class="card">
    <NuxtLink :to="`/plants/${product.slug}`" class="card-link">
      <PlantArt :art="product.art" :leaf="product.leaf" :pot="product.pot" />
      <h3>{{ product.name }}</h3>
      <p class="meta">{{ product.light || product.size }}</p>
    </NuxtLink>
    <p class="price">
      <strong>{{ inr(product.price) }}</strong>
      <template v-if="pctOff(product.price, product.mrp)"> <s>{{ inr(product.mrp) }}</s> <span class="off">{{ pctOff(product.price, product.mrp) }}% off</span></template>
    </p>
    <button class="btn small" type="button" :disabled="product.stock === 0" @click="addToCart">
      {{ product.stock === 0 ? 'Sold out' : added ? 'Added ✓' : 'Add to cart' }}
    </button>
  </article>
</template>
