const {Router} = require('express');
const carsRouter = Router();
const carController = require('../controllers/car.controller');

// carsRouter.get('/', controller.getAll);
carsRouter.get('/', carController.getAll);

module.exports = carsRouter;
