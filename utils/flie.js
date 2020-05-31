/*
 * @Author: Jason
 * @Date: 2019-12-20 13:30:54
 * @version: 
 * @LastEditors  : Jason
 * @LastEditTime : 2019-12-20 14:21:38
 * @Descripttion: 
 */
const fs = require("fs")
module.exports = {
    /**
     * @name: 写入文件
     * @param {fileData} 要写入的数据
     * @param {fpath}      存入的文件路径
     */
    writeFileAsync:function(fpath,fileData){
        return new Promise((resolve,reject)=>{
            fs.writeFile(fpath, fileData,  function(err) {
                if (err)  reject()
                else resolve()
            });
        })
    },
    /**
     * @name: 读取文件
     * @param {fpath}      存入的文件路径
     */
    readFileAsync:function(fpath,encoding="utf-8"){
        return new Promise((resolve,reject)=>{
            fs.readFile(fpath, encoding, function(err,data) {
                if (err)  reject()
                else resolve(data)
            });
        })
    }
}