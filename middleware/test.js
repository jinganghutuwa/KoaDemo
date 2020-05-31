/*
 * @Author: Jason
 * @Date: 2020-04-29 16:26:07
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 16:33:41
 * @Descripttion: 
 */
module.exports = function(){
    return async (ctx, next) => {
        console.log('中间件1 doSomething')
        await next();
        console.log('中间件1 end')
    }
}

