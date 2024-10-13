<template>
  <div class="navbar">
    <div class="linksContainer">
      <RouterLink class="nav-link" to="/dashboard">Accueil</RouterLink>
      <RouterLink class="nav-link" to="/logout">Déconnexion</RouterLink>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
setup() {
  const playSound = ()  => {
    const audio = new Audio('/public/arcade.mp3');
    audio.currentTime = 0 ;
    audio.play().catch(error => {
        console.error("Erreur lors de la lecture du son :", error);
      });
  };

onMounted(() => {
  const linkAudio = document.querySelectorAll(".nav-link");
    linkAudio.forEach(link => {
      link.addEventListener("click", playSound)
    });
});
}
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
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
  background-color: #ec4048; /* Couleur de soulignement au hover */
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
