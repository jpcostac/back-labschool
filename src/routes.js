const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoController = require('./controllers/CursoController')

route.options("*",cors())

//Endpoints - Curso
route.get('/curso', cursoController.findAllTurmas)//ready
route.post('/curso', cursoController.saveCurso)//create
route.put('/curso/:id',cursoController.updateCurso)//update
route.delete('/curso/:id',cursoController.deleteCurso)//Delete

module.exports = route