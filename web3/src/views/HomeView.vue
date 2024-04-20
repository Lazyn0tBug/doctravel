<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Homepage/Header.vue'
import Hero from '../components/Homepage/Hero.vue'
import Services from '../components/Homepage/Services.vue'
import Philosophy from '../components/Homepage/Philosophy.vue'
import Parteners from '../components/Homepage/Parteners.vue'
import Contact from '../components/Homepage/Contact.vue'
import Footer from '../components/Homepage/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <Hero />

    <Services />
    <Philosophy />
    <Parteners />
    <Contact />
    <Footer />
  </main>
</template>
