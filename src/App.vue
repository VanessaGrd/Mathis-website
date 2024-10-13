<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <video autoplay loop muted class="background-video">
    <source src="./assets/videobackground.mp4" type="video/mp4">
</video>

<div class="app-container">
  <img class="avatar" src="./assets/avatar.jpeg" alt="avatar" />
  <header>
    <Navbar/>    
  </header>
  
  <main class="main-content">
    <RouterView/>
  </main>
</div>
</template>

<style scoped>
.app-container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.avatar {
  width: 120px;
}

.main-content{
  flex-grow: 1;
  height: calc(100vh-60px);
  width: 100vw;
  overflow-y: auto;
  position: relative;
  justify-content: center;
  display: flex;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0; /* Ajout de left: 0 pour s'assurer qu'elle commence au coin supérieur gauche */
  width: 100%;
  height: 100%; /* Assure que la vidéo prend toute la hauteur */
  object-fit: cover; /* Pour que la vidéo couvre tout le conteneur sans déformation */
  z-index: -1; /* Permet de mettre la vidéo en arrière-plan */
}
</style>
