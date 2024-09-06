const {deleteAluno} = require('../controllers/AlunoController')
const database = require('../database')                 //Importa a conexão com o banco de dados

module.exports = {                                      //Exporta as funções para que possam ser usadas em outros arquivos
    //Método para cadastrar um novo aluno
    createAluno: (foto, nome, telefone, data_nascimento, fk_curso, email) => {
        // return new Promise((resolve, reject) => {
        //     database.query(`INSERT INTO aluno VALUES(null, ?,?,?,?,?,?)`, [foto, nome, telefone, data_nascimento, fk_curso, email], (err,result) => {
        //         if(err){
        //             reject(err)
        //             return
        //         }
        //         resolve(result)
        //     })
        // })


        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO aluno (foto, nome, telefone, data_nascimento, fk_curso, email)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            const values = [foto, nome, telefone, data_nascimento, fk_curso, email];

            database.query(sql, values, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            })
        })


    },

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
    },

    updateAluno: (id, foto, nome, telefone, data_nascimento, email) => {
        return new Promise((resolve,reject) => {
            database.query(`UPDATE aluno SET foto = ?, nome = ?, telefone =?, data_nascimento = ?, email = ? WHERE id = ?`, [foto,nome,telefone, data_nascimento, email, id],
                (err, result) => {
                    if(err){
                        reject(err)
                        return
                    }
                    resolve(result)
                }
            )
        })
    }
}

