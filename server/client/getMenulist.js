const mysql = require("mysql");
var dbConfig = require("../database/dbconfig");

const menuList = (req,callback) =>{
    // console.log('typelistreq',req);
    var key = req.query.key;
    console.log('typelist',key);
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
            connection.query('select name,picture,price from menu where type = ?',[key],function (err, result) {
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
                        var list = [];
                        list = result;
                        list.forEach(element => {
                            element.count = 0;
                        });
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

module.exports = menuList;