const {Schema,model} = require('mongoose')
const Cliente = require('../modules/cliente')
const Etapa = require('../modules/etapa')
const TipoProyecto = require('../modules/tipoProyectos')
const Universidad = require('../modules/universidad')

const ShemaProyecto = Schema({
    number:{
        type:String,
        unique:[true],
        required:[true],
    },
    title:{
        type:String,
        required:[true],
        default:'Not title'
    },
    datelogin:{
        type:String,
        default:'',
        required:[true]
    },
    datefin:{
        type:String,
        default:'',
        required:[true]
    },
    valor:{
        type:String,
        required:[true],
        default:0.0
    },
    datecreate:{
        type:Date,
        required:[true],
        default: new Date()
    },
    dateupdate:{
        type:Date,
        required:[true],
        default:new Date()
    },
    cliente:{
        type:Schema.Types.ObjectId,
        ref:'Cliente',
        required:true
    },
    etapa:{
        type:Schema.Types.ObjectId, 
        ref:'Etapa',
        required:true
    },
    tipoProyecto:{
        type:Schema.Types.ObjectId, 
        ref:'TipoProyecto',
        required:true
    },
    universidad:{
        type:Schema.Types.ObjectId, 
        ref: 'Universidad',
        required:true
    }
})

module.exports = model('Proyecto',ShemaProyecto)