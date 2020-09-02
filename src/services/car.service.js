const connection = require('../dataBase').getInstance();

module.exports = {
    getAllCars: async () => {
        const Car = connection.getModel('Car');
        return Car.findAll({});
    }
};

