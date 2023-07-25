const { DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config');
const {Portafolios} = require('./portafolio.table'); // Importa el modelo de Portafolio

const Carpetas = sequelize.define("Carpetas", {
  folder_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  folder_name: {
    type: DataTypes.STRING(255)
  },
  parent_name: {
    type: DataTypes.INTEGER
  },
  url:{
    type: DataTypes.STRING(255)
  },
  state:{
    type: BOOLEAN
  },
  Portafolio_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Portafolios,
      key: 'Portafolio_id'
    }
  }
}, {
  tableName: 'Carpetas',
  timestamps: true
});

// Establece la asociación de clave foránea
Carpetas.hasOne(Portafolios);

Carpetas.sync({ force: false })
  .then(() => {
    console.log('Tabla "Carpetas" creada exitosamente');
  })
  .catch((error) => {
    console.error('Error al crear la tabla "Carpetas":', error);
  });

module.exports = {
  Carpetas:Carpetas
};
