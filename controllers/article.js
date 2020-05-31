/*
 * @Author: Jason
 * @Date: 2020-01-20 15:30:09
 * @version: 
 * @LastEditors  : Jason
 * @LastEditTime : 2020-01-22 10:46:57
 * @Descripttion: 
 */
const ArticleModel = require("../modules/article");

class articleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx){
        //接收客服端
        let req = ctx.request.body;
        if(req.title && req.author && req.content && req.category){
            try{
                //创建文章模型
                const ret = await ArticleModel.createArticle(req);
                //使用刚刚创建的文章ID查询文章详情，且返回文章详情信息
                const data = await ArticleModel.getArticleDetail(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建文章成功',
                    data
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '创建文章失败',
                    data: err
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全'
            }
        }
    }

    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx){
        let id = ctx.params.id;
        if(id){
            try{
                // 查询文章详情模型

                let data = await ArticleModel.getArticleDetail(id).catch(err=>{
                    console.log("查询失败",err)
                    // return ctx.body = {
                    //     code: 413,
                    //     msg: '查询失败',
                    //     data:null
                    // }
                });
                // data = data.map(i=>{
                //     i.category = "Test"
                //     return i
                // })
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '文章ID必须传'
            }
        }
    }
    /**
     * 更改文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async update(ctx){
        let id = ctx.params.id;
        console.log("获取到的id为",id)
        if(id){
            try{
                // 查询文章详情模型
                let data = await ArticleModel.updateArticleDetail(id);
                console.log("data",data)
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '更新成功',
                    data
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '更新失败',
                    data
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '更新-文章ID必须传'
            }
        }
    }
    /**
     * 删除文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx){
        let id = ctx.params.id;
        console.log("获取到的id为",id)
        if(id){
            try{
                // 查询文章详情模型
                let data = await ArticleModel.deleteArticleDetail(id);
                console.log("data",data)
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                    data
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '删除失败',
                    data
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '删除-文章ID必须传'
            }
        }
    }
}

module.exports = articleController;