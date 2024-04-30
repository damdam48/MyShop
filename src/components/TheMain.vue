<template>
  <!-- MAIN & ASIDE -->
  <div class="d-md-flex">
    <ProductFilters class="w-md-25 m-2" />
    <ProductList class="flex-fill"/>
  </div>
</template>
<script setup lang="ts">
import ProductFilters from "@/components/shop/ProductFilters.vue";
import ProductList from "@/components/shop/ProductList.vue";
</script>

<style scoped lang="scss">
</style>
