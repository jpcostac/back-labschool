const express = require('express')
const route = express.Router()
const cors = require('cors')

route.options("*",cors())

route.get('/teste', (req,res) =>{
    res.json({
        "content":"Hellow World"
    })
})

module.exports = route