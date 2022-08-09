const {Model, Datatypes} = require('sequlize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
    {
        //define colum 
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