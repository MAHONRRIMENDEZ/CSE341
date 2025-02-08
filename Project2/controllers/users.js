const { body, validationResult } = require('express-validator');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getALL = async (req, res) => {
    try {
        const result = await mongodb.getDatabase().db().collection('users').find();
        result.toArray().then((users) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(users); 
        });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

const getSingle = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
        result.toArray().then((users) => {
            if (users.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(users[0]);
        });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user', error: err.message });
    }
};

const createUser = [
    // Validaciones de los campos
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('birthday').isDate().withMessage('Birthday must be a valid date'),

    async (req, res) => {
        // Verificar si hay errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };

        try {
            const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
            if (response.acknowledged) {
                res.status(201).json({ message: 'User created successfully' });
            } else {
                res.status(500).json({ message: 'Error creating user' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Database error', error: err.message });
        }
    }
];

const updateUser = [
    // Validaciones de los campos
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('birthday').isDate().withMessage('Birthday must be a valid date'),

    async (req, res) => {
        // Verificar si hay errores de validación
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userId = new ObjectId(req.params.id);
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };

        try {
            const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, user);
            if (response.modifiedCount > 0) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'User not found or no changes made' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Database error', error: err.message });
        }
    }
];

const deleteUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: userId });
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};

module.exports = {
    getALL,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};
