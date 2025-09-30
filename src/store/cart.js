import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  getters: {
    count: (state) => state.items.length,
    total: (state) => state.items.reduce((s, p) => s + Number(p.price), 0),
  },
  actions: {
    add(product) {
      this.items.push(product)
    },
    remove(index) {
      this.items.splice(index, 1)
    },
    clear() {
      this.items = []
    }
  },
})
