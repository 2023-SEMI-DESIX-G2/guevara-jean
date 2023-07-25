const {check, param} = require('express-validator');

const validateCreateEditUser = [
    check('username').notEmpty().withMessage('El campo username es obligatorio'),
    check('password').notEmpty().withMessage('El campo password es obligatorio'),
    check('cedula').notEmpty().withMessage('La cedula es obligatorio')
  ];

const validateId=[
    param('id').custom((value) => {
        if (!Number.isNaN(Number(value))) {
          return true;
        }
        throw new Error('El ID debe ser un número');
      }),
];
  
  module.exports = {
    validateCreateEditUser:validateCreateEditUser,
    validateId:validateId
  };