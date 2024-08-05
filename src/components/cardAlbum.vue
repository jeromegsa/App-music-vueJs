
<script setup>
import albums from "../assets/data ";
const emit = defineEmits(["afficher-details"]);
// const afficherDetails= ()=>emit( "afficher-details",album);

const props = defineProps({
  askAlbum: {
    type: Object,
    required: true,
  },
});
</script>



<template>
  <div class="album-card" v-for="(album, index) in albums" :key="index">
    <div class="album-header">
      <h3 class="genre">{{ album.genre }}</h3>
    </div>
    <div class="album-details">
      <router-link :to="/album/ + index">{{ album.title }}</router-link>
      <RouterView/>
      <p class="album-artist">{{ album.artist }}</p>
      <p class="album-description">{{ album.description }}</p>
      <div class="tags">
        <span v-for="(tag, index) in album.tags" :key="index" class="tag">{{
          tag
        }}</span>
      </div>
      <div class="card-foot">
        <button>EN</button>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path
              d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
            />
          </svg>
          5
        </p>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path
              d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"
            />
          </svg>
        </p>
        <p class="album-duration">{{ album.duration }}</p>
        <button class="details-button" @click="emit('afficher-details', album)">
          Détails
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
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

.album-details h2 {
  margin-top: 0;
  font-size: 1.5em;
  color: #333;
}

.album-details p {
  margin: 10px 0;
  color: #666;
  line-height: 1.6;
}

.tags {
  margin-top: 10px;
  padding: 15px;
}

.tag {
  display: flex;

  background-color: #17a2b8;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  margin-right: 5px;
  font-size: 0.9em;
}

.details-button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #218838;
}

.tag {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  margin-right: 5px;
}

.details-button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.details-button:hover {
  background-color: #218838;
}

.tag {
  margin-top: 10px;
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>

