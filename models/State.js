const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class State extends Model {} 

State.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        state_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        flag: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'state',
      }
    );
    
    module.exports = State;