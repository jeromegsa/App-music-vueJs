<template>
  <div class="nav">
    <nav>
      <logo>MUZART</logo>
      
      <ul>
        <li><router-link to="/home">Home</router-link></li>
       <li><router-link  to="/formulaire">Se connecter </router-link></li>
    
      </ul>
      <RouterVieuw/>
      <AccountInfo></AccountInfo>
    </nav>
  </div>
</template>

<script setup>
import AccountInfo from '../components/timerComponent.vue'; //  du chemin 


</script>

<style>
/* Styles pour la barre de navigation */
body {
  margin: 0 auto;
  max-width: 900px;
}
.nav {
  background-color: #007bff; /* Couleur de fond de la navbar */
  color: #fff; /* Couleur du texte */
  padding: 10px 20px;
  /* height: 50px; */
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}



ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  padding:10px
}

ul li {
  margin-left: 20px;
}

ul li a {
  text-decoration: none;
  color: inherit;
 
}

ul li a:hover {
  color: #fff; /* Changement de couleur au survol */
}

logo {
  font-family: 'Arial', sans-serif; /* Remplacez par la police de caractères que vous utilisez */
  font-size: 1.5em; /* Ajustez la taille de la police selon vos besoins */
  color: transparent;
  background: linear-gradient(to right, #FF0076, #00DBFF); /* Gradient de rose à bleu clair */
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 2px 2px 4px #0000FF; /* Ombre pour un effet de profondeur */
}

</style>
