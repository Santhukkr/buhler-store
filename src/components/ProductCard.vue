<template>
  <div class="bg-white border rounded p-3 flex flex-col">
    <router-link :to="`/products/${product.id}`" class="flex-1">
      <img :src="product.image" :alt="product.name" class="w-full h-40 object-contain mb-3 bg-gray-50" />
      <h3 class="text-teal-700 font-semibold">{{ product.name }}</h3>
      <p class="text-sm text-gray-500">{{ product.type }}</p>
      <p class="mt-2 font-medium">x{{ product.price.toFixed(2) }}</p>
    </router-link>

    <button @click="addToCart" class="mt-3 bg-teal-600 text-white py-2 rounded hover:opacity-95">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const props = defineProps({ product: Object })
const cart = useCartStore()

function addToCart() {
  cart.add(props.product)
}
</script>
