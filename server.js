const express = require('express');

const mongodb = require('./data/database'); // para interactuar con una base de datos
const app = express(); //  para mantener para gestionar las rutas y

const port = process.env.PORT || 3000; // define un puerto donde escuchará las peticiones

app.use('/', require('./routes')); // se cargan las rutas desde un archivo externo


mongodb.initDb((err)=> { // se inicializa la conexión a la base de datos utilizando el método initDb de mongodb.
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)}); 

    }
});


