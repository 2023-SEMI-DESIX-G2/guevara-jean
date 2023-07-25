const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Materias = sequelize.define('Materia', {
  id_materia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cod_materia: {
    type: DataTypes.STRING(255)
  },
  materia_name: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'materia',
  timestamps: true
});


Materias.sync({ force: false })
  .then(() => {
    console.log('Tabla "materia" creada exitosamente');
   })
  .catch((error) => {
    console.error('Error al crear la tabla "materia":', error);
  });

module.exports = {
  Materias:Materias
};
