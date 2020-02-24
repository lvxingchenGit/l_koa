
module.exports = l_koa => ({
        'get /': l_koa.controllers['home'].index,
        'get /details': l_koa.controllers['home'].detail
    })
