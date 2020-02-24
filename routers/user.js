// model.exports = {
//     'get /': async ctx =>{
//         ctx.body = '3'
//     },
//     'get /details': async ctx =>{
//         ctx.body = '4'
//     }
// }

// 做了一个桥梁
// model.exports = l_koa => ({
//     'get /': l_koa.controllers['user'].index,
//     'get /details': l_koa.controllers['user'].detail
// })
