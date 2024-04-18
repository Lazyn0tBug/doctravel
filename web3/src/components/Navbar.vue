<template>
  <!--
  <nav :class="{ fixed: isFixed }" class="navbar">
    <button class="navbar__mobile-menu-btn" @click="$emit('toggle-menu-show', 'menu')"></button>
    <router-link @click="$emit('toggle-menu-show', 'logo')" to="/" class="navbar__homeLink">
      <img
        src="../assets/shared/desktop/logo.svg"
        alt="audiophile logo"
        class="navbar__homeLink__logo"
    /></router-link>
    <ul class="menu menu-horizontal p-0 navbar__desktop-menu">
      <li class="navbar__desktop-menu__link">
        <router-link class="page-scroll active" href="#hero-area">{{ $t('message.home') }}</router-link>
        <router-link class="page-scroll" href="#services">{{ $t('message.physical') }}</router-link>
        <router-link class="page-scroll" href="#feature">{{ $t('message.medical') }}</router-link>
        <router-link class="page-scroll" href="#team">{{ $t('message.referral') }}</router-link>
        <router-link class="btn btn-primary" href="#feature">{{ $t('message.about') }}</router-link>
      </li>
    </ul>
    <button class="navbar__cart-btn" @click="$emit('toggle-menu-show', 'cart')"></button>
    <div class="navbar__lang-switch">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </nav>
    -->
  <!-- Navbar Start -->
  <div class="navigation fixed top-0 left-0 w-full z-30 duration-300">
    <div class="container">
      <nav
        class="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300"
      >
        <a class="navbar-brand" href="index.html">
          <img src="../assets/img/logo.svg" alt="Logo" />
        </a>
        <button
          class="navbar-toggler focus:outline-none block lg:hidden"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon"></span>
          <span class="toggler-icon"></span>
          <span class="toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto justify-left items-center lg:flex">
            <li class="nav-item">
              <router-link class="page-scroll active" href="#hero-area">{{
                $t('message.home')
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="page-scroll active" href="#hero-area">{{
                $t('message.physical')
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="page-scroll active" href="#hero-area">{{
                $t('message.medical')
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="page-scroll active" href="#hero-area">{{
                $t('message.referral')
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="page-scroll active" href="#hero-area">{{
                $t('message.about')
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
          <router-link
            class="text-blue-600 border border-blue-600 px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
            href="#feature"
            >FAQ</router-link
          >
        </div>
      </nav>
    </div>
  </div>
  <!-- Navbar End -->
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const myVar = ref('hello')
// 创建一个响应式的引用来存储当前选中的语言
/* const selectedLanguage = ref(i18n.global.locale.value); */

const emit = defineEmits(['toggle-menu-show'])

/* function switchLanguage(event) { */
/*   locale.value = event.target.value */
/*   selectedLanguage.value = event.target.value; */
/* } */

// 创建一个函数来处理语言切换
/* const changeLocale = () => { */
/*   i18n.global.locale.value = selectedLanguage.value */
/* } */

// 使用 watchEffect 来监听语言的变化
/* watchEffect(() => { */
/*   console.log(`Current locale changed to: ${i18n.global.locale.value}`) */
/* }) */

const isFixed = ref(false)

function handleScroll() {
  // 根据滚动位置设置 isFixed 的值
  isFixed.value = window.scrollY > 20 // 例如，当滚动超过50px时，设置导航栏为固定状态
}

onMounted(() => {
  // 组件挂载后，添加滚动事件监听
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // 组件卸载前，移除滚动事件监听
  window.removeEventListener('scroll', handleScroll)
})
</script>
