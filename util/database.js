const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sharma@mysql1133', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

