<template>
  <div class="bg-white p-6 rounded border max-w-4xl">
    <router-link to="/" class="text-teal-600 underline">Back</router-link>

    <div class="flex flex-col md:flex-row mt-4">
      <img :src="product.image" alt="" class="w-full md:w-1/3 h-64 object-contain bg-gray-50 p-2" />
      <div class="md:pl-6 flex-1">
        <h1 class="text-2xl font-bold text-teal-700">{{ product.name }}</h1>
        <p class="text-gray-500 mt-1">{{ product.type }}</p>
        <p class="mt-4 text-lg font-medium">x{{ product.price.toFixed(2) }}</p>
        <button @click="addToCart" class="mt-6 bg-green-600 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import productsData from '../assets/products.json'
import { useCartStore } from '../store/cart'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()
const productId = route.params.id

// flatten
const all = Object.values(productsData).flat()
const product = all.find(p => p.id === productId) || { id: productId, name: 'Product not found', type: '', price: 0, image: '' }

function addToCart() {
  cart.add(product)
}
</script>
