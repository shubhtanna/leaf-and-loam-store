<script setup lang="ts">
// Shows the first page from the server, then loads more in the browser.
const props = defineProps<{ query: Record<string, string> }>()
const { data } = await useFetch('/api/products', { query: props.query, key: `grid-${JSON.stringify(props.query)}` })
const items = ref(data.value?.items ?? [])
const total = computed(() => data.value?.total ?? 0)
const loading = ref(false)

async function loadMore() {
  loading.value = true
  const next = await $fetch('/api/products', { query: { ...props.query, offset: items.value.length } })
  items.value = [...items.value, ...next.items]
  loading.value = false
}
</script>

<template>
  <div>
    <div class="grid">
      <ProductCard v-for="p in items" :key="p.sku" :product="p" />
    </div>
    <div v-if="items.length < total" class="more">
      <p class="muted">Showing {{ items.length }} of {{ total }}</p>
      <button type="button" class="btn ghost" :disabled="loading" @click="loadMore">{{ loading ? 'Loading…' : 'Load more' }}</button>
    </div>
  </div>
</template>
