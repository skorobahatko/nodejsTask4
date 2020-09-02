module.exports = (sequelize, DataTypes) => {
    const Сar = sequelize.define('Сar', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'cars',
        timestamps: false
    })
    return Сar;
}
