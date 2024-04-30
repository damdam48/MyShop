# Boutique Part 2 : Utiliser les directives simples

### 1. **Titre du composant ProductList :**
- Créez une variable `titre` dans le script du composant `ProductList` pour stocker le titre du composant.
- Utilisez la directive `v-text` pour afficher le titre dans le template du composant.

### 2. **Mise en place de la carte du produit :**
- Créez un objet `product` dans le script du composant `ProductCard` contenant les données du produit (nom, image, prix, etc.).
- Utilisez la directive `v-text` pour lier les valeurs des propriétés de l'objet `product` aux éléments HTML correspondants dans le template du composant.
- Utilisez la directive `v-bind` pour lier l'attribut `src` de l'élément `img` (Les images étant stockées dans le dossier `public`, elles sont accessibles facilement)

### 3. **Stylisation de la première case à cocher des catégories :**
- Créez une variable `isCategory1` dans le script du composant `ProductFilter` pour stocker l'état de la première case à cocher (initialement `true`).
- Utilisez la directive `v-bind:checked` pour lier l'état de la première case à cocher à la variable `isCategory1`.
- Utilisez la directive `v-bind:class` pour appliquer une classe dynamiquement en fonction de l'état de cette première checkbox.
- voici un exemple :
![Exemple](./docs/assets/category1-checked.jpeg)
- rem: Nous n'avons pas encore vu de la réactivité, cette implémentation ne va pas fonctionner de manière dynamique

### 4. **Préparer le composant pour le changement de thème :**
1. **Créer un composant `ThemeDropdown` :**
- Créez un nouveau composant `ThemeDropdown` pour gérer le changement de thème
- Vous stockerez le dropdown de changement de thème dans ce composant, et vous vous l'appellerez dans La barre de navigation.
2. **Déporter la gestion auto du thème dans ce composant :**
- Supprimez le code qui permet de changer le thème de l'application (dans le fichier `App.vue`)
- Récupérez la valeur du thème de l'utilisateur en fonction de la préférence du système
```javascript
// Récupérer la valeur du thème de l'utilisateur en fonction de la préférence du système
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```
- Vous pouvez charger le thème de l'utilisateur