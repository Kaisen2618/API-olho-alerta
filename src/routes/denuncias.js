const express = require('express')
const prisma = require('../lib/prisma')
const {z} = require('zod') 


const router = express.Router()

//rota para postar denuncias
router.post('/', async (req, res) => {
    const denunciaSchema = z.object({
        title: z.string(),
        latitude: z.string(),
        longitude: z.string(),
        descricao: z.string()
    })

    try{
    
    const {title,latitude,longitude,descricao} = denunciaSchema.parse(req.body)

    const denuncia = await prisma.denuncia.create({
        data:{
            title,
            latitude,
            longitude,
            descricao
        }
    })

    res.status(201).json(denuncia)

    }catch (error) {
        
        res.status(400).json({error:'Dados invalidos no corpo da solicitação'})
    }
})

module.exports = router