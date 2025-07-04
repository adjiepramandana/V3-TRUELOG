const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Untuk SSL self-signed
    },
    // Optimasi untuk essential-0
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    max: 20 // Max connections
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Tes koneksi
sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Connection error:', err));

module.exports = sequelize;
