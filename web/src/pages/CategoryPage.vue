<template>
  <Header :category="category" @toggle-menu-show="$emit('toggle-menu-show', $event)" />
  <Product v-for="product in sortedProducts" :key="product.id" :product="product" />
  <ProductPageNavigation />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductPageNavigation from '../components/ProductPageNavigation.vue';
import Header from '../components/CategoryPage/Header.vue';
import Product from '../components/CategoryPage/Product.vue';
import jsonData from '../data.json';

const emit = defineEmits(['toggle-menu-show']);

const route = useRoute();
const category = computed(() => route.params.category);

const productInfo = jsonData;

const headphones = computed(() => productInfo.filter((product) => product.category === 'headphones'));
const earphones = computed(() => productInfo.filter((product) => product.category === 'earphones'));
const speakers = computed(() => productInfo.filter((product) => product.category === 'speakers'));

const currentProducts = computed(() => {
  return category.value === 'headphones'
    ? headphones.value
    : category.value === 'earphones'
      ? earphones.value
      : speakers.value;
});

const sortedProducts = computed(() => currentProducts.value.slice().sort((a, b) => b.new - a.new));
</script>

<style lang="scss" scoped></style>
