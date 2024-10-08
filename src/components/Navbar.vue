<script setup>

</script>

<template>
<div class="navbar">
  <img class="avatar" src="../assets/avatar.jpeg" alt="avatar">
  <div class="linksContainer">
    <a href="/dashboard">Accueil</a>
    <a href="/">Déconnexion</a>
  </div>
</div>
</template>

<style scoped>
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: red;
}
.avatar{
  border-radius: 100%;
  width: 50px;
}
.linksContainer{
  width: 30%;
  display: flex;
  justify-content: space-around;
}

.linksContainer a{
  text-decoration: none;
  list-style-type: none;
  color: black;
}
</style>
