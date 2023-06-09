const {getPoke} = require("./pokemon.js")
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function (req, res) {
  res.send('<h2>HELLO JEAN PAUL GUEVARA</h2>')
})
app.get('/pokemon/json/:name', async function (req, res) {
    const pokeName = req.params.name;
    res.json(await getPoke(pokeName))
})
app.get('/pokemon/list/:name', async function (req, res) {
    const pokeName = req.params.name;
    const obj =  await getPoke(pokeName)
    console.log(obj.name)
    res.send(`<body><h2 style="
    font-size: 36px;
    font-family: monospace;
    display: flex;
    align-items: center;
    justify-content: center;">/Lista Pokemon/</h2><ul style="
    font-size: 26;
    font-family: monospace;
    color: darkslateblue;">
    <li>ID----> ${obj.id}</li>
    <li>NamePokemon---->${obj.name}</li>
    <li>Weight---->${obj.weight}</li>
    <li>Height---->${obj.height}</li>
    <li>AilitiesList---->${obj.abilities}</li>
    <li>EvolestoList---->${obj.evolves_to}</li>
    </ul></body>`)
})
app.listen(PORT, () => {console.log(`Servidor Iniciando en el Puerto# ${PORT}`)})