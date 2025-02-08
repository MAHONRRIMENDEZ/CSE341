const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId; //ambos usan mongodb.getDatabase() para acceder a la colección "users" de la base de datos y los camb  formato JSON

const getALL = async (req, res) => { //  obtiene todos los usuarios de la base de datos, los convierte a un arreglo con toArray() 
    //#swagger.tags=['Hellow World]
    const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json'); ////////////  
        res.status(200).json(users); 
    });

};

const getSingle = async (req, res) => { //busca un usuario específico utilizando un ObjectId basado en el id recibido como parámetro en la URL
    //#swagger.tags=['Hellow World]
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]); 
    });
};

const createUser = async (req, res) => {
    //#swagger.tags=['Hellow World]
    const user = {
        
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday : req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags=['Hellow World]
    const userId = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday : req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, (user));
        if(response.modifiedCount > 0){
            res.status(204).send();
        } else{
            res.status(500).json(response.error || 'Some error occurred while updating the user.');
        }
};

const deleteUser = async (req, res) => {
    //#swagger.tags=['Hellow World]
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: userId });
    if (response.deletedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the user.');
    }

};

module.exports = { //exporta 
    getALL,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};