const {Schema,model} = require('mongoose')

const SchemaEtapa = Schema({
    name:{
        type:String,
        required:[true,'Anteproyecto','Entrega parcial 1','Entrega parcial 2','Entrega final'],
        unique:[true]
    },
    datecreate:{
        type:Date,
        default: new Date()
    },
    dateupdate:{
        type:Date,
        default:new Date(),
    }
})

module.exports = model('Etapa',SchemaEtapa)