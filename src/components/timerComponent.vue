<template>
  <div>
    <p id="chrono">{{ formattedTime }}</p>
  </div>
</template>

<script setup>
import {  ref} from "vue";
 
let seconds = 0;
let minutes = 0;
let hours = 0;
let formattedTime = ref("");

// Actualisation du temps chaque seconde
setInterval(updateTimer, 1000);

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  // Formatage des heures, minutes et secondes
  formattedTime.value = `${hours.toString().padStart(2, "0")} h ${minutes
    .toString()
    .padStart(2, "0")} min ${seconds.toString().padStart(2, "0")} s`;
}


</script>

<style scoped>
/* Styles spécifiques au besoin */
</style>
