const dotenv = require('dotenv'); // gestiona la conexión a una base de datos MongoDB utilizando el paquete mongodb y la configuración de variables de entorno a través de dotenv
dotenv.config();

const MongoClient = require('mongodb').MongoClient

let database;

const initDb = (callback) => { // se encarga de inicializar la conexión a la base de datos. Si la conexión ya está establecida, retorna la base de datos sin intentar reconectarse. Si no está conectada, utiliza MongoClient.connect
    if (database){
        console.log('Db is already initialized');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err);
    });
};

const getDatabase = () => { // se utiliza para acceder a la base de datos una vez que está inicializada; si no lo está, lanza un error. 
    if (!database) {
        throw Error('Database not initialized')
    }
    return database;
};

module.exports = {
    initDb,
    getDatabase
}