/*
 * @Author: Jason
 * @Date: 2020-01-20 15:27:54
 * @version: 
 * @LastEditors  : Jason
 * @LastEditTime : 2020-01-21 10:43:53
 * @Descripttion: 该文件的主要作用就是建立与数据表的对应关系，也可以理解为代码的建表。
 */
// DROP TABLE IF EXISTS `article`;
// CREATE TABLE `article` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `title` varchar(255) NOT NULL,
//   `author` varchar(255) NOT NULL,
//   `content` varchar(255) NOT NULL,
//   `category` varchar(255) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
// SET FOREIGN_KEY_CHECKS = 1;


module.exports = function(sequelize,DataTypes){
    return sequelize.define('article',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //文章标题
        title:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        //作者
        author:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'author'
        },
        //内容
        content:{
            type: DataTypes.STRING,
            allowNull: false,
            field:'content'
        },
        //文章分类
        category:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'category'
        },
        // 创建时间
        createdAt:{
            type: DataTypes.DATE
        },
        // 更新时间
        updatedAt:{
            type: DataTypes.DATE
        }
    },{
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为false，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        freezeTableName: true
    })
}