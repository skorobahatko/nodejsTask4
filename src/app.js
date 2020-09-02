const carsRouter = require('./routes/car.router');
const express = require('express');
const app = express();

const instance = require('./dataBase').getInstance();
instance.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/cars', carsRouter);

app.listen('8080', (error) => {
    if (error) {
        console.log (error);
    }
    console.log ('server listening on 8080')
})
