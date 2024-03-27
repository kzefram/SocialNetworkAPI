require('dotenv').config();

const Sequelize = require('sequelize');
// this is my actual DB connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, {
      host: 'localhost',
      dialect: 'mongodb',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;