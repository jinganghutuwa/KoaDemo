/*
 * @Author: Jason
 * @Date: 2020-01-17 16:27:38
 * @version: 
 * @LastEditors: Jason
 * @LastEditTime: 2020-04-29 16:57:35
 * @Descripttion: 打印访问日志以及应用日志
 */
const path = require('path');
const log4js = require('koa-log4');
console.log("环境变量",process.env.NODE_ENV )

log4js.configure({
    appenders: {
        access: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', //生成文件的规则
            alwaysIncludePattern: true, //文件名始终以日期区分
            encoding: "utf-8",
            // filename: path.join('C:\\Users\\manbu\\Desktop\\project\\test\\node\\logs\\access.log') //生成文件名
            filename: path.join(__dirname, '../logs/access.log') //生成文件名
        },
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true, //文件名始终以日期区分
            encoding: "utf-8",
            // filename: path.join('C:\\Users\\manbu\\Desktop\\project\\test\\node\\logs\\application.log')
            filename: path.join(__dirname, '../logs/application.log')
        },
        out: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'WARN'
        },
        access: {
            appenders: ['access'],
            level: 'info'
        },
        application: {
            appenders: ['application'],
            level: 'info'
        }
    }
});

exports.accessLogger = () => log4js.koaLogger(log4js.getLogger('access')); //记录所有访问级别的日志
exports.logger = log4js.getLogger('application'); //记录所有应用级别的日志