const {deleteAluno} = require('../controllers/AlunoController')
const database = require('../database')                 //Importa a conexão com o banco de dados

module.exports = {                                      //Exporta as funções para que possam ser usadas em outros arquivos
    readAlunos: () => {
        return new Promise((resolve, reject) => {       //ReadAlunos retorna uma promise
            database.query('SELECT * FROM aluno', (err,result) => { //Executa uma query sql para para selecionar todos os registros da tabela alunos
                //err Captura qualquer erro que possa ocorrer ao executar a query
                //result Contém o resultado da query se ela for executada com sucesso
                if(err){                                //Se ouver um erro
                    reject(err)                         //Promise rejeitada
                    return
                }                                       //Promise bem sucedida
                resolve(result)                         //Resolvida com o resultado da consulta (lista de alunos)
            })
        })
    },

    getAlunoById: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM aluno WHERE id = ${id}`, (err,result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    deleteAluno: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE * FROM aluno WHERE id= ${id}`, (err,result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
}

