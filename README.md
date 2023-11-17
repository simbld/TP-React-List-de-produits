   [EN]

Creation of a small interface with two root components with a search system which will filter the products and below a table which will list them.

The app will be divided into 2 parts:

    1st part: the search bar (<SearchBar/>)

<Input/> => will have a dedicated component
<Checkbox/> => will have a reusable component

    2nd part: the list of fruits then vegetables (<ProductTable/>)

<ProductCategoryRow> will display the fruit category
    <ProductRow> will display all product data

<ProductCategoryRow> will display the vegetable category
    <ProductRow> will display all product data

__FAQ__

---------- TOOLS ----------

. Concurrently: Allows multiple commands to run concurrently in the same CLI
. Husky: Allows you to run specific commands that trigger on git events
. Quick: Alternative to Create-React-App, bringing together fewer tools for a smoother experience
. ESLint: “Code quality” tool, guarantees that the chosen rules will be applied
. Prettier: “Code quality” tool also, focused on the style guide
. _Airbnb Standard_: One of the best-known "standards", even if it is not officially linked to ES/JS
. Nodemon: Allows you to restart the server each time a .js file is updated





    [FR]

Création d'une petite interface a deux composants racine avec un système de recherche qui va filtrer les produits et en dessous un tableau qui va les lister.

Le découpage de l'appli se fera en 2 parties: 

    1ère partie: la barre de recherche (<SearchBar/>)

<Input/> => aura un composant dédié
<Checkbox/> => aura un composant réutilisable

    2ème partie: la liste de fruits puis de légumes (<ProductTable/>)

<ProductCategoryRow> affichera la catégorie fruit
    <ProductRow> affichera l'ensemble des données du produit

<ProductCategoryRow> affichera la catégorie légume
    <ProductRow> affichera l'ensemble des données du produit

__FAQ__

        ----------   OUTILS   ----------

. Concurrently : Permet à plusieurs commandes de s'exécuter simultanément dans la même CLI
. Husky : Permet d'exécuter des commandes spécifiques qui se déclenchent sur des événements git
. Vite : Alternative à Create-React-App, regroupant moins d'outils pour une expérience plus fluide
. ESLint : Outil « Qualité du code », garantit que les règles choisies seront appliquées
. Prettier : Outil "Qualité du code" également, axé sur le guide de style
. _ Airbnb Standard_ : Un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
. Nodemon : Permet de redémarrer le serveur à chaque fois qu'un fichier .js est mis à jour



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
