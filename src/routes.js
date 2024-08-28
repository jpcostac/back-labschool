const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoController = require('./controllers/CursoController')

route.options("*",cors())

//Endpoints - Curso
route.get('/curso', cursoController.findAllTurmas)

module.exports = route