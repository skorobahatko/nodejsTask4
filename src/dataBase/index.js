const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');



module.exports = (() => {
    let instance;
    function initConnection() {
        const client = new Sequelize('cars-database','root','root1', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(),'database','models'),(err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    console.log (require(path.join(process.cwd(),'dataBase','models', modelName))(client, DataTypes));
                    console.log (client, DataTypes)
                    models[modelName] = (require(path.join(process.cwd(),'database','models', modelName)))(client, DataTypes);
                    console.log (models)
                })
            });
        }
        return {
            setModels: () => getModels(),
            getModels: (modelName) => models[modelName]
        };
    }
    return {
        getInstance: () => {
            if (!instance){
                instance = initConnection();
            }
            return instance;
        }
    }
})();
