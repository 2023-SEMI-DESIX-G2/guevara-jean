const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const { Usuarios } = require('./user.table');
const {Materias} = require('./materia.table'); 

const Portafolios = sequelize.define('Portafolios', {
  Portafolio_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Portafolio_name: {
    type: DataTypes.STRING(255)
  },
  url:{
    type: DataTypes.STRING(255)
  },
  state:{
    type: BOOLEAN
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuarios,
      key: 'user_id'
    }
  },
  materia_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Materias,
      key: 'id_materia'
    }
  }
}, {
  tableName: 'Portafolios',
  timestamps: true
});

// Establece las asociaciones de claves foráneas
// Portafolios.hasOne(Usuarios)
// Portafolios.hasOne(Materias)


Portafolios.sync({ force: false })
  .then(() => {
    console.log('Tabla "Portafolios" creada exitosamente');
  })
  .catch((error) => {
    console.error('Error al crear la tabla "Portafolios":', error);
  });
  
module.exports = {
  Portafolios:Portafolios
};
