const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const { Roles } = require('./roles.table');

const Usuarios = sequelize.define('Usuarios', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(255)
  },
  password: {
    type: DataTypes.STRING(255)
  },
  cedula: {
    type: DataTypes.STRING(255)
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  role: {
    type: DataTypes.INTEGER,
    references: {
      model: Roles,
      key: 'roles_id'
    }
  }
}, {
  tableName: 'Usuarios',
  timestamps: true
});

// Usuarios.hasOne(Roles);

Usuarios.sync({ force: false })
  .then(() => {
    console.log('Tabla "Usuarios" creada exitosamente');
  })
  .catch((error) => {
    console.error('Error al crear la tabla "Usuarios":', error);
  });

module.exports ={
  Usuarios:Usuarios
}
