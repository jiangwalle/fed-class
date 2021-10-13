// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`;

function generatePokemanElement(id) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  
  const pokemonImg = document.createElement('img');
  pokemonImg.src = `${baseUrl}/${id}.png`;
  
  const text = document.createElement('span');
  text.innerText = `#${id}`;
  
  pokemon.appendChild(pokemonImg);
  pokemon.appendChild(text);
  
  return pokemon;
}


const container = document.querySelector('#container');
for (let i = 1; i <= 800; i++) {
  container.appendChild(generatePokemanElement(i));
}