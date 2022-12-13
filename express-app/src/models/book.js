const sequelize = require('../config/db.config')
const { DataTypes } = require('sequelize');

//define Model
const Book = sequelize.define("books", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.INTEGER,
    }
})
module.exports = Book