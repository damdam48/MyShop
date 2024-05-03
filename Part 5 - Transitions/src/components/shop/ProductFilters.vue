<template>
  <aside
      class="bg-body-secondary border shadow-sm d-flex flex-column flex-shrink-0 p-3 rounded">
    <!-- Button close  -->
    <div class="text-center text-md-end order-1 order-md-0">
      <i class="bi bi-x-circle text-info bg fs-4 gd-pointer"></i>
    </div>

    <!-- FILTERS -->
   <div class="mt-4" v-for="(filter, key) in state.filters">
     <h4 class="text-uppercase h6 pb-2"><i class="bi me-2" :class="filter.icon"></i>{{ filter.title }}</h4>
      <!-- If is a text input    -->
     <div v-if="filter.title === 'Rechercher'" class="input-group mb-3" >
       <input
           :type="filter.inputType"
           class="form-control fs-7"
           :class="(filter.value) ? 'border border-primary-subtle' : ''"
           :placeholder="filter.placeholder"
           v-model="filter.value"
       >
       <span class="input-group-text btn btn-primary  gd-pointer"><i class="bi bi-search"></i></span>
     </div>

     <!-- For checkbox -->
     <ul v-if="filter.inputType==='checkbox'" class="list-group item form-check">
       <li class="list-group item" v-for="checkbox in filter.items">
         <div class="list-group-item list-group-item-action gd-pointer mb-1" :class="((filter.value).find((item) => item === checkbox.name  )) ? 'border-primary-subtle' : ''" >
           <label class="form-check" :for="`${key}-${checkbox.id}`">
             <input
                 :id="`${key}-${checkbox.id}`"
                 class="form-check-input"
                 :name="`${key}-${checkbox.id}`"
                 :type="filter.inputType"
                 @change="updateCategoriesValues(checkbox.name, $event)"

             >
             <span class="form-check-label fs-7">{{ checkbox.name }}</span>
           </label>
         </div>
       </li>
     </ul>
     <!-- For radio -->
     <ul v-else-if="filter.inputType==='radio'" class="list-group item form-check">
      <li class="list-group item" v-for="radio in filter.items">
        <div class="list-group-item list-group-item-action gd-pointer mb-1" :class="(filter.value === radio.value) ? 'border-primary-subtle' : ''" >
          <label class="form-check" :for="`${key}-${radio.id}`">
            <input
                :id="`${key}-${radio.id}`"
                class="form-check-input"
                :name="`${key}`"
                type="radio"
                :value="radio.value"
                :checked="filter.value === radio.value"
                @change="state.filters[key].value = radio.value"
            >
            <span class="form-check-label fs-7">{{ radio.name }}</span>
          </label>
        </div>
      </li>
    </ul>
   </div>

<!--    <pre>-->
<!--      {{ state.filters }}-->
<!--    </pre>-->

  </aside>
</template>
<script setup lang="ts">
import { INITIALS_FILTERS } from '@/data/filters.data';
import type {CategoryName, FiltersInterface} from "@/interfaces/filter.interface";
import { reactive} from 'vue';

/**
 * L'objet state est un objet Vue réactif qui contient les données des filtres.
 * Il est initialisé avec les données filters importées de filters.data.
 *
 * @const state La variable constante pour contenir l'état de l'application.
 * @property {FiltersInterface} filters Les filtres de l'application
 *
 */
const state = reactive<{filters: FiltersInterface}>({
      filters: INITIALS_FILTERS
    }
);


/**
 * Met à jour les valeurs des catégories en fonction de l'état de la case à cocher.
 *
 * @param {string} value - La valeur de la case à cocher.
 * @param {Event} e - L'objet événement du changement de la case à cocher.
 */
function updateCategoriesValues(value: CategoryName, e: Event) {
  // Stocke la valeur de la case à cocher pour effectuer une assertion de type afin de pouvoir utiliser la propriété checked
  const target = e.target as HTMLInputElement;
  // Si la case à cocher est cochée, ajoute la valeur au tableau des catégories
  // Sinon, filtre les catégories pour supprimer la valeur
  if (target.checked) {
    state.filters.categories.value.push(value);
  } else {
    state.filters.categories.value = state.filters.categories.value.filter((cat) => cat !== value);
  }
}

</script>

<style scoped lang="scss">
.fc-input-selected {
  box-shadow: 0 0 0 0.25rem rgba(5, 223, 215, 0.25);
}
</style>