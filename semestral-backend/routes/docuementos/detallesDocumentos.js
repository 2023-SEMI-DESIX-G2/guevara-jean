const express = require('express');
const router = express.Router();

const {
  getAllDetalleDocumentos,
  getDetalleDocumentoById,
  createDetalleDocumento,
  updateDetalleDocumento,
  deleteDetalleDocumento
} = require('../../controllers/detalleDocumento');

// Ruta para obtener todos los detalles de documentos
router.get('/detalles-documentos', getAllDetalleDocumentos);

// Ruta para obtener un solo detalle de documento por su ID
router.get('/detalles-documentos/:id', getDetalleDocumentoById);

// Ruta para crear un nuevo detalle de documento
router.post('/detalles-documentos', createDetalleDocumento);

// Ruta para actualizar un detalle de documento por su ID
router.put('/detalles-documentos/:id', updateDetalleDocumento);

// Ruta para borrar un detalle de documento por su ID
router.delete('/detalles-documentos/:id', deleteDetalleDocumento);

module.exports = router;
