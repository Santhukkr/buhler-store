<template>
  <header class="bg-white border-b">
    <div class="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
      <div class="flex items-center space-x-4">
        <router-link to="/">
          <img src="/src/assets/logo.svg" alt="Buhler" class="h-10" />
        </router-link>
      </div>

      <div class="text-teal-700 font-medium">{{ now }}</div>

      <div>
        <router-link to="/checkout" class="flex items-center space-x-2 text-teal-700">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span class="font-semibold">Cart</span>
          <span class="ml-1 inline-flex items-center justify-center bg-teal-100 text-teal-800 rounded-full px-2 text-sm">{{ cart.count }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../store/cart'

const cart = useCartStore()
const now = ref(new Date().toLocaleString())

let timer = null
onMounted(() => {
  timer = setInterval(() => { now.value = new Date().toLocaleString() }, 1000)
})
onUnmounted(() => { clearInterval(timer) })
</script>
