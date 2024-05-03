<template>
  <li class="nav-item dropdown">
    <button
        class=" nav-link dropdown-toggle fs-4"
        data-bs-toggle="dropdown"
        type="button"
    >
      <i class="bi" :class="activeIcon"></i>
    </button>

    <ul class="dropdown-menu dropdown-menu-end">
      <!-- Light -->
      <li>
        <button class="dropdown-item" type="button" @click="setTheme('light')" :class="(activeIcon === 'bi-sun-fill') ? 'bg-info text-light' : '' ">
          <i class="bi bi-sun-fill pe-2" ></i>Clair
        </button>
      </li>
      <!-- Dark -->
      <li>
        <button class="dropdown-item" type="button" @click="setTheme('dark')" :class="(activeIcon === 'bi-moon-stars-fill') ? 'bg-info' : '' ">
          <i class="bi bi-moon-stars-fill pe-2" ></i>Sombre
        </button>
      </li>
      <!-- Auto -->
      <li>
        <button class="dropdown-item" type="button" @click="setTheme()" :class="(activeIcon === 'bi-circle-half') ? `bg-info ${(getBrowserTheme() !== 'dark') ? 'text-light' : ''} ` : '' ">
          <i class="bi bi-circle-half pe-2"></i>Auto
        </button>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import {type Ref, ref, onMounted} from 'vue'
import {setCookie, deleteCookie, getCookie} from "@/utils/cookie.utils";

/**
 * @name activeIcon
 *
 * @description set a reactive value for the active icon
 */
const activeIcon : Ref<'bi-circle-half' | 'bi-moon-stars-fill' | 'bi-sun-fill' > = ref('bi-circle-half')

/**
 * Get the theme from the browser
 *
 * @return {'dark' | 'light'} The theme used by the browser
 */
function getBrowserTheme(): 'dark' | 'light' {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

/**
 * Set the theme from the cookie or from the browser theme
 * And set the value of the active icon
 *
 * @return {void}
 */
function setTheme(choice?: 'dark' | 'light'): void {
  // if there's a choice, set the cookie else delete the cookie
  (choice) ? setCookie('theme', choice) : deleteCookie('theme')
  // if there's no cookie, use the browser theme else use the register cookie
  // and set the value of the active icon
  switch (choice) {
    case 'dark':
      activeIcon.value = 'bi-moon-stars-fill'
      document.documentElement.dataset.bsTheme = choice
      break
    case 'light':
      activeIcon.value = 'bi-sun-fill'
      document.documentElement.dataset.bsTheme = choice
      break
    default:
      activeIcon.value = 'bi-circle-half'
      document.documentElement.dataset.bsTheme = getBrowserTheme()
      break
  }
}

/**
 * Executes when the Vue component is mounted.
 *
 * It retrieves the theme preference from the cookie and applies it by calling the setTheme function.
 * If the cookie is not set, the theme defaults to the browser's preferred theme.
 */
onMounted(() => {
  // I get the cookie, if it's registered, then I set the theme with his value
  const registeredCookie = getCookie('theme') as 'dark' | 'light' | undefined
  setTheme(registeredCookie)
});

/**
 * Watch the browser theme for automatically reload the component
 */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  // je recharge le composant
  setTheme()
})
</script>

<style scoped lang="scss">
button:active {
  background-color: var(--fc-pink);
}
</style>
