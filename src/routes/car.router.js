const {Router} = require('express');
const carsRouter = Router();
const controller = require('../controllers/car.controller');

carsRouter.get('/', controller.getAll);

module.exports = carsRouter;
