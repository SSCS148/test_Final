const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = { Comment };