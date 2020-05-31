/*
 * @Author: Jason
 * @Date: 2019-12-18 16:48:22
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 16:53:00
 * @Descripttion: module.exports和exports是等价的（有个前提：不去改变它们指向的内存地址） 使用方式：module.exports = {name: '萤火虫叔叔'}； 或者exports.name = "萤火虫叔叔"
 */
var moment = require('moment');
const ArticleModel = require("../modules/article");

class IndexController {
    static async IndexHome (ctx, next){
        let ctx_query = ctx.query;  // get 请求获取参数
        ctx.body={
            resultCode:"000000",
            resultDesc:"SUCCESS",
            requestTime:moment().format("YYYY-MM-DD HH:mm:ss"),
            data: ctx.request.body
        }
    }
    static async IndexTest (ctx, next){
        // 通过数据库查找文章详情
        let { artId } = ctx.request.body
        console.log('artId: ', ctx.utils.name);
        // console.info("获取到的cookies为",ctx.headers)
        ctx.logger.info("获取到的请求参数为",artId)
        if(!!artId){
            try{
                // 查询文章详情模型
                let data = await ArticleModel.getArticleDetail(artId).catch(err=>{
                    console.log("查询失败1",err)
                });
                ctx.logger.info("获取到的查询结果为",JSON.stringify(data))
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }
            }catch(err){
                console.log("查询失败2",err)
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
        }else {
            // ctx.response.redirect('http://gitlab.schengle.com/dashboard/projects');
            ctx.response.status = 200;
            ctx.body = {
                code: 416,
                msg: '文章ID必须传'
            }
        }

    }
}
module.exports = IndexController

// 获取GET请求数据有两个途径。

// 1、是从上下文中直接获取
// 请求对象ctx.query，返回如 { a:1, b:2 }
// 请求字符串 ctx.querystring，返回如 a=1&b=2
// 2、是从上下文的request对象中获取
// 请求对象ctx.request.query，返回如 { a:1, b:2 }
// 请求字符串 ctx.request.querystring，返回如 a=1&b=2。

// POST
// let postParam = ctx.request.body //获取post提交的数据