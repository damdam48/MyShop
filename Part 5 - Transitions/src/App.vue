<template>
  <div>
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
import TheMain from "@/components/TheMain.vue";
import TheFooter from "@/components/TheFooter.vue";

// Import bootstrap js collapse and dropdown modules
// TODO : Move this to a plugin
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/dropdown.js'

</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
