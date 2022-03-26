import { fillPokemonCard, getPokemonByNameOrId } from './const.js';

const btn = document.querySelector('#add');

let cardOfPokemons = localStorage.getItem('card')
const cardOnList = document.querySelector('.card-list')

if (cardOfPokemons) {
       cardOnList.innerHTML = JSON.parse (cardOfPokemons)
}



btn.addEventListener('click', async (event) => {
    const randomId = Math.floor(Math.random() * 100);
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);

        localStorage.setItem('card', JSON.stringify(cardOnList.innerHTML))
        
        
    } catch (error) {
        alert(error.message);
    }

});
