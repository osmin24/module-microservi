const {request,response} = require('express')
const Proyecto = require('../modules/proyecto')
const Cliente = require('../modules/cliente')
const Etapa = require('../modules/etapa')
const TipoProyecto = require('../modules/tipoProyectos')
const Universidad = require('../modules/universidad')

const getProyecto = async (req=request,res=response) => {
    try{
        const data = await Proyecto.find().populate({
            path:'cliente'
        }).populate({
            path:'etapa'
        }).populate({
            path:'tipoProyecto'
        }).populate({
            path:'universidad'
        })
        res.status(202).json(data)
    }catch(e){
        console.info(e)
    }finally{

    }
}

const postProyecto = async (req=request,res=response) => {
    try{
        const {
            number,
            title,
            datelogin,
            datefin,
            valor,
            cliente,
            etapa,
            tipoProyecto,
            universidad
        } = req.body
        console.info(cliente._id)
        let data = await Cliente.findOne({
            _id:cliente._id
        })
        if(!data){
            return res.status(404).json({msg:'Dato cliente invalido'})
        }
        data = await Etapa.findOne({
            _id:etapa._id
        })
        if(!data){
            return res.status(404).json({msg:'Dato Etapa invalido'})
        }
        data = await TipoProyecto.findOne({
            _id:tipoProyecto._id
        })
        if(!data){
            return res.status(404).json({msg:'Dato TipoProyecto invalido'})
        }
        data = await Universidad.findOne({
            _id:universidad._id
        })
        if(!data){
            return res.status(404).json({msg:'Dato universidad invalido'})
        }
        const proyecto = new Proyecto({number,title,datelogin,datefin,valor,cliente,etapa,tipoProyecto,universidad})
        console.info(proyecto)
        await proyecto.save()
        console.info(proyecto)
        res.status(201).json(proyecto)
    }catch(e){
        res.status(500).json({msg:e})
    }finally{
        
    }
}

const putProyecto = async (req=request,res=response) => {
    try{
        const data = req.body
        const {_id} = data
        data.dateupdate = new Date()
        const result = await Proyecto.findByIdAndUpdate(_id,data,{new:true})
        res.status(200).json(result)
    }catch(e){
        res.status(500).json({msg:e})
    }finally{
        
    }
}

const deleteProyecto = async (req=request,res=response) => {
    try{

    }catch(e){
        console.info(e)
    }finally{
        
    }
}

module.exports = {
    getProyecto,
    postProyecto,
    putProyecto,
    deleteProyecto
}