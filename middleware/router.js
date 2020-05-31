/*
 * @Author: Jason
 * @Date: 2020-01-20 15:43:26
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 16:50:58
 * @Descripttion: 处理路由中间件
 */
const fs = require('fs')
const path = require("path")
// 路由模块使用前需要先安装和实例化
const Router = require('koa-router')
const router = new Router({
  prefix: '/tony' // 设置路由层级在最外层新增项目名
})

let routerPageArr = fs.readdirSync(path.join(__dirname,'./../routes'))
console.log('router目录下的文件为',JSON.stringify(routerPageArr))
routerPageArr.forEach( failName => {
  let routerPage = require(path.join(__dirname, `./../routes/${failName}`))
  /*
    urls 下面的每个文件负责一个特定的功能，分开管理
    通过 fs.readdirSync 读取 urls 目录下的所有文件名，挂载到 router 上面
  */
  router.use('/' + failName.replace('.js', ''), routerPage.routes(), routerPage.allowedMethods())
})

module.exports = function(){
    return router.routes()
}