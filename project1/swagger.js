const swaggerAutogen = require('swagger-autogen')();

//creating document info
const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'localhost:3001',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);