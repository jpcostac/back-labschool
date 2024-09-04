const {deleteAluno} = require('../controllers/AlunoController')
const database = require('../database')

module.exports = {
    readAlunos: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM aluno', (err,result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
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

