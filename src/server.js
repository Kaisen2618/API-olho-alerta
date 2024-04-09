//importando as bibliotecas
const express = require('express');
const denunciasRouter = require('./routes/denuncias')

const app = express()

app.use(express.json())

app.use('/denuncias', denunciasRouter)

// Conexão ao banco de dados
app.listen(3333,
     () => console.log('⚡Servidor ligado http://:localhost3333⚡'))