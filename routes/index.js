/*
 * @Author: Jason
 * @Date: 2019-12-17 16:21:57
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 15:49:27
 * @Descripttion: 
 */
const router = require('koa-router')()
const IndexController = require('./../controllers/indexController')


router.get('/', async (ctx, next) => {
  // ctx.response.redirect('/index/string');
  // ctx.throw(500);
  // ctx.throw(404)
  ctx.response.status = 404;
  ctx.response.message = "not found Jason"
  // ctx.assert(false, 401, 'User not found. Please login!');
  // ctx.logger.info("接收类型",ctx.accepts('text/html'))
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
router.post('/test', IndexController.IndexTest)
router.post('/home', IndexController.IndexHome)

router.get('/json', async (ctx, next) => {
  console.log('url---->',ctx.response.get('ETag'))
  ctx.append('LinkChj', '<http://127.0.0.1/>');
  //从request中获取GET请求
  let request =ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;
  
  //从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;

  ctx.body={
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

module.exports = router
