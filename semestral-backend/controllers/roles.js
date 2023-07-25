const { error_show } = require('../helpers/comuns');
const { Roles } = require('../models/db/tables/roles.table');

// Método para crear un nuevo rol
const createRol = async (req, res) => {
  try {
    const { rol_name } = req.body;

    // Crea el rol en la base de datos
    const rol = await Roles.create({ rol_name });

    res.status(201).json(rol);
  } catch (error) {
    error_show(error, 'Error al crear el rol:', res);
  }
};

// Método para obtener todos los roles
const getAllRoles = async (req, res) => {
  try {
    // Obtiene todos los roles de la base de datos
    const roles = await Roles.findAll();

    res.status(200).json(roles);
  } catch (error) {
    error_show(error, 'Error al obtener los roles:', res);
  }
};

// Método para obtener un rol por su ID
const getRolById = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca el rol por su ID en la base de datos
    const rol = await Roles.findByPk(id);

    if (!rol) {
      return res.status(404).json({ error: 'No se encontró el rol' });
    }

    res.status(200).json(rol);
  } catch (error) {
    error_show(error, 'Error al obtener el rol:', res);
  }
};

// Método para actualizar un rol
const updateRol = async (req, res) => {
  try {
    const { id } = req.params;
    const { rol_name } = req.body;

    // Busca el rol por su ID en la base de datos
    const rol = await Roles.findByPk(id);

    if (!rol) {
      return res.status(404).json({ error: 'No se encontró el rol' });
    }

    // Actualiza los datos del rol
    rol.rol_name = rol_name;

    // Guarda los cambios en la base de datos
    await rol.save();

    res.status(200).json(rol);
  } catch (error) {
    error_show(error, 'Error al actualizar el rol:', res);
  }
};

// Método para eliminar un rol
const deleteRol = async (req, res) => {
  try {
    const { id } = req.params;

    // Busca el rol por su ID en la base de datos
    const rol = await Roles.findByPk(id);

    if (!rol) {
      return res.status(404).json({ error: 'No se encontró el rol' });
    }

    // Elimina el rol de la base de datos
    await rol.destroy();

    res.status(200).json({ message: 'Rol eliminado exitosamente' });
  } catch (error) {
    error_show(error, 'Error al eliminar el rol:', res);
  }
};

module.exports = {
  createRol,
  getAllRoles,
  getRolById,
  updateRol,
  deleteRol
};
