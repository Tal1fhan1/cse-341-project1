const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'
    },
    host: 'localhost:3000',
    schemes: ['https']
};

const outputFile = './swagger.json'
const endpontsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpontsFiles, doc);