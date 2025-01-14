/* function sayHello(name) {
    console.log('Hello ' + name);
}

//sayHello('Maho');
console.log(window); //global 

setTimeout() //calls a function after a delay (1sec, 2sec, etc) 
clearTimeout(); //to clear a time out (above)

setInterval()  // repeatelly calls a function after equivalent delay
clearInterval(); // stops the previous one

window.console.log // all above belongs to the window global option causes and error on the terminal

var message = '';
console.log(global.message); // this give us undefiend in the console because the variable 
// created is not added to the global object */

const { response } = require("express");


// MODULES - every file in a node app is considered a module and every app has a "MAIN MODULE"

// nos permite crear variables con el mismo nombre y que no se sobrepongan
//  o que se les cambie el nombre mas adelante porque pertenecen a modulos diferentes

//console.log(module);


/* const logger = require('./logger'); //require is built in funcion que te permite load the 
// required function y tambien la ponemos como "const" instead of "var" para no cambiarla despues por accidente



//console.log(logger);
logger.log('message'); */

//------------------------------------------------------------------

/* 
// path module, que sirve para ver la direccion de nuestro archivo
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj); */


//------------------------------------------------------------------
/* const os = require('node:os'); sirve para muchas cosas ve la documentacion


var totalMemory = os.totalmem(); total memory  in my machine
var freeMemory = os.freemem(); free memory in my machine

//console.log('Total Memory: ' + totalMemory); //concatenando
//pero tambien se puede hacer de la siguiente manera y mejor

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`); */

//------------------------------------------------------------------
// el siguiente codigo nos permite ver todos los archivos de la carpeta que busquemos
// in order to work with files and directorios in node 1st we need to require the "Fs" 
// module and then use 1 of the methods 
// defined in this modules all of this come in "parse" and "sync" and "async" 
/*
const fs = require('fs');

// forma sincronica
/*const files = fs.readdirSync('./'); // el simbolo "./" 
// se refiere a todas las carpetas en el folder actual
console.log(files); 



//forma asincronica /Y LA MEJOR
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
}); */

//------------------------------------------------------------------


// EVENTS MODULE Class: EventEmitter es una de las principales

//EventEmitter tiene doble mayuscula porque es una "CLASS" y no una simple variable o funcion
// y una CLASS es un contenedor de muchos related methods and properties


//la diferencia entre class y object, class es "humano" y object es "john o majo"
//por lo que una class define caracteristicas globales y object nos muestra instancias de esa class
/*

const EventEmitter = require('events'); //Class
//para usar el "EventEmitter" primero tenemos que crear an instance of this class
//const emitter = new EventEmitter(); //Object ahora se volvio un object (no longer needed)
const Logger = require('./logger');
const logger = new Logger();
//register a listener

logger.on('messageLogged', (arg) => { //la funcion tambien puede usar el event 
    // argument tambien podemos usar arrow functions al cambiar "function" por una "=>" delante de "(argument)"
    console.log('Listener called', arg);
});

logger.log('message');

//Raise an event
//y tambien una clase puede tener muchos metodos, que te permiten hacer diferentes tareas
//emitter.emit('messageLogged', { id: 1, url: 'http://'}); //se usa para levantar un evento
//  como (emit se traduce como making noise o llamar la atencion de un event o señalar 
// que un evento susedio) a la segunda parte "{ id: 1, url: 'http://'}" le llamamos un 
// event argument.*/





//------------------------------------------------------------------
//
/*
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World papu');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...');  */


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello papu lindo");
});

const port = 3000;

app.listen(process.env.PORT || port, () => {
console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});