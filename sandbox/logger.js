const EventEmitter = require('events'); //Class
//para usar el "EventEmitter" primero tenemos que crear an instance of this class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        //send and HTTP request 
        console.log(message);
    
        //raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'}); 
    }
}


module.exports = Logger; 


//hace la funcion publica afuera de su modulo
// module.exports.endPoint = url; //cambia el nombre de la variable y la hace publica

//para exportar una single function o un object ve el video que termina en 32.57