const {Router}=require('express');
const { 
    getAllMaterias,
    createMateria,
    getMateriaById,
    updateMateria,
    deleteMateria}=require('../../controllers/materia')

const router=new Router();

// Ruta para obtener todas las materias
router.get('/materias', getAllMaterias);

// Ruta para crear una nueva materia
router.post('/materias', createMateria);

// Ruta para obtener una materia por su ID
router.get('/materias/:id', getMateriaById);

// Ruta para actualizar una materia
router.put('/materias/:id', updateMateria);

// Ruta para eliminar una materia
router.delete('/materias/:id', deleteMateria);

module.exports = router;
