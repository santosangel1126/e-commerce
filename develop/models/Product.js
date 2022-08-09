//import important parts of sequelize libary
const { Model, Datatypes} = require('sequelize');
//import our databases connection from config.js
const sequelize = request('../config/connection)');

// Initialize Product model (table) by extending off Sequelize's Model class 
class Product extends Model {}

// set up fields and rules for product model
Product.init(
    {
        //define colums 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;