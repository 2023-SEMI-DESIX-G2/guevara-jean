const { error_show } = require('../helpers/comuns');
const { Documentos } = require('../models/db/tables/documentos.table');

const createDocumento = async (req, res) => {
  try {
    const { document_name, folder_id } = req.body;

    // Crea el documento en la base de datos
    const documento = await Documentos.create({
      document_name,
      folder_id
    });

    res.status(201).json(documento);
  } catch (error) {
    error_show(error, 'Error al crear el documento:', res);
  }
};

const getAllDocumentos = async (req, res) => {
  try {
    // Obtiene todos los documentos de la base de datos
    const documentos = await Documentos.findAll();

    res.status(200).json(documentos);
  } catch (error) {
    error_show(error, 'Error al obtener los documentos:', res);
  }
};

const getDocumentoById = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca el documento por su ID en la base de datos
    const documento = await Documentos.findByPk(id);

    if (!documento) {
      return res.status(404).json({ error: 'No se encontró el documento' });
    }

    res.status(200).json(documento);
  } catch (error) {
    error_show(error, 'Error al obtener el documento:', res);
  }
};

const updateDocumento = async (req, res) => {
  try {
    const { id } = req.params;
    const { document_name, folder_id } = req.body;

    // Busca el documento por su ID en la base de datos
    const documento = await Documentos.findByPk(id);

    if (!documento) {
      return res.status(404).json({ error: 'No se encontró el documento' });
    }

    // Actualiza los datos del documento
    documento.document_name = document_name;
    documento.folder_id = folder_id;

    // Guarda los cambios en la base de datos
    await documento.save();

    res.status(200).json(documento);
  } catch (error) {
    error_show(error, 'Error al actualizar el documento:', res);
  }
};

const deleteDocumento = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca el documento por su ID en la base de datos
    const documento = await Documentos.findByPk(id);

    if (!documento) {
      return res.status(404).json({ error: 'No se encontró el documento' });
    }

    // Elimina el documento de la base de datos
    await documento.destroy();

    res.status(200).json({ message: 'Documento eliminado exitosamente' });
  } catch (error) {
    error_show(error, 'Error al eliminar el documento:', res);
  }
};

module.exports = {
  createDocumento,
  getAllDocumentos,
  getDocumentoById,
  updateDocumento,
  deleteDocumento
};
