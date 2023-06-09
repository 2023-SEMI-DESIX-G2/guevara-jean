const {getPoke} = require("./pokemon.js")
const express = require('express')
const app = express()

const PORT = 3000

app.get('/', function (req, res) {
  res.send('<h2>HELLO JEAN PAUL GUEVARA</h2>')
})

app.get('/saludo', function (req, res) {
    res.json({mensage: "Hola Jean Paul"})
})

app.get('/pokemon', function (req, res) {
    res.json({mensage: "Hola Jean Paul"})
})

app.get('/pokemon/:name', async function (req, res) {
    const pokeName = req.params.name;
    res.json(await getPoke(pokeName))
})

app.listen(PORT, () => {console.log(`Servidor Iniciando en el Puerto# ${PORT}`)})