<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.category))
const { data: categories } = await useFetch('/api/categories', { key: 'categories' })
const category = computed(() => categories.value?.find((c) => c.slug === slug.value))
if (!category.value) throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
useHead({ title: category.value.name })
</script>

<template>
  <section class="wrap">
    <p class="crumbs"><NuxtLink to="/">Home</NuxtLink> / {{ category?.name }}</p>
    <h1 class="page">{{ category?.name }}</h1>
    <p class="muted">{{ category?.blurb }} · {{ category?.count }} items</p>
    <ProductGrid :key="slug" :query="{ category: slug }" />
  </section>
</template>
