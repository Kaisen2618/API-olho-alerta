const swaggerAutogen = require('swagger-autogen');

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/denuncias.js'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('./server.js'); // Substitua 'index.js' pelo nome do seu arquivo principal (o arquivo onde você inicializa o Express)
});
