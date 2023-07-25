const express = require('express');

//crear servidor / aplicacion
const app=express();

require('dotenv').config();
//Lectura y parseo del body
app.use(express.json());

//rutas
app.use('/api/',require('./routes/user/users'));
app.use('/api/',require('./routes/materias/materias'));
app.use('/api/',require('./routes/roles/roles'));
app.use('/api/',require('./routes/portafolios/portafolio'));
app.use('/api/',require('./routes/carpetas/carpetas'));
app.use('/api/',require('./routes/docuementos/documentos'));
app.use('/api/',require('./routes/docuementos/detallesDocumentos'));
app.use('/api/',require('./routes/user/detallesUsuarios'));


app.listen(process.env.PORT,()=>{
      console.log(`
  ──────▄▀▄─────▄▀▄
  ─────▄█░░▀▀▀▀▀░░█▄
  ─▄▄──█░░░░░░░░░░░█──▄▄
  █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
  ---------[${process.env.PORT}]--------
      `);
})
  
// Directorio Publico
app.use(express.static('public'))