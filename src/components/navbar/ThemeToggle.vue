<template>
  <li class="nav-item dropdown">
    <button
        class=" nav-link dropdown-toggle fs-4"
        data-bs-toggle="dropdown"
        type="button"
    >
      <i class="bi bi-circle-half"></i>
    </button>

    <ul class="dropdown-menu dropdown-menu-end">
      <li>
        <button
            class="dropdown-item"
            type="button"
        >
          <i class="bi bi-sun-fill pe-2"></i>
          Clair
        </button>
      </li>
      <li>
        <button
            class="dropdown-item"
            type="button"
        >
          <i class="bi bi-moon-stars-fill pe-2"></i>
          Sombre
        </button>
      </li>
      <li>
        <button
            class="dropdown-item"
            type="button"
        >
          <i class="bi bi-circle-half pe-2"></i>
          Auto
        </button>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">

let userChoice = 'auto';

switch (userChoice) {
  case 'light':
    break;
  case 'dark':
    document.documentElement.dataset.bsTheme = 'dark';
    break;
  default:
    // Récupérer la valeur du thème de l'utilisateur en fonction de la préférence du système
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.bsTheme = userPrefersDark ? 'dark' : 'light';
    // Changer l'icône du dropdown en fonction du thème actuel
    break;
}

// check if the prefers-color-scheme is changed
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  document.documentElement.dataset.bsTheme = e.matches ? 'dark' : 'light';
});



</script>