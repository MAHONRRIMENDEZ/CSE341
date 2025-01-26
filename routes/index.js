const router = require('express').Router(); // define las rutas principales para la aplicación utilizando Express

//router.get('/', (req, res) => { res.send('Hello World papu')});

router.use('/users', require('./users'));

module.exports = router;