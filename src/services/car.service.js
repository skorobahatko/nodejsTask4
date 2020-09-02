const connection = require('../dataBase').getInstance();

module.exports = {
    getAllCars: async () => {
        const Car = connection.getModels();
        return Car.getAll({});
    }
}
