const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const BotToken = sequelize.define('BotToken', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  userIdOwner: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true // Aktifkan createdAt & updatedAt
});

module.exports = BotToken;