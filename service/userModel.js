


class User {
    constructor(){}
    getData() {
        return new Promise((resolve, reject) => {
            resolve('模拟数据库查询的数据！')
        })
    }
}
const user = new User()
module.exports = {
    user
}
