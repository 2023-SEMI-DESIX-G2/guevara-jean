const { error_show } = require('../helpers/comuns');
const {Materias}=require('../models/db/tables/materia.table')

// Obtener todas las materias
const getAllMaterias = async (req, res) => {
    try {
      const materias = await Materias.findAll();
      res.json(materias);
    } catch (error) {
      error_show(error, 'Error al obtener las materias:', res);
    }
  };
  
  // Crear una nueva materia
  const createMateria = async (req, res) => {
    const { cod_materia, materia_name } = req.body;
  
    try {
      const materia = await Materias.create({ cod_materia, materia_name });
      res.json(materia);
    } catch (error) {
      error_show(error, 'Error al crear la materia:', res);
    }
  };
  
  // Obtener una materia por su ID
  const getMateriaById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const materia = await Materias.findByPk(id);
      if (materia) {
        res.json(materia);
      } else {
        res.status(404).json({ error: 'Materia no encontrada' });
      }
    } catch (error) {
      error_show(error, 'Error al obtener la materia:', res);
    }
  };
  
  // Actualizar una materia
  const updateMateria = async (req, res) => {
    const { id } = req.params;
    const { cod_materia, materia_name } = req.body;
  
    try {
      const materia = await Materias.findByPk(id);
      if (materia) {
        materia.cod_materia = cod_materia;
        materia.materia_name = materia_name;
        await materia.save();
        res.json(materia);
      } else {
        res.status(404).json({ error: 'Materia no encontrada' });
      }
    } catch (error) {
      error_show(error, 'Error al actualizar la materia:', res);
    }
  };
  
  // Eliminar una materia
  const deleteMateria = async (req, res) => {
    const { id } = req.params;
  
    try {
      const materia = await Materias.findByPk(id);
      if (materia) {
        await materia.destroy();
        res.json({ message: 'Materia eliminada exitosamente' });
      } else {
        res.status(404).json({ error: 'Materia no encontrada' });
      }
    } catch (error) {
      error_show(error, 'Error al eliminar la materia:', res);
    }
  };
  
  module.exports = {
    getAllMaterias,
    createMateria,
    getMateriaById,
    updateMateria,
    deleteMateria
  };