/*
 * @Author: Jason
 * @Date: 2020-01-20 15:32:20
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 14:05:15
 * @Descripttion: 处理跨越
 */
const cors = require('koa2-cors');
module.exports = function (){
    return cors({
        origin: function(ctx) {
          if (ctx.url === '/test') {
            return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
          }
          return "*"; // 允许来自所有域名请求
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 0,
        credentials: true,
        allowMethods: ['GET', 'POST', 'OPTIONS'], // 设置所允许的HTTP请求方法
        // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    })
}
// exports.cors = () => cors({
//         origin: function(ctx) {
//           if (ctx.url === '/test') {
//             return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
//           }
//           return "*"; // 允许来自所有域名请求
//         },
//         exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//         maxAge: 5,
//         credentials: true,
//         allowMethods: ['GET', 'POST', 'OPTIONS'], // 设置所允许的HTTP请求方法
//         allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// })
