const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const conDB = require('./configuration/confingurationDB')

const Proyecto = require('./routers/proyecto')

app.set('port',process.env.PORT || 3000)
app.use(express.urlencoded({extended:'true'}))
app.use(express.json())
app.use(cors({
    origin:'*'
}))


app.use('/proyectos',Proyecto)

module.exports = {app}