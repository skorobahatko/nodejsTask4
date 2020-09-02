const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');



module.exports = ( () => {
    let instance;
    function initConnection() {
        const client = new Sequelize('cars','root','root1', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(),'database','models'),(err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = require(path.join(process.cwd(),'database','models', modelName))(client, DataTypes);
                })
            });
            console.log (models);
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };

    }
    return {
        getInstance: () => {
            if (!instance){
                instance = initConnection();
                console.log ('instance' + '=>>>>>   ');
                console.log (JSON.stringify(instance))
            }
            return instance;
        }
    }
})();
