<template>
  <navC></navC>

  <div class="container">
    <div class="sidebar">
      <aside-component :albumCurrent="albumDetails"></aside-component>
    </div>
    <div class="main-content">
      <formComponent></formComponent>
      <card @afficher-details="recupereDetails"></card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import navC from "../components/navComponent.vue";
import card from "../components/cardAlbum.vue";
import formComponent from "../components/formulaireComponent.vue";
import asideComponent from "../components/asideComponent.vue";

let albumDetails = ref({});

const recupereDetails = (album) => {
  albumDetails.value = album;
  console.log(albumDetails.value);
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: 100vh; /* Occupe toute la hauteur de la fenêtre */
  padding: 20px; /* Espacement pour éviter les bords collés */
}

.sidebar {
  width: 30%; /* Largeur fixe de la sidebar */
}

.main-content {
  flex: 1; /* Le contenu principal prend tout l'espace restant */
  margin-left: 20px; /* Espacement entre la sidebar et le contenu principal */
}

.aside-component li {
  list-style-type: none;
}

.aside-component {
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 100%; /* Occupe toute la hauteur de la sidebar */
  align-content: flex-start;
  
}

/* Styles pour aligner les éléments horizontalement dans aside-component */
.album-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.album-cover {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.album-title {
  margin: 0;
  font-size: 1.5em;
}


.album-description {
  margin-bottom: 10px;
}
.tags>li{
  list-style-type: none;
}
.tags {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag {
  display: inline-block;
  background-color: #17a2b8;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  margin-right: 5px;
  font-size: 0.9em;
}
</style>
