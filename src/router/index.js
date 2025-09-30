import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import Checkout from '../pages/Checkout.vue'

const routes = [
  { path: '/', name: 'Home', component: ProductList },
  { path: '/products/:id', name: 'ProductDetails', component: ProductDetails, props: true },
  { path: '/checkout', name: 'Checkout', component: Checkout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
