/*
 * @Author: Jason
 * @Date: 2020-01-20 15:30:47
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 15:30:49
 * @Descripttion: 在项目中modules目录下创建article.js文件，为文章表，该文件为文章的实例。
 */
const path = require("path")
// 引入mysql的配置文件
const db = require('./../config/db');
// 引入sequelize对象
const Sequelize = db.sequelize;
const Sequelize2 = require("sequelize")
const Op = Sequelize2.Op;

// 引入数据表模型
const Article = Sequelize.import(path.join(__dirname,'./../schema/article.js'));
Article.sync({force: false}); //自动创建表

class ArticleModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data){
        return await Article.create({
            title: data.title, //标题
            author: data.author,  //作者
            content: data.content,  //文章内容
            category: data.category //文章分类
        });
    }

    /**
     * 查询文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(idx){
        console.log("获取到的id为",idx)
        return await Article.findAll({
            where:{
                id:idx                
                // id:{
                //     // $gt:idx
                //     $or: [{id: idx}, {id: 2}]
                // } 
                
                // [Op.or]: [ { id: idx }, { id: 2}]
                // title: {
                //     [Op.like]: `%${idx}%`
                // }
            },
            order:[
            //     ['id'],
                [ Sequelize2.cast(Sequelize2.col('id'), 'INTEGER') , 'ASC' ]
            ],
            // attributes:["id", "title"]    //  需要查询出的字段
            // attributes:["id", ["title","t"],],   //  需要查询出的字段
            // attributes:{
            //     exclude: ['id'] 
            // },
            // raw:true
        });
    }
    /**
     * 更新文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async updateArticleDetail(id){
        return await Article.update({
            title: "JavaScript从入门到放弃",
        },{
            where:{
                id
            }
        });
    }
    /**
     * 删除文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async deleteArticleDetail(id){
        return await Article.destroy({
            where:{
                id
            },
            // attributes:["id", "title"]    //  需要查询出的字段
            raw:true
        });
    }
}

module.exports = ArticleModel;