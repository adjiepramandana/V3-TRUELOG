// models/BotToken.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Pastikan path benar

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
  timestamps: true,
  tableName: 'bot_tokens' // Nama tabel eksplisit
});

module.exports = BotToken;
