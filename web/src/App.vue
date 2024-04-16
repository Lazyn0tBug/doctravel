<template>
  <!-- <Menu :showMenu="showMenu" @toggle-menu="toggleMenu" /> -->
  <!-- <Menu :show="showMenu" :scrollTop="scrollTop" @toggle-menu-show="toggleMenu" ref="mobileMenu" /> -->
  <!--
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
      -->
  <div :class="['wrapper', showMenu || showCart || showConfirmation ? 'stop-scroll' : '']">
    <router-view
      @toggle-menu-show="toggleMenu"
      @add-to-cart="addToCart"
      @empty-cart="emptyCart"
      :cart="cart"
      :showConfirmation="showConfirmation"
    />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
/* import HelloWorld from './components/HelloWorld.vue' */
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
/* import Cart from './components/Cart.vue'; */
import data from './data.json'

interface Product {
  id: number
  addedQuantity: number
  // Add other properties from the data.json file
}

const showMenu = ref(false)
const showCart = ref(false)
const showConfirmation = ref(false)
const scrollTop = ref(false)
const cart = ref<Product[]>([])
const products = ref(data)

const toggleMenu = (myVar: string) => {
  if (myVar === 'logo') {
    showMenu.value = false
    showCart.value = false
  } else if (myVar === 'menu') {
    showMenu.value = !showMenu.value
  } else if (myVar === 'cart') {
    showCart.value = !showCart.value
  } else if (myVar === 'confirmation') {
    showConfirmation.value = !showConfirmation.value
  }
  scrollTop.value = !scrollTop.value
}

const storeCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const addToCart = (data: { productId: number; addedQuantity: number }) => {
  const product = products.value.find((product) => product.id === data.productId)
  if (product) {
    const existingProduct = cart.value.find((prod) => prod.id === product.id)
    if (existingProduct) {
      const index = cart.value.findIndex((prod) => prod.id === product.id)
      cart.value[index] = {
        ...cart.value[index],
        addedQuantity: cart.value[index].addedQuantity + data.addedQuantity
      }
    } else {
      cart.value.push({ ...product, addedQuantity: data.addedQuantity })
    }
    storeCart()
  }
}

const changeQuantity = (data: { productId: number; operation: 'add' | 'subtract' }) => {
  const index = cart.value.findIndex((prod) => prod.id === data.productId)
  if (index !== -1) {
    if (data.operation === 'subtract') {
      if (cart.value[index].addedQuantity === 1) {
        cart.value = cart.value.filter((prod) => prod.id !== data.productId)
      } else {
        cart.value[index] = {
          ...cart.value[index],
          addedQuantity: cart.value[index].addedQuantity - 1
        }
      }
    } else if (data.operation === 'add') {
      cart.value[index] = {
        ...cart.value[index],
        addedQuantity: cart.value[index].addedQuantity + 1
      }
    }
    storeCart()
  }
}

const emptyCart = () => {
  cart.value = []
  storeCart()
}

onMounted(() => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart.value = JSON.parse(storedCart)
  } else {
    localStorage.setItem('cart', JSON.stringify([]))
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  &::-webkit-scrollbar {
    width: 0.7rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #d87d4a;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #f6af85;
  }
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

.default-btn {
  background: #d87d4a;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.776rem;
  letter-spacing: 0.1rem;
  border: none;
  padding: 1.5rem 3rem;
  transition: all 0.3s ease;

  &:hover {
    background: #f6af85;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.stop-scroll {
  max-height: calc(100vh - 9.1rem);
  overflow: hidden;
}
</style>
