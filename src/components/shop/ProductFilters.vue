<template>
    <aside class="bg-body-secondary border shadow-sm d-flex flex-column flex-shrink-0 p-3 rounded">
        <!-- Button close  -->
        <div class="text-end order-1 order-md-0">
            <i class="bi bi-x-circle text-info bg fs-4 fc-pointer mb-2"></i>
        </div>

        <!-- FILTERS -->
        <!-- Search -->
        <div class="mt-4">
            <h4 class="text-uppercase h6 pb-2"><i class="bi bi-binoculars-fill me-2"></i>Rechercher</h4>
            <div class="input-group mb-3">
                <input type="text" class="form-control fs-7" placeholder="Chercher" />
                <span class="input-group-text btn btn-primary fc-pointer mb-2"><i class="bi bi-search"></i></span>
            </div>
        </div>
        <hr />
        <!-- Categories filter -->
        <div>
            <h4 class="text-uppercase h6 pb-2"><i class="bi bi-tags-fill me-2"></i>Catégories</h4>
            <ul class="list-group item form-check">
                <!-- Category 1-->
                <li class="list-group item">
                    <div 
                      class="list-group-item list-group-item-action fc-pointer mb-2"
                      :class="{ 'border-primary' : isCategory1Checked }"
                    >
                        <label class="form-check" for="category-1">
                            <input 
                              id="category-1" 
                              class="form-check-input" 
                              name="category-1" 
                              type="checkbox" 
                              :checked="isCategory1Checked"
                              />
                            <span class="form-check-label fs-7"> Gadgets Lumineux </span>
                        </label>
                    </div>
                </li>
                <!-- Category 2 -->
                <li class="list-group item">
                    <div class="list-group-item list-group-item-action fc-pointer mb-2">
                        <label class="form-check" for="category-2">
                            <input id="category-2" class="form-check-input" name="category-2" type="checkbox" />
                            <span class="form-check-label fs-7"> Technologie Futuriste </span>
                        </label>
                    </div>
                </li>
                <!-- Category 3 -->
                <li class="list-group item">
                    <div class="list-group-item list-group-item-action fc-pointer mb-2">
                        <label class="form-check" for="category-3">
                            <input id="category-3" class="form-check-input" name="category-3" type="checkbox" />
                            <span class="form-check-label fs-7"> Café et Code </span>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
        <hr />
        <!-- Prices filter -->
        <div>
            <h4 class="text-uppercase h6 pb-2"><i class="bi bi-coin me-2"></i>Prix</h4>
            <ul class="list-group item form-check">
                <!-- Tous les prix-->
                <li class="list-group item">
                    <div class="list-group-item list-group-item-action fc-pointer mb-2">
                        <label class="form-check" for="all">
                            <input id="all" class="form-check-input" name="price" type="radio" value="all" checked />
                            <span class="form-check-label fs-7"> Tous les prix </span>
                        </label>
                    </div>
                </li>
                <!-- Moins de 100-->
                <li class="list-group item">
                    <div class="list-group-item list-group-item-action fc-pointer mb-2">
                        <label class="form-check" for="0-100">
                            <input id="0-100" class="form-check-input" name="price" type="radio" value="0-100" />
                            <span class="form-check-label fs-7"> Moins de 100€ </span>
                        </label>
                    </div>
                </li>
                <!-- 100-500 -->
                <li class="list-group item">
                    <div class="list-group-item list-group-item-action fc-pointer mb-2">
                        <label class="form-check" for="100-500">
                            <input id="100-500" class="form-check-input" name="price" type="radio" value="100-500" />
                            <span class="form-check-label fs-7"> Entre 100 et 500€ </span>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">

const isCategory1Checked = true
</script>

<style scoped lang="scss">
</style>
