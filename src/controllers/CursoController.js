const cursoService = require('../services/CursoService')

module.exports = {

    findAllTurmas: async (request, response) => {

        //Declaração do objeto json que será retornado como resposta da requisição
        let json = {error: "", result: [] }

        //Invocar a função que irá consultar o BD para listar as turmas
        let cursos = await cursoService.readCursos()

        //Tratamento de dados
        for(let curso of cursos){
            json.result.push({
                id: curso.id,
                nome: curso.nome,
                quantidade: curso.quantidade
            })
        }
        response.status(200).json(json)
    } 
}