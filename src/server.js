const express = require('express');
const denunciasRouter = require('./routes/denuncias')

const app = express()

app.use('/denuncias', denunciasRouter)

app.listen(3333,
     () => console.log('⚡Servidor ligado http://:localhost3333⚡'))