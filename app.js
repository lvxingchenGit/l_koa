const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
// 自动加载文件夹目录的函数：
function onloading(dir, cb) {
    const dirPath = path.resolve(__dirname, dir) // 获取要读取文件夹的绝对路径
    const dirName = fs.readdirSync(dirPath) // 同步读取
    dirName.forEach(item => {
        const fileName = item.replace('.js', '') // 去掉扩展名
        const file = require(`${dirPath}/${fileName}`) // 引入文件夹对应文件
        cb(fileName, file) // cb函数执行
    })

}
/**
 * 读取routers文件夹中所有文件内容，创建路由
 * l_koa - l_koa is L_koa instance
 * fileName - String fileName
 * routes - Object/function  file content
 */
function initRouter(l_koa) {
    const router = new Router()
    onloading('./routers', (fileName, routes) => {
        const prefix = fileName === 'home' ? '' : '/'+'user' // 加前缀
        routes = typeof routes === 'function' ? routes(l_koa) : routes // 可能导出的是一个函数
        Object.keys(routes).forEach(item => {
            const [method, path] = item.split(" ")
            router[method](prefix+path, routes[item])
            // router[method](prefix +path, async ctx => {
            //     l_koa.ctx = ctx
            //     await routes[item](l_koa)
            // })
        })
    })
    return router
}
/**
 * 读取controller文件夹中所有文件内容，文件与内容作映射
 *  fileName - String fileName
 *  controllerObj - Object file content
 */
function initController() {
    const controllers = {} // {user: {}} user为文件名 值：文件对应的内容
    onloading('controller', (fileName, controllerObj) => {
        controllers[fileName] = controllerObj
    })
    return controllers
}
/**
 * 未实现！！！
 * 读取service文件夹中所有文件内容，文件与内容作映射
 *  fileName - String fileName
 *  controllerObj - Object file content
 */
function initService() {
    const servicesMap = {}
    onloading('service', (fileName, serviceContent) => {
        servicesMap[fileName] = serviceContent
    })
    return servicesMap
}
module.exports = {
    initRouter,
    initController
}
