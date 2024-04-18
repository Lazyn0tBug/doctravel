<template>
  <!-- Header Area wrapper Starts -->
  <header id="header-wrap" class="relative">
    <Navbar />
  </header>
  <!-- Header Area wrapper End -->
</template>

<script>
import Navbar from '../Navbar.vue'

export default {
  name: 'Header',
  components: { Navbar },
  emits: ['toggle-menu-show'],
  methods: {
    clickHandler() {}
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-image: url('../../assets/home/mobile/image-header.jpg');
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url('../../assets/home/tablet/image-header.jpg');
    background-position: center;
    background-size: cover;
  }

  @media (min-width: 1205px) {
    background-image: url('../../assets/home/desktop/image-hero.jpg');
    background-size: cover;
    background-position: center;
  }
}
</style>
