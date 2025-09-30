<template>
  <div>
    <section v-for="(list, section) in products" :key="section" class="mb-8">
      <h2 class="text-xl font-bold text-teal-700 mb-4">{{ section }}</h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ProductCard v-for="p in list" :key="p.id" :product="p" />
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import products from '../assets/products.json'
</script>
