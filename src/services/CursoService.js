const database = require('../database')

module.exports = {
    //Metodo para consultar os cursos
    readCursos: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM curso', (err,result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },
    createCurso: (nome) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO curso VALUES (null, "${nome}",null) `,(err,result) => {
            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
    }
}