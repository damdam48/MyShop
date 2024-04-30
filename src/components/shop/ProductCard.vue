<template>
  <div>
    <div class="card h-100 bg-body-secondary shadow">
      <img :alt="'Illustration de ' + product.name" class="card-img-top" :src="'/images/products/' + product.illustration">
      <div class="card-body text-start ">
        <div class="d-flex justify-content-between align-items-start">
          <h3 class="card-title h4 text-uppercase">{{ product.name }}</h3>
          <!-- Pill for price -->
          <span class="badge bg-info bg-body-tertiary h1 fs-6 shadow-sm border border-secondary ms-3">
            <i class="bi bi-coin me-2"></i>{{ product.price}} €
          </span>
        </div>
        <!-- Add pills for the categories -->
        <span class="badge rounded-pill bg-primary text-dark me-2 ">{{ product.category.name }}</span>

        <p class="card-text mt-5">{{ product.description }}</p>
        <hr>
        <div class="text-center">
          <a class="btn btn-info text-uppercase" href="#"><i class="me-2 fs-6 bi bi-bag-heart-fill"></i>Ajouter
            au panier</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import img  from "@/assets/images/products/rainbow_keyboard.jpg";

const product = {
    "productId": 1,
    "name": "Clavier arc-en-ciel",
    "description": "Un clavier mécanique avec des touches qui changent de couleur à chaque pression.",
    "price": 150,
    "illustration": "rainbow_keyboard.jpg",
    "createdAt": "2023-12-22T13:39:47.000Z",
    "updateAt": null,
    "categoryId": 1,
    "category": {
      "categoryId": 1,
      "name": "Gadgets Lumineux",
      "description": "Des gadgets qui illuminent votre espace de travail avec des lumières vives et colorées."
    }
};

/**
 * Retourne le chemin complet de l'illustration
 * 
 * @link https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
 * 
 * @param imgName - Le nom de l'image
 */
function  getIllustrationSrc(imgName) {
    const imgPath = "../../assets/images/products/" + imgName;
   return new URL(imgPath, import.meta.url).href;
}
</script>

<style scoped lang="scss"></style>