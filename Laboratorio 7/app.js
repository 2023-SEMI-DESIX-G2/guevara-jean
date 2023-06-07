const {get, post } = require("./utils.js")
    const App = {
        async init(pokeName){
        const json = await get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        const json2 = await get(json.species.url);
        const json3 = await get(json2.evolution_chain.url);
        const abilities = [];
        const Evolution = [];
        json.abilities.forEach(element => {
            abilities.push(element.ability.name);
        });
        Evolution.push(json3.chain.species.name);
        json3.chain.evolves_to.forEach(element => {
            Evolution.push(element.species.name);
        });
        json3.chain.evolves_to.forEach(element => {
            element.evolves_to.forEach(element => {
                Evolution.push(element.species.name);
            });
        });
        let pokemon = {
            name: json.name, id: json.id, weight: json.weight, height: json.height,
            abilities: abilities, evolves_to: Evolution,
        }
        console.log({pokemon});
        },
    };
App.init("eevee");