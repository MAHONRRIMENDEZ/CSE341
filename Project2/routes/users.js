const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const { body } = require('express-validator');

router.get('/', usersController.getALL); // lista de todos los usuarios mediante la función getALL

router.get('/:id', usersController.getSingle); // un usuario específico usando su identificador (id)

router.post(
    '/',
    usersController.createUser // Llama a la función con validación de datos
);

router.put(
    '/:id',
    usersController.updateUser // Llama a la función con validación de datos
);

module.exports = router;
