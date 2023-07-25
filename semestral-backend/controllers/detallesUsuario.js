const { detallesUsuarios } = require('../models/db/tables/detallesUsuarios.table');
const { error_show } = require('../helpers/comuns');

// Obtener todos los detalles de usuarios
const getAllDetallesUsuarios = async (req, res) => {
  try {
    const detalles = await detallesUsuarios.findAll();
    res.status(200).json(detalles);
  } catch (error) {
    error_show(error, 'Error al obtener los detalles de usuarios', res);
  }
};

// Obtener un solo detalle de usuario por su ID
const getDetalleUsuarioById = async (req, res) => {
  const detalleUsuarioId = req.params.id;

  try {
    const detalle = await detallesUsuarios.findByPk(detalleUsuarioId);
    if (detalle) {
      res.status(200).json(detalle);
    } else {
      res.status(404).json({ error: 'Detalle de usuario no encontrado' });
    }
  } catch (error) {
    error_show(error, 'Error al obtener el detalle de usuario', res);
  }
};

// Crear un nuevo detalle de usuario
const createDetalleUsuario = async (req, res) => {
  try {
    const { id_usuarios, correo, foto, fecha_nacimiento } = req.body;

    const newDetalle = await detallesUsuarios.create({
      id_usuarios,
      correo,
      foto,
      fecha_nacimiento
    });
    res.status(201).json(newDetalle);
  } catch (error) {
    error_show(error, 'Error al crear el detalle de usuario', res);
  }
};

// Actualizar un detalle de usuario por su ID
const updateDetalleUsuario = async (req, res) => {
  const detalleUsuarioId = req.params.id;

  try {
    const { id_usuarios, correo, foto, fecha_nacimiento } = req.body;

    const detalle = await detallesUsuarios.findByPk(detalleUsuarioId);
    if (detalle) {
      await detalle.update({
        id_usuarios,
        correo,
        foto,
        fecha_nacimiento
      });
      res.status(200).json({ message: 'Detalle de usuario actualizado correctamente' });
    } else {
      res.status(404).json({ error: 'Detalle de usuario no encontrado' });
    }
  } catch (error) {
    error_show(error, 'No se pudo actualizar el detalle de usuario', res);
  }
};

// Borrar un detalle de usuario por su ID
const deleteDetalleUsuario = async (req, res) => {
  const detalleUsuarioId = req.params.id;

  try {
    const detalle = await detallesUsuarios.findByPk(detalleUsuarioId);
    if (detalle) {
      await detalle.destroy();
      res.status(200).json({ message: 'Detalle de usuario eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Detalle de usuario no encontrado' });
    }
  } catch (error) {
    error_show(error, 'No se pudo eliminar el detalle de usuario', res);
  }
};

module.exports = {
  getAllDetallesUsuarios,
  getDetalleUsuarioById,
  createDetalleUsuario,
  updateDetalleUsuario,
  deleteDetalleUsuario
};
