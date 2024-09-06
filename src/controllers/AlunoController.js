const { response, request } = require('express')
const alunoService = require('../services/AlunoService')

module.exports = {
    //Metodo para salvar um novo aluno
    saveAluno: async (request, response) => {
        let json = {error: "", result: ""}

        let foto = request.file.buffer
        let nome = request.body.nome
        let telefone = request.body.telefone
        let data_nascimento = request.body.data_nascimento
        let fk_curso = request.body.fk_curso
        let email = request.body.email

        if(!nome || !telefone || !data_nascimento || !fk_curso || !email){
            json.error= "Todos os campos são obrigatórios"
            return response.status(400).json(json)
        }

        let aluno = await alunoService.createAluno(foto,nome,telefone,data_nascimento, fk_curso, email)

        json.result = `Aluno: ${nome} cadastrado com sucesso! ID: { ${aluno.insertId}}`
        response.status(201).json(json)

    },

    findAllAlunos: async (request, response) => {
        let json = {error: "", result: []}                  //Objeto json inicializado com duas chaves, error(vazia) e result(lista vazia)

        let alunos = await alunoService.readAlunos()        //Função de consulta ao banco de dados

        for(let aluno of alunos){                           //Iteração da lista de alunos
            json.result.push({                              //Adiciona cada aluno a chave result do objeto
                id: aluno.id,
                nome: aluno.nome,
                sobrenome: aluno.sobrenome,
                telefone: aluno.telefone,
                email: aluno.email
            })
        }
        response.status(200).json(json)                     //Respondendo o codigo de status e envia o json com os dados em formato json
    },

    deleteAluno: async (request,response) => {
        let json ={error: "", result: {}}

        let id = request.params.id                          //Obtem os parametros id da URL

        if(id){                                             //Se o id válido
            let alunoValid = await alunoService.getAlunoById(id) //Busca o aluno de acordo com o ID

            if(alunoValid.length == 0){                     //Se o aluno não for encontrado
                json.error = "Aluno não encontrado!"
                response.status(404).json(json)
            }else{                                          //Caso o aluno seja encontrado
                await alunoService.deleteAluno(id)          //Exclusão do aluno

                json.result = `Aluno ${alunoValid[0].nome} excluido com sucesso` 
                
                response.status(200).json(json)
            }
        }else{
            json.error = "Id do curso é obrigatório"
            response.status(404).json(json)
        }
    },

    findAlunoById: async (request,response) => {
        let json ={error: "", result: {}}

        let id = request.params.id

        if(id){
            let alunoValid = await alunoService.getAlunoById(id)

            if(alunoValid.length == 0){
                json.error = "Aluno não encontrado"
                response.status(404).json(json)
            }else{

                json.result = {
                    id: alunoValid[0].id,
                    nome: alunoValid[0].nome,
                    telefone: alunoValid[0].telefone,
                    email: alunoValid[0].email
                }

                response.status(200).json(json)
            }
        }else{
            json.error = "Id do aluno é obrigatório"
            response.status(404).json(json)
        }
    }, 

    //Método para atualizar um aluno
    updateAluno: async(request, response) => {
        let json = {error: "", result: ""}

        let id = request.params.id

        let foto = request.file.buffer
        let nome = request.body.nome
        let telefone = request.body.telefone
        let data_nascimento = request.body.data_nascimento
        let email = request.body.email

        let alunoValid = await alunoService.getAlunoById(id)

        if(alunoValid.length == 0){
            json.error = "Aluno não encontrado"
            response.status(404).json(json)
        }//else{
            if(nome != "" && telefone != "" && data_nascimento != "" && email != ""){
                await alunoService.updateAluno(id, foto, nome, telefone, data_nascimento, email)            

                json.result = `Aluno: ${nome} atualizado com sucesso! ID: ${id}`
                response.status(200).json(json)

            }else{
                json.error= "Todos os campos são obrigatórios"
                return response.status(400).json(json)  
            }
        //}   
    }
    
}