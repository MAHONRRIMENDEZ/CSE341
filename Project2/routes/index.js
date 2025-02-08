const router = require('express').Router(); // define las rutas principales para la aplicación utilizando Express

router.use('/', require('./swagger')); // Importa Swagger

router.get('/', (req, res) => { 
    res.send('Hello World papu');
});

router.use('/users', require('./users')); // Importa las rutas de users

module.exports = router;
