<script setup lang="ts">
// Instant search: results load in the browser as you type.
useHead({ title: 'Search' })
const route = useRoute()
const q = ref(String(route.query.q ?? ''))
const results = ref<any[]>([])
const searched = ref(false)

let timer: ReturnType<typeof setTimeout> | undefined
async function run() {
  if (!q.value.trim()) { results.value = []; searched.value = false; return }
  const res = await $fetch('/api/products', { query: { q: q.value, limit: 48 } })
  results.value = res.items
  searched.value = true
}
watch(q, () => { clearTimeout(timer); timer = setTimeout(run, 250) })
onMounted(run)
</script>

<template>
  <section class="wrap">
    <h1 class="page">Search</h1>
    <ClientOnly>
      <input v-model="q" class="search" placeholder="Search plants, pots and more" autofocus />
      <p v-if="searched" class="muted">{{ results.length }} result{{ results.length === 1 ? '' : 's' }} for “{{ q }}”</p>
      <div class="grid"><ProductCard v-for="p in results" :key="p.sku" :product="p" /></div>
      <template #fallback><p class="muted">Loading search…</p></template>
    </ClientOnly>
  </section>
</template>
