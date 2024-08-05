<template>
  <form>
  <label for="email">Adresse e-mail</label>
  <input type="email" id="email" name="email" placeholder="Entrez votre e-mail">
  <small>Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</small>
  <label for="password">Mot de passe</label>
  <input type="password" id="password" name="password" placeholder="Mot de passe">
  <div class="checkbox">
    <input type="checkbox" id="stayLoggedIn" name="stayLoggedIn">
    <label for="stayLoggedIn">Rester connecté</label>
  </div>
  <button type="submit">Se connecter </button>
</form>
</template>

<script>

</script>

<style scoped>
form {
    background: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .checkbox {
    margin-bottom: 10px;
  }
  button {
    width: 25%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #007bff;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background: #0056b3;
  }
</style>