const mysql = require("mysql");
var dbConfig = require("../database/dbconfig");

const typeList = (callback) =>{
    var pool = mysql.createPool(dbConfig.mysql);
    pool.getConnection(function (err, connection) {
        if (err) {
            result = {
                err: true,
                result: "连接数据库失败"
            }
            console.log("err on mysql connection", err);
            callback(result);
        } else {
            connection.query('select distinct type from menu',function (err, result) {
                if(err){
                    result = {
                        err: true,
                        result: "查询数据库失败"
                    }
                    callback(result);
                }
                else{
                    if(result.length == 0){
                        result = {
                            err: true,
                            result: "暂无数据"
                        }
                        callback(result);
                    }
                    else{
                        var list = result;
                        result = {
                            err: false,
                            result: "查询成功",
                            list: list
                        }
                        callback(result);
                    }
                }
            })
        }
    })
}

module.exports = typeList;