const connection = require('../dataBase').getInstance();
const {Op} = require('sequelize');

module.exports = {
    getAllCars: async () => {
        const Car = connection.getModel('Car');
        return Car.findAll({});
    },
    createNewCar: async (reqBody) => {
        const Car = connection.getModel('Car');
        return Car.create(reqBody, {new: true})
    },
    deleteCar: async (id) => {
        const Car = connection.getModel('Car');
        return Car.destroy({
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })
    },
    getById: async (id) => {
        const Car = connection.getModel('Car');
        return Car.findAll({
            where: {
                id: {
                    [Op.eq]: id
                }
            }}
        )
    },
    updateById: async (id, newCar) => {
        const Car = connection.getModel('Car');
        let one = Car.update(newCar,{
            where: {
                id: id
            }
        })
        return one
    }
};

