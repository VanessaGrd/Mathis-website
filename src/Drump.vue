<template>
  <div class="partitionContainer">
    <h2 class="partitionTitle">Partitions et audio</h2>

    <div
      v-for="partition in partitions"
      :key="partition.id"
      class="partitionItem"
    >
      <h3 class="partitionName">{{ partition.title }}</h3>

      <a
        :href="partition.pdf"
        :download="getDownloadName(partition)"
        class="btnDownload"
      >
        Télécharger la partition (PDF)
      </a>

      <audio controls class="audioPlayer">
        <source :src="partition.audio" type="audio/mpeg" />
        Ton navigateur ne supporte pas la lecture audio.
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrumSheetViewer",
  data() {
    return {
      partitions: [
        {
          id: 1,
          title: "Harry Potter",
          pdf: "/partitions/Harry-potter.pdf",
        },
        {
          id: 2,
          title: "Ratatouille",
          pdf: "/partitions/Ratatouille.pdf",
        },
        {
          id: 3,
          title: "Ode à la joie",
          pdf: "/partitions/ode-a-la-joie.pdf",
        },
        {
          id: 4,
          title: "Around the World",
          pdf: "/partitions/Around-the-world.pdf",
        },
      ],
    };
  },
  methods: {
    getDownloadName(partition) {
      return `${partition.title.replace(/\s+/g, "-").toLowerCase()}.pdf`;
    },
  },
};
</script>

<style>
.partitionContainer {
  background-color: black; /* Couleur de fond sombre */
  color: #ec4048; /* Couleur rouge typique des terminaux vintage */
  width: 60vw;
  height: auto;
  padding: 20px;
  border: 3px solid #ec4048; /* Bord rouge néon */
  border-radius: 10px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 0px 15px #ec4048; /* Glow rouge */
}

.partitionTitle {
  font-size: 24px;
  margin-bottom: 20px;
}

.partitionItem {
  margin-bottom: 20px;
  background-color: black;
  color: #ec4048;
  padding: 15px;
  border: 2px solid #ec4048;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ec4048;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.partitionItem:hover {
  transform: translateY(-3px);
  background-color: #1a0000; /* Rouge foncé */
}

.partitionName {
  font-size: 18px;
  margin-bottom: 10px;
}

.btnDownload {
  display: inline-block;
  padding: 10px 15px;
  background-color: black;
  color: #ec4048;
  border: 2px solid #ec4048;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btnDownload:hover {
  transform: translateY(-2px);
  box-shadow: 0px 0px 10px #ec4048;
}

.audioPlayer {
  width: 100%;
  margin-top: 10px;
  color: #ec4048;
  background-color: black;
  border: 2px solid #ec4048;
  border-radius: 5px;
  box-shadow: inset 0px 0px 5px #ec4048;
}
</style>
