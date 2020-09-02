const {Router} = require('express');
const carsRouter = Router();
const carController = require('../controllers/car.controller');

carsRouter.get('/', carController.getAll);
carsRouter.post('/', carController.createCar);
carsRouter.post('/:id', carController.getById);
carsRouter.delete('/:id', carController.deleteCar)

module.exports = carsRouter;
