const express = require('express'); // define un conjunto de rutas para manejar peticiones relacionadas con los usuarios en una aplicación Express
const router = express.Router(); // organizar las rutas

const usersController = require('../controllers/users');

router.get('/', usersController.getALL); // lista de todos los usuarios mediante la función getALL

router.get('/:id', usersController.getSingle); // un usuario específico usando su identificador (id)

router.post('/', usersController.createUser); // add

router.put('/:id', usersController.updateUser); //update

router.delete('/:id', usersController.deleteUser); //delete

module.exports = router; // se exporta