<template>
  <div>
    <form action="" class="search-form">
      <input type="text" class="search-input" placeholder="Search..." />
      <button>Search</button>
    </form>
    <h1>Page principale Album Music</h1>
  </div>
</template>

<script setup>
</script>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box; /* Pour inclure le padding dans la largeur */
  border: none;
  border-bottom: 1px solid #ccc; /* Bordure inférieure grise pour indiquer l'input */
  font-size: 16px;
  margin-bottom: 30px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h1 {
  font-size: 24px;
  margin-top: 20px;
}
</style>
