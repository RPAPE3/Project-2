// const { STATUS_CODES } = require('http');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shop extends Model{} 

Shop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        state: {
            type: DataTypes.STRING,
            references: 'states',
            key: 'id'
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'shop',
    }
);

module.exports = Shop;
