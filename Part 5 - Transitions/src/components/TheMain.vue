<template>
  <main class="d-md-flex">
    <ProductFilters class="w-md-25 m-2" />
    <ProductList class="flex-fill"/>
  </main>
</template>
<script setup lang="ts">
import ProductList from "@/components/shop/ProductList.vue";
import ProductFilters from "@/components/shop/ProductFilters.vue";
</script>