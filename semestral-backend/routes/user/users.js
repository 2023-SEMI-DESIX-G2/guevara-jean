const {Router}=require('express');
const {getAllUsersActive,getUserById,createUser,deleteUser,editUser} = require('../../controllers/user');
const {validateCreateEditUser,validateId}=require('./validaciones')

const router=new Router();

router.get('/user/',getAllUsersActive)
router.get('/user/:id',validateId,getUserById)
router.post('/user/',validateCreateEditUser,createUser)
router.delete('/user/:id',validateId,deleteUser)
router.put('/user/:id',[validateId,validateCreateEditUser],editUser)

module.exports=router;