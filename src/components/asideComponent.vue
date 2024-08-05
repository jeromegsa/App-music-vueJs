<template>
  <aside class="aside-left" v-if="props.albumCurrent">
    <div class="aside-content">
      <img :src="props.albumCurrent.coverImage" style="max-width: 200px" />
      <p>
        <strong>{{ props.albumCurrent.title }}</strong>
      </p>
      <button class="playbutton">PLay</button>

      <h2 class="list">List of songs</h2>
      <div class="tags">
        <span
          v-for="(tag, index) in props.albumCurrent.tracks"
          :key="index"
          class="tag"
        >
          <li class="liste">{{ tag.title }}</li>
        </span>
      </div>
    </div>
  </aside>
</template>

<script setup>
// J'envoie l'objet via props
const props = defineProps({
  albumCurrent: {
    type: Object,
    required: true,
  },
});

console.log("albumCurrent", props.albumCurrent);
</script>

<style scoped>
.liste {
  list-style-type: none;
  padding: 8px;
}

.list {
  background-color: #007bff;
  color: white;
  padding: 10px;
}
.playbutton {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 70px;
}

.playbutton:hover {
  background-color: #0056b3;
}
</style>