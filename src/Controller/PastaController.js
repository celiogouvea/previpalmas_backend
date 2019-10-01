var shell = require('shelljs');

module.exports = {
    async Diretorio  (request, response) {
        shell.mkdir('-p', '/opt/arquivos/=$1',[id], (error, result)=>{
            if (error) {
                throw error
              }
              response.status(200).json("criação da pasta ok");
        })
    },

}