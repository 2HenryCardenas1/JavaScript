const URL = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
const nodoApp = document.querySelector("#app");

function main() {
    window.fetch(`${URL}`)
        .then(response => response.json())
        .then(responseJson => {
            responseJson.results.forEach(pokemon => {
                pokemonData(pokemon);
            });

        });
}

function pokemonData(pokemon) {
    let dataUrl = pokemon.url;
    fetch(dataUrl)
        .then(response => response.json())
        .then(function (data) {
           
            const pokemons = [];

            const namePokemon = document.createElement("H1");
            namePokemon.textContent = `${data.name}`;
            namePokemon.className = "text-lg capitalize";

            //Images 
            const imagePokemon = document.createElement("img");
            imagePokemon.src = `${data.sprites.other.dream_world.front_default}`;
            imagePokemon.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            console.log(imagePokemon);

            //Ability
            const ability = document.createElement("p");
            ability.textContent = `Habilidad : ${data.abilities[0].ability.name}`;

            //Experience
            const experience = document.createElement("p");
            experience.textContent = `${data.base_experience} + xp`;

            //Contenedor
            const nameAndability = document.createElement("div");
            nameAndability.className = "text-center md:text-left";
            nameAndability.appendChild(namePokemon);
            nameAndability.appendChild(experience);
            nameAndability.appendChild(ability);

            //Card
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.appendChild(imagePokemon);
            card.appendChild(nameAndability);
            


            pokemons.push(card);
            //console.log(data);
            nodoApp.append(...pokemons);
            
        })
}

main();

