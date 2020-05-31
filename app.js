/*
 * @Author: Jason
 * @Date: 2020-01-17 16:21:21
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 16:47:53
 * @Descripttion: 
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const { logger, accessLogger } = require('./middleware/logger');
const cors = require('./middleware/cors');
const routerPage = require('./middleware/router');
const testMiddle = require("./middleware/test")
// const index = require('./routes/index')
// const users = require('./routes/users')

// error handler
onerror(app)

process.env.PORT = 4919



// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())


//本项目可通过此链接访问图片： http://localhost:4919/images/index_banner.png
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))



// 处理跨域请求
app.use(cors())

// logger
app.use(accessLogger())

app.use(testMiddle())


app.keys = ['im a newer secret', 'i like turtle'];
// app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');


// 设置全局变量或方法的两种方式
app.context.utils = {
  name:"Jason",
  age:24
}
app.use(async (ctx, next) => {
  ctx.logger = logger
  ctx.cookies.set('name', 'Jaosn', { signed: true });
  await next()
  console.log("当前环境变量",app.env)
  console.log("获取到的值",ctx.utils)
})

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
app.use(routerPage())

// error-handling
app.on('error', (err, ctx) => {
  console.log("服务器错误",err)
  ctx.logger.error('server error', err, ctx)
});

module.exports = app
