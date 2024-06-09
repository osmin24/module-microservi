const {Schema,model} = require('mongoose')

const SchemaUniversidad  = Schema({
    name:{
        type:String,
        required:true,
        default:''
    },
    direction:{
        type:String,
        required:true,
        default:''
    },
    tel:{
        type:String,
        required:true,
        default:''
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


module.exports = model('Universidad',SchemaUniversidad)