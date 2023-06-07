const {get, post } = require("./utils.js")
    const App = {
        async init(pokeName){
        const resp = await get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        const resp2 = await get(resp.species.url);
        const resp3 = await get(resp2.evolution_chain.url);
        const abilities = [];
        const Evolution = [];
        resp.abilities.forEach(element => {
            abilities.push(element.ability.name);
        });
        Evolution.push(resp3.chain.species.name);
        resp3.chain.evolves_to.forEach(element => {
            Evolution.push(element.species.name);
        });
        resp3.chain.evolves_to.forEach(element => {
            element.evolves_to.forEach(element => {
                Evolution.push(element.species.name);
            });
        });
        let pokemon = {
            name: resp.name,
            id: resp.id,
            weight: resp.weight,
            height: resp.height,
            abilities: abilities,
            evolves_to: Evolution,
        }
        console.log({pokemon});
        },
    };
App.init("eevee");