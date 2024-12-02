const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
let firstPick;
let isPaused = true;
let matches;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// Charger les Pokémon
export const loadPokemon = async () => {
  const randomIds = new Set();
  while (randomIds.size < 8) {
    const randomNumber = Math.ceil(Math.random() * 150);
    randomIds.add(randomNumber);
  }
  const pokePromises = [...randomIds].map((id) => fetch(pokeAPIBaseUrl + id));
  const responses = await Promise.all(pokePromises);
  return await Promise.all(responses.map((res) => res.json()));
};

// Réinitialiser le jeu
export const resetGame = async (gameElement, handleCardClick) => {
  gameElement.innerHTML = "";
  isPaused = true;
  firstPick = null;
  matches = 0;
  setTimeout(async () => {
    const loadedPokemon = await loadPokemon();
    displayPokemon([...loadedPokemon, ...loadedPokemon], gameElement, handleCardClick);
    isPaused = false;
  }, 200);
};

// Afficher les Pokémon et attacher les événements de clic
export const displayPokemon = (pokemon, gameElement, handleCardClick) => {
  pokemon.sort((_) => Math.random() - 0.5);
  const pokemonHTML = pokemon
    .map((pokemon) => {
      const type = pokemon.types[0]?.type?.name || "normal";
      const color = colors[type] || "#F5F5F5";

      return `
    <div class="card" style="background-color":${color}"
    data-pokename="${pokemon.name}">
    <div class="front"></div>
    <div class="back rotated" style="background-color:${color}">
    <img src="${pokemon.sprites.front_default}" alt=${pokemon.name}/>
    <h2>${pokemon.name}</h2>
    </div>
    </div>`;
    })
    .join("");
  gameElement.innerHTML = pokemonHTML;

  // Attacher les événements de clic après le rendu des cartes
  const cards = gameElement.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => handleCardClick(card));
  });
};

// Gérer le clic sur une carte
export const clickCard = (card) => {
  const pokemonCard = card;
  const [front, back] = getFrontAndBackFromCard(pokemonCard);
  // Ignorer le clic si la carte est déjà retournée ou si le jeu est en pause
  if (front.classList.contains("rotated") || isPaused) {
    return;
  }
  isPaused = true;
  rotateElements([front, back]);
  if (!firstPick) {
    firstPick = pokemonCard;
    isPaused = false;
  } else {
    const secondPokemonName = pokemonCard.dataset.pokename;
    const firstPokemonName = firstPick.dataset.pokename;
    if (firstPokemonName !== secondPokemonName) {
      const [firstFront, firstBack] = getFrontAndBackFromCard(firstPick);
      setTimeout(() => {
        rotateElements([front, back, firstFront, firstBack]);
        firstPick = null;
        isPaused = false;
      }, 500);
    } else {
      matches++;
      if (matches === 8) {
        return `
              <p class="title-win">Bravo !</p>`;
      }
      firstPick = null;
      isPaused = false;
    }
  }
};

// Obtenir les faces avant et arrière d'une carte
const getFrontAndBackFromCard = (card) => {
  const front = card.querySelector(".front");
  const back = card.querySelector(".back");
  return [front, back];
};

// Faire tourner (retourner) les cartes
const rotateElements = (elements) => {
  if (typeof elements !== "object" || !elements.length) return;
  elements.forEach((element) => element.classList.toggle("rotated"));
};
