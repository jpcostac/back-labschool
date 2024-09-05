const multer = require('multer')

//Configurar o multer para armazenar os arquivos na memoria temporiamente
const storage = multer.memoryStorage()

//Criar uma instancia do multer com a configuração do 'storage'
const upload = multer({storage: storage})

//exportar o upload
module.exports = upload