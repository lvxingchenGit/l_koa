




/**
 * 数据库表
 *
 * */
// npm 包
const {Sequelize, Model} = require('sequelize')

// 本项目包
const {sequelize} = require('../core/db.js')
class User extends Model {}
// 用户表
User.init({
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    username: Sequelize.STRING,
    password: {
        type: Sequelize.STRING,
        unique: true
        // set(val) { // 与es6中的setter getter 一样 可对存入数据库前，进行字段捕获
        //     const salt = bcrypt.genSaltSync(10)
        //     const pas = bcrypt.hashSync(val, salt)
        //     this.setDataValue('password', pas)
        // }
    },
    openid: {
        type: Sequelize.STRING(256),
        unique: true
    }
}, {
    sequelize,
    modelName: 'user'
})
sequelize.sync()
// sequelize.sync({force: true}) // force: true 每次删除数据表，然后在新建一个表

module.exports = {
    User
}






