<template>
  <div>
    <h2>Tes partitions</h2>
    <div id="alphaTab"></div>

    <button @click="getParition">Ecouter la partition</button>
  </div>
</template>

<script>
import { AlphaTab } from "@coderline/alphatab";

export default {
  name: "DrumSheetViewer",
  mounted() {
    this.initAlphaTab();
  },
  methods: {
    getParition() {
      const partition = document.getElementbyId("alphaTab");
      this.alphaTab = new AlphaTab.AlphaTabApi(container, {
        file: "/partitions/rythme-simple.gp", // Remplace par le chemin de ton fichier
        player: {
          enablePlayer: true, // Active la lecture audio
          soundFont: "/soundfonts/default.sf2", // Facultatif : pour de meilleurs sons
        },
      });
    },
    playTab() {
      this.alphaTab.play(); // Joue la partition
    },
  },
};
</script>
