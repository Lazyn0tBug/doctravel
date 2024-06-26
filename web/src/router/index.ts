import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// import HomeView from '../views/HomeView.vue'
import Home from '../pages/Home.vue';
import CategoryPage from '../pages/CategoryPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import Checkout from '../pages/Checkout.vue'

interface RouteDefinition extends RouteRecordRaw {
  path: string
  name: string
  component: any // Assuming your components are properly typed
}

const routes: RouteDefinition[] = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/category/:category',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/product/:product',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
