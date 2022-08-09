const {Model, DataTypes} = require('sequelize');
//const { DataTypes } = require('../config/connection');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
    {
        //define colum 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //define product_id
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "product",
                key: 'id',
            },
        },
        // define tag_id 
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key:'id',
            },
        },
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored:true,
        modelName: 'product_tag',
    }
);

module.exports = ProductTag;