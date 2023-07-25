const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const {Documentos}=require('./documentos.table');

const DetalleDocumentos = sequelize.define('DetalleDocumentos', {
    id_detalleDocumento:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    document_id: {
      type: DataTypes.INTEGER,
      references:{
        model:Documentos,
        key:'document_id'
      }
    },
    title: {
      type: DataTypes.STRING(250)
    },
    body: {
      type: DataTypes.STRING(2550),
    }
  }, {
    tableName: 'DetalleDocumentos',
    timestamps: true
  });


  DetalleDocumentos.sync({ force: false })
  .then(() => {
    console.log('Tabla "Detalles Documentos" creada exitosamente');
   })
  .catch((error) => {
    console.error('Error al crear la tabla "Detalles Documentos":', error);
  });