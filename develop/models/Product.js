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
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // define produuct_name
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDecimal:true,
            },
        },
        // define stock
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true,
            },
        },
        // define category_id
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "category",
                key: "id",
            },
        },
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