const cache = require("./cache");
const utils = require("./utils");

 module.exports = {
    pokemon: {
        getCache() {
            return cache;
          },
          getUrl(pokemonId) {
            return `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
          },
          async get(pokemonId) {
            let pokemon, fromCache;
            if(cache[pokemonId]) {
              pokemon = cache[pokemonId];
              fromCache = true;
            } else {
                setTimeout(() => {
                    delete cache[pokemonId];
                }, 300000);
                const json = await utils.get(this.getUrl(pokemonId));
                const json2 = await utils.get(json.species.url);
                const json3 = await utils.get(json2.evolution_chain.url);
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
                let pokemonsh = {
                    name: json.name, id: json.id, weight: json.weight, height: json.height,
                    abilities: abilities, evolves_to: Evolution,
                }
              cache[pokemonId] = pokemonsh;
              fromCache = false;
              pokemon = pokemonsh;
            }
            return this.serializePokemon(pokemon, fromCache);
          },
          serializePokemon(pokemon, fromCache = false) {
            return {
              fromCache,
              pokemon,
            };
          },
        },
    }
    //   };
    // async getPoke(pokeName){
    // const json = await get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    // const json2 = await get(json.species.url);
    // const json3 = await get(json2.evolution_chain.url);
    // const abilities = [];
    // const Evolution = [];
    // json.abilities.forEach(element => {
    //     abilities.push(element.ability.name);
    // });
    // Evolution.push(json3.chain.species.name);
    // json3.chain.evolves_to.forEach(element => {
    //     Evolution.push(element.species.name);
    // });
    // json3.chain.evolves_to.forEach(element => {
    //     element.evolves_to.forEach(element => {
    //         Evolution.push(element.species.name);
    //     });
    // });
    // let pokemon = {
    //     name: json.name, id: json.id, weight: json.weight, height: json.height,
    //     abilities: abilities, evolves_to: Evolution,
    // }
    // return pokemon
    // },
   