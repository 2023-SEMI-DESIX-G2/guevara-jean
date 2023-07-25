const {Router}=require('express');

const {createPortafolio,
    getAllPortafolios,
    getPortafolioById,
    updatePortafolio,
    deletePortafolio}=require('../../controllers/portafolio');

const {check} = require('express-validator');

const router=new Router();

// Ruta para crear un nuevo portafolio
router.post('/portafolios', createPortafolio);

// Ruta para obtener todos los portafolios
router.get('/portafolios', getAllPortafolios);

// Ruta para obtener un portafolio por su ID
router.get('/portafolios/:id', getPortafolioById);

// Ruta para actualizar un portafolio
router.put('/portafolios/:id', updatePortafolio);

// Ruta para eliminar un portafolio
router.delete('/portafolios/:id', deletePortafolio);

module.exports=router;