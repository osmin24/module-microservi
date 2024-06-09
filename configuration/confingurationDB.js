const {connect} = require('mongoose')

const connection = connect(process.env.URL,{

}).catch((e) => {
    console.log(e)
}).finally(console.log('Connection exitosa...'))

module.exports = connection

