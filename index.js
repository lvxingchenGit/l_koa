const Koa = require('koa')
const { initRouter, initController } = require('./app')

class L_koa{
    constructor() {
        this.app = new Koa()
        this.port = 8000
        // this.services = initService(this)['userModel']
        this.controllers = initController()
        this.init()
    }
    init() {
        this.initUse(this)
        this.initListen()
    }
    initUse(l_koa){
        this.app.use(initRouter(l_koa).routes())
    }
    initListen() {
        this.app.listen(this.port)
    }
}
const l_koa = new L_koa()
