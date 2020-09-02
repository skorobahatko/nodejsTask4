const carService = require('../services/car.service');

module.exports = {
    getAll: async (req, res) => {
        try {
            const cars = await carService.getAllCars();
            console.log (cars)
            res.json(cars);
        } catch (e) {
            res.json(e.message)
        }
    }
};
