const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const {Usuarios}=require('./user.table');

const detallesUsuarios = sequelize.define('detallesUsuarios', {
    detallesUsuarios_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuarios: {
        type: DataTypes.INTEGER,
        references:{
            model:Usuarios,
            key:'user_id'
        }
    },
    correo:{
        type: DataTypes.STRING,
    },
    foto:{
        type: DataTypes.STRING,
    },
    fecha_nacimiento:{
        type: DataTypes.STRING,
    }
  }, {
    tableName: 'detallesUsuarios',
    timestamps: true
  });

  detallesUsuarios.sync({ force: false })
  .then(() => {
    console.log('Tabla "detallesUsuarios" creada exitosamente');
  })
  .catch((error) => {
    console.error('Error al crear la tabla "detallesUsuarios":', error);
  });