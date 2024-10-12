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
  color: #d6e1ff;
  font-size: 20px;
  position: relative;
  transition: color 0.3s ease; 
}
.linksContainer a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #EC4048; /* Couleur de soulignement au hover */
  transition: width 0.3s ease, left 0.3s ease;
}
.linksContainer a:hover {
  transform: scale(1.05);
}
.linksContainer a:hover::before {
  width: 100%;
  left: 0;
}
</style>
