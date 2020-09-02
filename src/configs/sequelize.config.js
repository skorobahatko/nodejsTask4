const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'localhost',
    'root',
    'root1',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)
