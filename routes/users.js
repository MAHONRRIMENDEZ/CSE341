const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getALL);

router.get('/:id', usersController.getSingle);

module.exports = router;