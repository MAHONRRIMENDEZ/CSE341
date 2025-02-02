const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database'); // para interactuar con una base de datos
const app = express(); //  para mantener para gestionar las rutas y

const port = process.env.PORT || 3001; // define un puerto donde escuchará las peticiones

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // allow methods
    next();
});


app.use('/', require('./routes')); // se cargan las rutas desde un archivo externo

mongodb.initDb((err)=> { // se inicializa la conexión a la base de datos utilizando el método initDb de mongodb.
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)}); 

    }
});


