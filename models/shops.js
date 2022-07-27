const { STATUS_CODES } = require('http');
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
            allowNull:false
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        state: {
            type: DataTypes.STRING,
            references: 'states',
            key: 'id'
        }
    },
)

