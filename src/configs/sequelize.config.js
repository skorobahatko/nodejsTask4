const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'cars-database',
    'root',
    'root1',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)
