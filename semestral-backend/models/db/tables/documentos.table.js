const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const {Carpetas} = require('./carpetas.table'); // Importa el modelo de Carpetas

const Documentos = sequelize.define('Documentos', {
  document_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  document_name: {
    type: DataTypes.STRING(255)
  },
  url:{
    type: DataTypes.STRING(255)
  },
  state:{
    type: BOOLEAN
  },
  folder_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Carpetas,
      key: 'folder_id'
    }
  }
}, {
  tableName: 'Documentos',
  timestamps: true
});

// Establece la asociación de clave foránea
Documentos.hasOne(Carpetas);

Documentos.sync({ force: false })
  .then(() => {
    console.log('Tabla "Documentos" creada exitosamente');
   })
  .catch((error) => {
    console.error('Error al crear la tabla "Documentos":', error);
  });


module.exports ={
  Documentos:Documentos
} 
