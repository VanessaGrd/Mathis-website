<template>
  <div class="memory-block">
      <div id="game" ref="gameElement" class="memory-container"</div>
        <button class="reset-button" @click="resetGameClick">Recommencer</button>
        <p v-if="gameWon" class="title-win">Bravo 👏 !</p>
      </div>
</template>

<script>
import { clickCard, resetGame } from "../src/pokememory";
export default {
  name: "Pokemon Memory",
  data(){
    return {
      gameWon: false
    }
  },
  methods: {
 async resetGameClick() {
      const gameElement = this.$refs.gameElement; // Récupérer l'élément via ref
      this.gameWon = false; // Réinitialiser l'état de victoire
      await resetGame(gameElement, this.handleCardClick); // Réinitialiser le jeu
    },
    handleCardClick(cardElement) {
      const isWin = clickCard(cardElement) // Gérer le clic sur la carte
      if (isWin) {
        this.gameWon = true; // Si le joueur gagne, mettre à jour l'état
      }
    },    
  },
  playSound () {
    const audio = new Audio("/arcade.mp3");
    audio.currentTime = 0;
    audio.play();
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
.memory-block{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
    background-image: url("../src/assets/pokecard.png");
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
    background-size: 150px;
}
.reset-button {
    font-size:18px;
    border: 2px solid #d6e1ff;
    color: #d6e1ff;
    box-shadow: 0 0 5px rgba(214, 225, 255, 1), 0 0 10px rgba(214, 225, 255, 1),
    0 0 15px hsl(224, 100%, 92%), 0 0 20px rgba(214, 225, 255, 1);
    transition: 0.4s;  
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.title-win{
  z-index: 1000;
  background-color: #141726;
  color: #d6e1ff;
  box-shadow: 0 0 5px rgba(214, 225, 255, 1), 0 0 10px rgba(214, 225, 255, 1),
    0 0 15px hsl(224, 100%, 92%), 0 0 20px rgba(214, 225, 255, 1);
  align-items: center;
  position: fixed;
  font-size: 48px;
  padding: 5px;
  border-radius: 10px;

}
</style>