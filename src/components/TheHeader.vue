<template>
  <!-- NAVBAR -->
  <header class="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm">
    <div class="container-fluid text-uppercase fw-bolder ">
      <!-- Toggle Button -->
      <button aria-controls="#fc-navbar" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler"
              data-bs-target="#fc-navbar" data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Logo -->
      <a class="navbar-brand me-0 me-lg-3" href="/">
        <img src="/logo.svg" width="32" alt="Logo GD">
        <h1 class="d-none">Greg Desplaces</h1>
      </a>
      <!-- Main nav -->
      <nav id="fc-navbar" class="collapse navbar-collapse pt-3 pt-lg-0">
        <!-- Started block-->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Home -->
          <li class="nav-item">
            <a aria-current="page" class="nav-link active" href="/">Accueil</a>
          </li>
          <!-- Link 1 -->
          <li class="nav-item">
            <a class="nav-link" href="#">Lien 1</a>
          </li>
          <!-- Dropdown link -->
          <li class="nav-item dropdown">
            <a aria-expanded="false" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
               role="button">
              Déroulant
            </a>
            <!-- Sub-links -->
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <!-- Ended block  -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- Basket -->
          <li class="nav-item">
            <a aria-current="page" class="nav-link position-relative me-3" href="/">
              <i class="bi bi-cart-check-fill fs-4"></i>
              <small class="position-absolute top-0 translate-middle-x m-1 gd-basket-counter badge rounded-pill bg-info">21</small>
            </a>
          </li>
          <NavSeparator />
          <!-- Connection button -->
          <li class="nav-item">
            <a aria-current="page" class="nav-link " href="/">
              <button class="btn  text-uppercase">Connexion <i class="bi bi-box-arrow-in-right"></i>
              </button>
            </a>
          </li>
          <NavSeparator />
          <!-- Theme dropdown -->
          <ThemeDropdown />
         
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import NavSeparator from '@/components/header/NavSeparator.vue'
import ThemeDropdown from '@/components/header/ThemeDropdown.vue'

// Import bootstrap js collapse and dropdown modules
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/dropdown.js'


</script>

<style scoped lang="scss">
nav {
  font-family: var(--fc-font-title);

  .d-flex {
    gap: 1rem;
  }
}
</style>