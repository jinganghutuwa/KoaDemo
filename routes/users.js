/*
 * @Author: Jason
 * @Date: 2019-12-17 16:21:57
 * @version: 
 * @LastEditors  : Jason
 * @LastEditTime : 2019-12-18 16:16:40
 * @Descripttion: 
 */
const router = require('koa-router')()

// router.prefix('/users')

router.get('/', function (ctx, next) {
  console.log('method', ctx.method)
  ctx.body = `<h1>Index</h1>
    <form action="/users/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
})

router.post('/signin', async function (ctx, next) {
  var name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/users">Try again</a></p>`;
  }
})


module.exports = router