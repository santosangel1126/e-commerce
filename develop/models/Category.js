const { Model, Datatypes} = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}
Category.init(
    {
        // define colums
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;