<template>
  <div>
    <h2 class="text-2xl font-bold text-teal-700 mb-6">Checkout</h2>

    <div v-if="cart.items.length === 0" class="text-gray-500">Your cart is empty.</div>

    <div v-else>
      <div v-for="(item, idx) in cart.items" :key="idx" class="flex items-center bg-white rounded border p-4 mb-4">
        <img :src="item.image" class="w-24 h-24 object-contain bg-gray-50 p-2 mr-4" />
        <div class="flex-1">
          <h3 class="font-semibold text-teal-700">{{ item.name }}</h3>
          <p class="text-sm text-gray-500">{{ item.type }}</p>
        </div>
        <div class="text-right">
          <div class="font-medium">x{{ item.price.toFixed(2) }}</div>
          <button @click="remove(idx)" class="text-red-500 mt-2">Remove</button>
        </div>
      </div>

      <div class="text-right font-bold text-lg">Total: x{{ cart.total.toFixed(2) }}</div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'
const cart = useCartStore()
function remove(i) { cart.remove(i) }
</script>
