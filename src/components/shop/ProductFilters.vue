<template>
  <aside class="bg-body-secondary border shadow-sm d-flex flex-column flex-shrink-0 p-3 rounded">
    <!-- Button close  -->
    <div class="text-end order-1 order-md-0">
      <i class="bi bi-x-circle text-info bg fs-4 gd-pointer"></i>
    </div>
      <p> {{ state.filters.search.value }}</p>
      <p> {{ state.filters.prices.value }}</p>
      <p> {{ state.filters.categories.value }}</p>
    <!-- FILTERS -->
    <div class="mt-4" v-for="(filter, key) in state.filters">
      <h4 class="text-uppercase h6 pb-2 "><i class="bi me-2" :class="filter.icon"></i>{{ filter.title }}</h4>

      <!-- If is a text input    -->
      <div v-if="filter.title === 'Rechercher'" class="input-group mb-3" >
        <input :type="filter.inputType" class="form-control fs-7 " :placeholder="filter.placeholder" v-model="state.filters.search.value">
        <span class="input-group-text btn btn-primary  gd-pointer"><i class="bi bi-search"></i></span>
      </div>

      <!-- For Category -->
      <ul v-else-if="filter.title === 'Catégories'" class="list-group item form-check ">
        <li class="list-group item " v-for="item in filter.items">
          <div class="list-group-item list-group-item-action gd-pointer mb-1"
          :class="(state.filters.categories.value.includes(item.name)) ? 'border border-primary fc-input-selected' : ''"
          >
            <label class="form-check" :for="`${key}-${item.id}`">
              <input 
                :id="`${key}-${item.id}`" 
                :name="`${key}-${item.id}`"
                class="form-check-input " 
                type="checkbox"
                :value="item.name" 
                :checked="state.filters.categories.value.includes(item.name)"
                @change="categoriesValue(item.name, ($event.target as HTMLInputElement).checked)" 
                
              >
              <span class="form-check-label fs-7">{{ item.name }}</span>
            </label>
          </div>
        </li>
      </ul>

      <!-- For Prices -->
      <ul v-else-if="filter.title === 'Prix'" class="list-group item form-check">
        <li class="list-group item" v-for="item in filter.items">
          <div class="list-group-item list-group-item-action gd-pointer mb-1"
            :class="(state.filters.prices.value === item.value) ? 'border border-primary fc-input-selected' : ''">
            <label class="form-check" :for="`${key}-${item.id}`">
              <input 
                :id="`${key}-${item.id}`" 
                class="form-check-input" 
                :value="item.value" 
                :checked="state.filters.prices.value == item.value"
                @change="priceValue(item.value)" 
                :name="`${key}`" 
                type="radio"
              >
            <span class="form-check-label fs-7">{{ item.name }}</span>
            </label>
          </div>
        </li>
      </ul>
    </div>


  </aside>
</template>
<script setup lang="ts">
import { INITIALS_FILTERS } from '@/data/filters.data';
import type { CategoryName, PriceType } from '@/interfaces/filter.interface';

import { reactive } from 'vue';

const state = reactive({
  filters: INITIALS_FILTERS,
  test: 'test1',
});

function priceValue (value: PriceType) {
  state.filters.prices.value = value;

  console.log(state.filters.prices.value);
}

function categoriesValue (name: CategoryName, isCkecked: boolean) {
  if (isCkecked) {
    state.filters.categories.value.push(name);
  } else {
    state.filters.categories.value = state.filters.categories.value.filter(item => item!== name);
  }
  console.log(isCkecked);

  console.log(state.filters.categories.value);
}

</script>

<style scoped lang="scss">
.fc-input-selected {
  box-shadow: 0 0 0 0.25rem rgba(5, 223, 215, 0.25);
}
</style>