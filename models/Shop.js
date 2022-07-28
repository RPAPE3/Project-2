const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shop extends Model {} 

Shop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        shop_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        phone: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        
        // state_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: 'state',
        //       key: 'id',
        //     },
        //   },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'shop',
      }
    );
    
    module.exports = Shop;

