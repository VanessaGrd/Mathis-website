<template>
      <button @click="resetGameClick">Reset</button>
      <div id="game" ref="gameElement" class="memory-container" @click="handleCardClick"</div>
        <p v-if="gameWon" class="title-win">Bravo !</p>
</template>

<script>
import { resetGame, clickCard } from "../src/pokememory";
export default {
  name: "Pokemon Memory",
  methods: {
 async resetGameClick() {
      const gameElement = this.$refs.gameElement; // Récupérer l'élément via ref
      this.gameWon = false; // Réinitialiser l'état de victoire
      await resetGame(gameElement, this.handleCardClick); // Réinitialiser le jeu
    },
    handleCardClick(event) {
      const isWin = clickCard(event); // Gérer le clic sur la carte
      if (isWin) {
        this.gameWon = true; // Si le joueur gagne, mettre à jour l'état
      }
    }
  },
  mounted() {
    this.resetGameClick(); // Charger le jeu au montage du composant
  }
};

</script>

<style>
.memory-container{
  display: grid;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: repeat(4, 160px);
  grid-gap: 10px;

}

.card{
  box-shadow: 0 3px 10px rgba(200, 200, 200, 0.9);
  border-radius: 10px;
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
}

.card > .front, .card > .back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    transition: transform 0.5s;
}

.back>h2 {
    margin: 0;
    font-size: 16px;
}

.rotated {
    transform: rotateY(180deg);
}

.front {
    background-image: url("/pokeball.png");
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
}
button {
    font-size:18px;
    background-color: #c62828;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.title-win{
  z-index: 1000;
  background-color: blue;
  align-items: center;
  display: flex;
}
</style>