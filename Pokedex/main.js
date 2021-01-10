const poke_container = document.getElementById("poke_container");

const totalPokemons = 809;

const colors = {
    fire:'#fddfdf',
    grass:'#defde0',
    electric:'#fcf7de',
    water:'#def3fd',
    ground:'#f4e7da',
    rock:'#d5d5d4',
    fairy:'#fceaff',
    poison:'#98d7a5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    psychic:'#eaeda1',
    flying:'#f5f5f5',
    fighting:'#e6e0d4',
    normal:'#f5f5f5',
    fairy:' #ffccd5',
    dark: '#5C483B',
    steel:' #f2f2f2',
    ghost: '#614c83',
    ice: '#98D8D8'
};

const mainTypes = Object.keys(colors);

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

const fetchPokemons = async () => {
  for (let i = 1; i <= totalPokemons; i++) await getPokemon(i);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const poke_types = pokemon.types.map(ele => ele.type.name);
  const type = mainTypes.find(type => poke_types.indexOf(type) > -1);
  const color = colors[type];
  pokemonEl.style.backgroundColor = color;
  const pokemonInnerHTML = `
    <div class='img-container'>
        <img src='https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png'>
    </div>
    <div class="info">
    <span class="number">#${pokemon.id.toString().padStart(3,'0')}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type:<span>${type}</span></small>
    </div>`;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
