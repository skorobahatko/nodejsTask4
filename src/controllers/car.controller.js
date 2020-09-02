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
    },
    createCar: async (req, res) => {
        try {
            const newCar = await carService.createNewCar(req.body);
            res.json(newCar);
        } catch (e) {
            res.json(e.message)
        }
    },
    deleteCar: async (req, res) => {
        const {id} = req.params;
        try {
            const newArray = await carService.deleteCar(id);
            res.end(`${id} deleted`);
        } catch (e) {
            res.json(e.message)
        }
    },
    getById: async (req, res) => {
        const {id} = req.params;
        try {
            const car = await carService.getById(id);
            res.json(car);
        } catch (e) {
            res.json(e.message)
        }
    }
};
