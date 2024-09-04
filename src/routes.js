const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoController = require('./controllers/CursoController')
const alunoController = require('./controllers/AlunoController')

route.options("*",cors())

//Endpoints - Curso
route.get('/curso', cursoController.findAllTurmas)//ready
route.post('/curso', cursoController.saveCurso)//create
route.put('/curso/:id',cursoController.updateCurso)//update
route.delete('/curso/:id',cursoController.deleteCurso)//Delete

route.get('/aluno', alunoController.findAllAlunos)
route.get('/aluno/:id',alunoController.findAlunoById)
route.delete('/aluno/:id',alunoController.deleteAluno)

module.exports = route