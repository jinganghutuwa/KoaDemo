/*
 * @Author: Jason
 * @Date: 2020-01-20 15:20:45
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-05-31 13:53:58
 * @Descripttion: 主要用来创建mysql的数据库链接的
 */
const Sequelize = require("sequelize")

// 数据库配置文件
const sqlConfig = {
    host: "localhost",
    user: "root",
    password: "19960417",
    database: "test",
    databaseType:"mysql"
}


const sequelize = new Sequelize(sqlConfig.database,sqlConfig.user,sqlConfig.password,{
    host:sqlConfig.host,
    dialect:sqlConfig.databaseType,
    // operatorsAliases:false,
    operatorsAliases:{
        $gt: Sequelize.Op.gt
    },
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
});

module.exports = {
    sequelize
}