const bcrypt = require('bcrypt');

const { error_show } = require('../helpers/comuns');
const { Usuarios } = require('../models/db/tables/user.table');

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.status(200).json( usuarios );
  } catch (error) {
    error_show(error, 'Error al obtener los usuarios', res);
  }
};

// Obtener usuarios activos
const getAllUsersActive = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll(
      {where:{activo:true}}
    );
    res.status(200).json( usuarios );
  } catch (error) {
    error_show(error, 'Error al obtener los usuarios', res);
  }
};

// Obtener un solo usuario por su ID
const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const usuario = await Usuarios.findByPk(userId);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    error_show(error, 'Error al obtener el usuario', res);
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { username, password, cedula } = req.body;

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Usuarios.create(
      { username, 
        password:hashedPassword, 
        cedula, 
        activo:true, 
        role:2 
      });
    res.status(201).json(newUser);
  } catch (error) {
    error_show(error, 'Error al crear el usuario', res);
  }
};

// Borrar un usuario por su ID
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    await Usuarios.update(
      { activo: false },
      { where: { user_id: userId } }
    );
    res.status(200).json({ message: 'Usuario desactivado correctamente' });
  } catch (error) {
    error_show(error, 'Error al desactivar el usuario', res);
  }
};


// Editar un usuario por su ID
const editUser = async (req, res) => {
  const userId = req.params.id;

  const { username, password, cedula} = req.body;

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    await Usuarios.update(
      { username, 
        password:hashedPassword, 
        cedula, 
        role:2, 
        activo:true
      },
      { where: { user_id: userId } }
    );
    res.status(200).json({ message: 'Usuario editado correctamente' });
  } catch (error) {
    error_show(error, 'No se pudo editar el usuario', res);
  }
};

module.exports = {
  getAllUsers,
  getAllUsersActive,
  getUserById,
  createUser,
  editUser,
  deleteUser
};
