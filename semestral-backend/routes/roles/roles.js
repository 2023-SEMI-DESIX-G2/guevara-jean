const { Router } = require('express');
const { check } = require('express-validator');
const {
  createRol,
  getAllRoles,
  getRolById,
  updateRol,
  deleteRol
} = require('../../controllers/roles');

const router = Router();

// Ruta para crear un nuevo rol
router.post('/roles', createRol);

// Ruta para obtener todos los roles
router.get('/roles', getAllRoles);

// Ruta para obtener un rol por su ID
router.get('/roles/:id', getRolById);

// Ruta para actualizar un rol
router.put('/roles/:id', updateRol);

// Ruta para eliminar un rol
router.delete('/roles/:id', deleteRol);

module.exports = router;
