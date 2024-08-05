<template>
  <div>
    <div class="album-card">
      <div class="album-header">
        <h3 class="genre">{{ tab.genre }}</h3>
      </div>

      <div class="album-details">
        <img :src="tab.coverImage" style="max-width: 200px" />

        <h1>{{ tab.title }}</h1>
        <p class="album-artist">{{ tab.artist }}</p>
        <p class="album-description">{{ tab.description }}</p>
      </div>
    </div>
    <p>{{}}</p>
  </div>
</template>

<script setup>
import albums from "../assets/data ";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
let tab = albums[props.id];
// const album = albums.find(item => item.index === props.id);
</script>

<style>
.album-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.album-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #007bff;
  padding: 10px;
}

.album-header .genre {
  margin: 0;
  color: #fff;
  font-size: 1.2em;
}

.album-details {
  padding: 20px;
}

.card-foot {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: left;
}
</style>