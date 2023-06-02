( () => {
    const App = {
        htmlElements: {
            form: document.querySelector('.form'),
            response: document.querySelector('.response'),
            agregar: document.querySelector('.agregar'),
            resultado: document.querySelector('.resultado'),
        },
        init:  () => {
            App.htmlElements.response.addEventListener("click", App.handlers.onSubmit);
            App.htmlElements.form.addEventListener("submit", App.handlers.onFormSubmit);
        },
        methods: {
            showNewInput(){
            const valido = confirm("ESTAS SEGURO QUE QUIERES HACER OTRA POKE-BUSQUEDAD")
            if(valido==true)
            App.htmlElements.resultado.innerHTML = ""
            },
            async showAverage({poke}){
                const sb = document.querySelector('#typeShear')
                if(sb.selectedIndex == 1){
                const pokemon = poke.toLowerCase()
                let respond = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                let json = await respond.json()
                let poke1 = json.name
                let poke2 = json.id
                let poke3 = json.height
                let poke4 = json.weight
                let poketype = json.types[0].type.name
                if (json.height > 9) {
                    var poke7 = `<img style="margin-left: 35px;" class="img-poke2" src="${json.sprites.back_default}">`
                    if (json.height > 14)
                    var poke7 = `<img style="margin-left: 45px;" class="img-poke2" src="${json.sprites.back_default}">`
                }else{
                    var poke7 = `<img class="img-poke2" src="${json.sprites.back_default}">`
                }
                if (json.height < 5) {
                    var poke7 = `<img style="margin-rigth: 35px;" class="img-poke2" src="${json.sprites.back_default}">`
                }
                let poke5 = `<img class="img-poke" src="${json.sprites.front_default}">`
                let poke6 = json.species.url
                var hidden1 = ""
                var hidden2 = ""
                var hidden3 = ""
                let poke8 = json.abilities[0].ability.name
                if (json.abilities[1] != undefined) {
                    var poke9 = `<li class="li2">${json.abilities[1].ability.name} ${hidden1}</li>`
                    if(json.abilities[1].is_hidden === true){
                        var hidden1 = `<img class="img-baby" src="./Imagenes/eyehidden.svg">` }
                        var poke9 = `<li class="li2">${json.abilities[1].ability.name} ${hidden1}</li>`
                } else {
                    var poke9 = ""
                }
                if (json.abilities[2] != undefined) {
                    var poke21 = `<li class="li2">${json.abilities[2].ability.name}${hidden3}</li>`
                    if(json.abilities[2].is_hidden === true){
                        var hidden3 = `<img class="img-baby" src="./Imagenes/eyehidden.svg">` }
                        var poke21 = `<li class="li2">${json.abilities[2].ability.name}${hidden3}</li>`
                } else {
                    var poke21 = ""
                }
                if(json.abilities[0].is_hidden === true){
                        var hidden2 = `<img class="img-baby" src="./Imagenes/eyehidden.svg">` }
                let species = await fetch(poke6)
                let json2 = await species.json()
                let color = json2.color.name
                let poke10 = json2.evolution_chain.url
                let evolution = await fetch(poke10)
                let json3 = await evolution.json()
                let poke11 = json3.chain.species.name
                var eevee = ""
                var poke13 = ""
                if (json3.chain.evolves_to[0] != undefined) {
                    var poke12= `<li class="li1">${json3.chain.evolves_to[0].species.name}</li>`
                    if (json3.chain.evolves_to[0].evolves_to[0] != undefined){
                        var poke13= `<li class="li1">${json3.chain.evolves_to[0].evolves_to[0].species.name}</li>`
                    }
                }else{
                    var poke12 = ""
                    var poke13 = ""
                }

                if (json3.chain.evolves_to[1] != undefined) {
                    var poke13 = `<li class="li1">${json3.chain.evolves_to[1].species.name}</li>`
                }
                if (json3.chain.evolves_to[2] != undefined) {
                    var poke22 = json3.chain.evolves_to[2].species.name
                    var poke16 = json3.chain.evolves_to[3].species.name
                    var poke17 = json3.chain.evolves_to[4].species.name
                    var poke18 = json3.chain.evolves_to[5].species.name
                    var poke19 = json3.chain.evolves_to[6].species.name
                    var poke20 = json3.chain.evolves_to[7].species.name
                    var eevee = `<li class="li1">${poke22}</li><li class="li1">${poke16}</li><li class="li1">${poke17}</li><li class="li1">${poke18}</li><li class="li1">${poke19}</li><li class="li1">${poke20}</li>`
                }
                let poke14= json3.chain.is_baby
                var poke15 = ""
                if(poke14 === true){
                    var poke15 = `<img class="img-baby" src="./Imagenes/baby.svg">` }
                App.htmlElements.resultado.innerHTML = `<div style="background: var(--${color})" class="pokedeks"> <h1  style="margin-bottom: 0px">${poke1} Id(${poke2}) Type    <img class="img-type" src="./Imagenes/${poketype}.svg"></h1>
                <div class="div-space">${poke5} ${poke7}<h2>Sprites</h2></div>
                <div class="div-space2"><h2>Height/Weight</h2><h2 style="color: black;" >${poke3}/${poke4}</h2></div><div class="div-space3"><h2>Evolution Chain</h2><h2>Abilities</h2></div><div class="div-space4">
                <li class="li1">${poke11} ${poke15}</li>${poke12} ${poke13} ${eevee}</div><div class="div-space5"><ul>
                <li class="li2">${poke8} ${hidden2}</li>${poke9}${poke21}</ul></div></div>
                </div>`
            }
            if(sb.selectedIndex == 2){
                const pokemon = poke.toLowerCase()
                let respond = await fetch("https://pokeapi.co/api/v2/ability?offset=0&limit=358")
                let json = await respond.json()
                for (let x = 0; x <= 358; x++) {
                    const abilitylist = json.results[x].name
                    if (abilitylist == pokemon) {
                        console.log(abilitylist)
                        var poke1 = abilitylist
                        var poke2 = json.results[x].url
                        break;
                    }
                }
                let ability = await fetch(poke2)
                let json2 = await ability.json()       
                    //cardsContainer.innerHTML = "";
                    const pokeab = json2.pokemon
                    App.htmlElements.resultado.innerHTML = `<div class="pokedeks2" id="pokedeks"><h2>Ability ${poke1}</h2> </div>`
                    for (let x = 0; x < pokeab.length; x++) {
                        const cardsContainer = document.getElementById("pokedeks");
                        const element = json2.pokemon[x].pokemon.name;
                        console.log(element)
                        const card = document.createElement("li");
                        card.classList.add("list-ability");
                        if(json2.pokemon[x].is_hidden === true){
                        var hidden = `<img class="img-baby" src="./Imagenes/eyehidden.svg">`
                        card.innerHTML = element+hidden}else{card.innerHTML = element
                        }
                        cardsContainer.appendChild(card); 
                    }
            }
            },
        },
        handlers: {
            onSubmit(e) {
                e.preventDefault()
                App.methods.showNewInput();
            },
            onFormSubmit(event){
                event.preventDefault();
                const poke = event.target.elements.poke.value;
                App.methods.showAverage({poke});
                var capa = document.getElementById("limpiar");   
                capa.style.display = "none";   
                capa.style.visibility = "hidden";   
            }
        }
    };
    App.init();
})();