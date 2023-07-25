const { Router } = require('express');
const {
  createDocumento,
  getAllDocumentos,
  getDocumentoById,
  updateDocumento,
  deleteDocumento
} = require('../../controllers/documentos');

const router = Router();

// Ruta para crear un nuevo documento
router.post('/documentos', createDocumento);

// Ruta para obtener todos los documentos
router.get('/documentos', getAllDocumentos);

// Ruta para obtener un documento por su ID
router.get('/documentos/:id', getDocumentoById);

// Ruta para actualizar un documento
router.put('/documentos/:id', updateDocumento);

// Ruta para eliminar un documento
router.delete('/documentos/:id', deleteDocumento);

module.exports = router;
