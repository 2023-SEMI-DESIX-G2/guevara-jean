const { Router } = require('express');
const {
  createCarpeta,
  getAllCarpetas,
  getCarpetaById,
  updateCarpeta,
  deleteCarpeta
} = require('../../controllers/carpetas');

const router = Router();

// Ruta para crear una nueva carpeta
router.post('/carpetas', createCarpeta);

// Ruta para obtener todas las carpetas
router.get('/carpetas', getAllCarpetas);

// Ruta para obtener una carpeta por su ID
router.get('/carpetas/:id', getCarpetaById);

// Ruta para actualizar una carpeta
router.put('/carpetas/:id', updateCarpeta);

// Ruta para eliminar una carpeta
router.delete('/carpetas/:id', deleteCarpeta);

module.exports = router;
