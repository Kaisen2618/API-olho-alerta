//importando as bibliotecas
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

//rota para oter todas as denuncias
router.get('/', async (req, res) => {
    try{
    //Buscar todas as denuncias no banco de dados usando o prisma
    const denuncia = await prisma.denuncia.findMany()

    //verificar se há denuncias
    if(denuncia.length === 0) {
        return res.status(404).json({message:'Nenhuma denuncia encontrada'})
    }

    res.json(denuncia)
    //retornar as denuncias como resposta no formato JSON
    }catch (error) {
        console.error('Erro ao recuperar denuncias:', error)
        res.status(500).json({error:'Erro ao recuperar as denuncias'})
    }
})
//Rota para obter uma única denúncia
router.get('/:id', async (req,res) => {
    try{
        const {id} = req.params

    //buscar uma unica denuncia
    const denuncia = await prisma.denuncia.findMany({
        where: {
            id
        }
    })

    //Verificar se há denuncia
    if (denuncia.length === 0) {
        return res.status(400).json({message: 'nenhuma denuncia encontrada'})
    }

    res.json(denuncia)
     }catch (error) {
        console.error('Erro ao recuperar denuncias', error);
        res.status(500).json({error: 'Erro ao recuperar denúncias'})
    }
      
})

module.exports = router