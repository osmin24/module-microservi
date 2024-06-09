const {Schema,model} = require('mongoose')

const tipoProyectosSchema = Schema({
    name:{
        type:String,
        required:[true,'Ensayo','Articulo','Monografia','Trabajo final de pregrago','Trabajo final de especializacion'],
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

module.exports = model('TipoProyecto',tipoProyectosSchema)