const express = require('express');
const router = express.Router();

const {
  getAllDetallesUsuarios,
  getDetalleUsuarioById,
  createDetalleUsuario,
  updateDetalleUsuario,
  deleteDetalleUsuario
} = require('../../controllers/detallesUsuario');

// Ruta para obtener todos los detalles de usuarios
router.get('/detalles-usuarios', getAllDetallesUsuarios);

// Ruta para obtener un solo detalle de usuario por su ID
router.get('/detalles-usuarios/:id', getDetalleUsuarioById);

// Ruta para crear un nuevo detalle de usuario
router.post('/detalles-usuarios', createDetalleUsuario);

// Ruta para actualizar un detalle de usuario por su ID
router.put('/detalles-usuarios/:id', updateDetalleUsuario);

// Ruta para borrar un detalle de usuario por su ID
router.delete('/detalles-usuarios/:id', deleteDetalleUsuario);

module.exports = router;
