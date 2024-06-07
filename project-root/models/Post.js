const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = { Post };