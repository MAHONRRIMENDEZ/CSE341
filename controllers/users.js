const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId; //both use mongodb.getDatabase() para acceder a la colección "users" de la base de datos y los camb  formato JSON

const getALL = async (req, res) => { //  obtiene todos los usuarios de la base de datos, los convierte a un arreglo con toArray() 
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json'); ////////////  
        res.status(200).json(users); 
    });

};

const getSingle = async (req, res) => { //usca un usuario específico utilizando un ObjectId basado en el id recibido como parámetro en la URL
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]); 
    });
};

module.exports = { //exporta
    getALL,
    getSingle
};