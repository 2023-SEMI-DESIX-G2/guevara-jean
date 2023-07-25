const { error_show } = require('../helpers/comuns');
const { Portafolios } = require('../models/db/tables/portafolio.table');

// Método para crear un nuevo portafolio
const createPortafolio = async (req, res) => {
    try {
      const { Portafolio_name, user_id, materia_id } = req.body;
  
      // Crea el portafolio en la base de datos
      const portafolio = await Portafolios.create({
        Portafolio_name,
        user_id,
        materia_id
      });
  
      res.status(201).json(portafolio);
    } catch (error) {
      error_show(error, 'Error al crear el portafolio:', res);
    }
  };
  
  // Método para obtener todos los portafolios
  const getAllPortafolios = async (req, res) => {
    try {
      // Obtiene todos los portafolios de la base de datos
      const portafolios = await Portafolios.findAll();
  
      res.status(200).json(portafolios);
    } catch (error) {
      error_show(error, 'Error al obtener los portafolios:', res);
    }
  };
  
  // Método para obtener un portafolio por su ID
  const getPortafolioById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Busca el portafolio por su ID en la base de datos
      const portafolio = await Portafolios.findByPk(id);
  
      if (!portafolio) {
        return res.status(404).json({ error: 'No se encontró el portafolio' });
      }
  
      res.status(200).json(portafolio);
    } catch (error) {
      error_show(error, 'Error al obtener el portafolio:', res);
    }
  };
  
  // Método para actualizar un portafolio
  const updatePortafolio = async (req, res) => {
    try {
      const { id } = req.params;
      const { Portafolio_name, user_id, materia_id } = req.body;
  
      // Busca el portafolio por su ID en la base de datos
      const portafolio = await Portafolios.findByPk(id);
  
      if (!portafolio) {
        return res.status(404).json({ error: 'No se encontró el portafolio' });
      }
  
      // Actualiza los datos del portafolio
      portafolio.Portafolio_name = Portafolio_name;
      portafolio.user_id = user_id;
      portafolio.materia_id = materia_id;
  
      // Guarda los cambios en la base de datos
      await portafolio.save();
  
      res.status(200).json(portafolio);
    } catch (error) {
      error_show(error, 'Error al actualizar el portafolio:', res);
    }
  };
  
  // Método para eliminar un portafolio
  const deletePortafolio = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Busca el portafolio por su ID en la base de datos
      const portafolio = await Portafolios.findByPk(id);
  
      if (!portafolio) {
        return res.status(404).json({ error: 'No se encontró el portafolio' });
      }
  
      // Elimina el portafolio de la base de datos
      await portafolio.destroy();
  
      res.status(200).json({ message: 'Portafolio eliminado exitosamente' });
    } catch (error) {
      error_show(error, 'Error al eliminar el portafolio:', res);
    }
  };

module.exports = {
    createPortafolio,
    getAllPortafolios,
    getPortafolioById,
    updatePortafolio,
    deletePortafolio
}