const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Roles = sequelize.define('Roles', {
  roles_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rol_name: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'roles',
  timestamps: true
});

Roles.sync({ force: false })
  .then(() => {
    console.log('Tabla "roles" creada exitosamente');
  })
  .catch((error) => {
    console.error('Error al crear la tabla "roles":', error);
  });

module.exports ={ 
  Roles:Roles
};
