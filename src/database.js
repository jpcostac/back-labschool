require('dotenv').config({path: 'variaveis.env'})

// Importação do módulo mysql
const mysql = require('mysql2')

//criar conexão
const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
})

connection.connect(err => {
    if(err) throw err 
    console.log(`Connection to database ${process.env.BD_NAME}`)
})