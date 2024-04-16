<template>
  <section class="categories">
    <Category product="headphones" />
    <Category product="speakers" />
    <Category product="earphones" />
  </section>
  <AboutSection />
</template>

<script setup>
import Category from '../components/Homepage/Category.vue'
import AboutSection from '../components/Homepage/AboutSection.vue'
</script>

<style lang="scss" scoped>
.categories {
  padding: 9.2rem 2.4rem 0 2.4rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 9.6rem 4rem 0 4rem;
  }

  @media (min-width: 1205px) {
    padding: 12rem 16.5rem 0 16.5rem;
  }
}
</style>
