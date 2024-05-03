# Boutique Part 4 : Rendre réactif les filtres et le choix du thème

---

## Le composant `ProductFilter`

### 1. Rendre les filtres réactifs

- Dans le composant `ProductFilter`, créez une variable réactive `state` qui gérera l'état de l'application. (Nous déplacerons cet état dans un composant parent, lorsque nous aurons vu la communication entre les composants).
- Créer une propriété `filters` dans `state` qui contiendra les filtres de l'application et qui rendra réactive les filtres importés de `@/data/filters.data.ts`.
- NB : Vous pouvez visualiser l'état de l'application en ajoutant `{{ state }}` dans le template ou utiliser les [Vue Devtools](https://devtools.vuejs.org/).

#### 1.1. Le champ de recherche
- Mettre à jour à la propriété `search.value` de `state.filters` à chaque fois que l'utilisateur tape dans le champ de recherche.
- 💡Allez jeter un oeil à `v-model`

#### 1.2. Les filtres de prix
- Au changement de bouton radio (évènement `@change`) :
    - mettez à jour la propriété `price.value` de `state.filters` avec la valeur du bouton radio sélectionné.
    - Àjouter une bordure sur le bouton radio sélectionné.

#### 1.3. Les filtres de catégorie

- À chaque fois que l'on clique sur une checkbox :
  - Si la catégorie n'est pas déjà présente dans le tableau `categories.value`, ajoutez-la.
  - Sinon, retirez-la.
- Il faudra créer une fonction au `@change` de la checkbox pour faire cela.

---

## BONUS : Le composant `ThemeToggle`

### 1. Mise en place du choix de thème

#### 1.1 Création de la variable réactive `activeIcon`

- Dans le composant `ThemeToggle`, créez une variable réactive `activeIcon` qui contiendra la classe bootstrap de l'icône correspondant au choix de l'utilisateur.
- Utilisez cette variable réactive pour :
  - afficher l'icône correspondant au choix de la barre de navigation.
  - mettre la classe bootstrap `bg-info` sur l'élément correspondant au choix de l'utilisateur dans le dropdown.

#### 1.2. Création de la méthode `setTheme()`

- Créez ensuite une méthode `setTheme()` qui sera appelée lorsque l'utilisateur choisira un thème grâce à la directive `@click`.
- Faire tout d'abord en sorte que l'icône se mette à jour au clic
- Puis changer le thème de l'application en modifiant l'attribut `data-bs-theme` de l'élément `html`

#### 1.3. Création de la méthode `getBrowserTheme()`
- Créez une méthode `getBrowserTheme()` qui retourne le thème actuel du navigateur de l'utilisateur.
- Pour cela, utilisez la propriété `window.matchMedia` pour vérifier si le thème préféré de l'utilisateur est `dark` ou `light` (recherchez sur internet comment utiliser cette propriété).
- Si le thème préféré de l'utilisateur est `dark`, retournez `dark`, sinon retournez `light`.

### 2. Utilisation des cookies pour stocker le thème

#### 2.1. Création de fonctions utilitaires pour les cookies

- Dans un fichier utilitaire `@/utils/cookie.utils.ts`, créez les fonctions suivantes :
    ```ts
    /**
    * Retrieves the value of a cookie with the given name.
    *
    * @param {string} name - The name of the cookie.
    * @returns {string} - The value of the cookie if it exists, otherwise an empty string.
    */

    export function getCookie(name: string): string | undefined {
      const cookie = document.cookie
                        .split(';')
                        .find((cookie) => cookie.trim().startsWith(`${name}=`));
  
      return cookie ? cookie.split('=')[1] : undefined;
    }
    
    /**
    * Sets a cookie with the given name and value, which expires after the specified number of days.
    *
    * @param {string} name - The name of the cookie.
    * @param {string} value - The value of the cookie.
    * @param {number} days - The number of days until the cookie expires.
    */
    export function setCookie(name: string, value: string, days: number): void {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }
    
    /**
    * Deletes a cookie with the given name.
    *
    * @param {string} name - The name of the cookie.
    */
    export function deleteCookie(name: string): void {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
    ```
- Ces fonctions permettront de récupérer, de définir et de supprimer les cookies.

#### 2.2. Enregistrement du thème choisi dans un cookie

- Dans le composant `ThemeToggle`, importez les fonctions `setCookie`, `deleteCookie` depuis le fichier utilitaire `cookie.utils.ts`.
- Lorsque l'utilisateur choisit un thème dans le composant, utilisez la fonction `setCookie` pour enregistrer ce choix dans un cookie.
- Si l'utilisateur choisit le thème auto, utilisez la fonction `deleteCookie` pour supprimer le cookie. 

#### 2.3. Lecture du thème préféré depuis le cookie

- Lorsque le composant est monté (hook `onMounted()`), utilisez la fonction `getCookie` pour récupérer le thème préféré de l'utilisateur depuis le cookie.
- Si aucun thème n'est défini dans le cookie, utilisez la préférence du système de l'utilisateur pour déterminer le thème initial.

### 3. Pour peaufiner : Écouter le changement de thème du système
- Utilisez l'événement `change` de la méthode `window.matchMedia` pour écouter les changements de thème du système de l'utilisateur.

