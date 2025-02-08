const router = require('express').Router(); // define las rutas principales para la aplicación utilizando Express

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags=['Hellow World]
    res.send('Hello World papu');

});

router.use('/users', require('./users'));

module.exports = router;