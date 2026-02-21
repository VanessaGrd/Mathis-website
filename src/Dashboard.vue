<template>
  <div class="button-container">
    <RouterLink class="button neon-button" to="/dashboard/memory">
      <img
        class="pikatchu-picture"
        src="./assets/pikatchu.png"
        alt="pikatchu"
      />
      Memory</RouterLink
    >
    <RouterLink class="button neon-button" to="dashboard/todo">
      <img
        class="pikatchu-picture"
        src="./assets/tasklist.png"
        alt="tasklist"
      />Liste de tâches</RouterLink
    >
    <RouterLink class="button neon-button" to="dashboard/drump">
      <img
        class="pikatchu-picture"
        src="./assets/piano.jpg"
        alt="piano"
      />Partitons</RouterLink
    >
  </div>
</template>

<script>
import Memory from "./Memory.vue";

export default {
  components: {
    Memory,
  },
};
</script>

<style>
.button-container {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 50px;
}

.button {
  background-color: rgba(237, 231, 231, 0.4);
  width: 15rem;
  height: 18rem;
  border-radius: 10px;
  color: #141726;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}

.neon-button {
  border: 2px solid #d6e1ff;
  color: #d6e1ff;
  box-shadow:
    0 0 5px rgba(214, 225, 255, 1),
    0 0 10px rgba(214, 225, 255, 1),
    0 0 15px rgba(214, 225, 255, 1),
    0 0 20px rgba(214, 225, 255, 1);
  transition: 0.4s;
}

.neon-button:hover {
  border: 2px solid #ec4048;

  background-color: rgba(237, 231, 231, 0.1);
  box-shadow:
    0 0 10px rgba(236, 64, 72, 1),
    0 0 15px rgba(236, 64, 72, 1),
    0 0 20px rgba(236, 64, 72, 1),
    0 0 25px rgba(236, 64, 72, 1);
  transform: scale(1.05);
}

.neon-button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transform: rotate(45deg);
  transition: 0.5s;
}

.neon-button:hover::before {
  background: rgba(255, 255, 255, 0.15);
}
.pikatchu-picture {
  width: 150px;
}
</style>
