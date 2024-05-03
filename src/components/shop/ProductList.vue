<template>
  <div>
    <!-- Product section  -->
    <section class="container pt-3 pb-5 text-center">
      <!-- Title -->
      <h2 class=" mb-4 d-inline-block me-3 text-uppercase">{{ title }}</h2>
      <!-- Add a filter button to open sidebar -->
      <div class="d-inline-block">
        <a class="btn btn-sm btn-outline-info h2"><i class="me-2 bi bi-funnel"></i>Filtrer</a>
      </div>
      <!-- Product list -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <ProductCard/>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/shop/ProductCard.vue";

const title = "Tous les produits";
</script>