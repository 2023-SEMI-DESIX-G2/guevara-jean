const { DetalleDocumentos } = require('../models/db/tables/detalleDocumento');
const { error_show } = require('../helpers/comuns');

// Obtener todos los detalles de documentos
const getAllDetalleDocumentos = async (req, res) => {
  try {
    const detalles = await DetalleDocumentos.findAll();
    res.status(200).json(detalles);
  } catch (error) {
    error_show(error, 'Error al obtener los detalles de documentos', res);
  }
};

// Obtener un solo detalle de documento por su ID
const getDetalleDocumentoById = async (req, res) => {
  const detalleDocumentoId = req.params.id;

  try {
    const detalle = await DetalleDocumentos.findByPk(detalleDocumentoId);
    if (detalle) {
      res.status(200).json(detalle);
    } else {
      res.status(404).json({ error: 'Detalle de documento no encontrado' });
    }
  } catch (error) {
    error_show(error, 'Error al obtener el detalle de documento', res);
  }
};

// Crear un nuevo detalle de documento
const createDetalleDocumento = async (req, res) => {
  try {
    const { document_id, title, body } = req.body;

    const newDetalle = await DetalleDocumentos.create({
      document_id,
      title,
      body
    });
    res.status(201).json(newDetalle);
  } catch (error) {
    error_show(error, 'Error al crear el detalle de documento', res);
  }
};

// Actualizar un detalle de documento por su ID
const updateDetalleDocumento = async (req, res) => {
  const detalleDocumentoId = req.params.id;

  try {
    const { document_id, title, body } = req.body;

    const detalle = await DetalleDocumentos.findByPk(detalleDocumentoId);
    if (detalle) {
      await detalle.update({
        document_id,
        title,
        body
      });
      res.status(200).json({ message: 'Detalle de documento actualizado correctamente' });
    } else {
      res.status(404).json({ error: 'Detalle de documento no encontrado' });
    }
  } catch (error) {
    error_show(error, 'No se pudo actualizar el detalle de documento', res);
  }
};

// Borrar un detalle de documento por su ID
const deleteDetalleDocumento = async (req, res) => {
  const detalleDocumentoId = req.params.id;

  try {
    const detalle = await DetalleDocumentos.findByPk(detalleDocumentoId);
    if (detalle) {
      await detalle.destroy();
      res.status(200).json({ message: 'Detalle de documento eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Detalle de documento no encontrado' });
    }
  } catch (error) {
    error_show(error, 'No se pudo eliminar el detalle de documento', res);
  }
};

module.exports = {
  getAllDetalleDocumentos,
  getDetalleDocumentoById,
  createDetalleDocumento,
  updateDetalleDocumento,
  deleteDetalleDocumento
};
