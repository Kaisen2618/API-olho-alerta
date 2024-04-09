//importando as bibliotecas
const express = require('express');
const denunciasRouter = require('./routes/denuncias')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require ('./swagger_output.json')

const app = express()

app.use(express.json())

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/denuncias', denunciasRouter)

// Conexão ao banco de dados
app.listen(3333,
     () => console.log('⚡Servidor ligado http://:localhost:3333⚡'))