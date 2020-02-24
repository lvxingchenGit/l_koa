

/**
 *
 *
 * db链接数据库的
 *
 * */
// const {
//     dbname,
//     user,
//     password,
//     port,
//     host
// } = require('../config/config.js').config

const Sequelize = require('sequelize')
const sequelize = new Sequelize()
// const sequelize = new Sequelize(dbname, user, password, {
//     dialect: 'mysql',
//     host,
//     port
//     // logging: false,
//     // timezone: '_08:00',
// })
module.exports = {
    sequelize
}
