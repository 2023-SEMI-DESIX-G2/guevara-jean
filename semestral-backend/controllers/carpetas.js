const { error_show } = require('../helpers/comuns');
const { Carpetas } = require('../models/db/tables/carpetas.table');

// Método para crear una nueva carpeta
const createCarpeta = async (req, res) => {
  try {
    const { folder_name, parent_name, Portafolio_id } = req.body;

    // Crea la carpeta en la base de datos
    const carpeta = await Carpetas.create({
      folder_name,
      parent_name,
      Portafolio_id
    });

    res.status(201).json(carpeta);
  } catch (error) {
    error_show(error, 'Error al crear la carpeta:', res);
  }
};

// Método para obtener todas las carpetas
const getAllCarpetas = async (req, res) => {
  try {
    // Obtiene todas las carpetas de la base de datos
    const carpetas = await Carpetas.findAll();

    res.status(200).json(carpetas);
  } catch (error) {
    error_show(error, 'Error al obtener las carpetas:', res);
  }
};

// Método para obtener una carpeta por su ID
const getCarpetaById = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca la carpeta por su ID en la base de datos
    const carpeta = await Carpetas.findByPk(id);

    if (!carpeta) {
      return res.status(404).json({ error: 'No se encontró la carpeta' });
    }

    res.status(200).json(carpeta);
  } catch (error) {
    error_show(error, 'Error al obtener la carpeta:', res);
  }
};

// Método para actualizar una carpeta
const updateCarpeta = async (req, res) => {
  try {
    const { id } = req.params;
    const { folder_name, parent_name, Portafolio_id } = req.body;

    // Busca la carpeta por su ID en la base de datos
    const carpeta = await Carpetas.findByPk(id);

    if (!carpeta) {
      return res.status(404).json({ error: 'No se encontró la carpeta' });
    }

    // Actualiza los datos de la carpeta
    carpeta.folder_name = folder_name;
    carpeta.parent_name = parent_name;
    carpeta.Portafolio_id = Portafolio_id;

    // Guarda los cambios en la base de datos
    await carpeta.save();

    res.status(200).json(carpeta);
  } catch (error) {
    error_show(error, 'Error al actualizar la carpeta:', res);
  }
};

// Método para eliminar una carpeta
const deleteCarpeta = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca la carpeta por su ID en la base de datos
    const carpeta = await Carpetas.findByPk(id);

    if (!carpeta) {
      return res.status(404).json({ error: 'No se encontró la carpeta' });
    }

    // Elimina la carpeta de la base de datos
    await carpeta.destroy();

    res.status(200).json({ message: 'Carpeta eliminada exitosamente' });
  } catch (error) {
    error_show(error, 'Error al eliminar la carpeta:', res);
  }
};

module.exports = {
  createCarpeta,
  getAllCarpetas,
  getCarpetaById,
  updateCarpeta,
  deleteCarpeta
};
