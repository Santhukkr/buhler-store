<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <AppHeader />
    <main class="p-6 max-w-6xl mx-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppHeader from './components/Header.vue'
</script>
