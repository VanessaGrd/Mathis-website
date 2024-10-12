<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <img class="avatar" src="../assets/avatar.jpeg" alt="avatar" />
    <div class="linksContainer">
      <RouterLink to="/dashboard">Accueil</RouterLink>
      <RouterLink to="/logout">Déconnexion</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.avatar {
  border-radius: 100%;
  width: 50px;
}
.linksContainer {
  width: 30%;
  display: flex;
  justify-content: space-around;
}

.linksContainer a {
  text-decoration: none;
  list-style-type: none;
  color: #D6E1FF;
  font-size: 20px;
}
</style>
