<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
<div class="app-container">
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
}

header{
  height: 60px;
}
.main-content{
flex-grow: 1;
height: calc(100vh-60px);
width: 100vw;
overflow-y: auto;
}
</style>
