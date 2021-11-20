var mysql = require("mysql");
var dbConfig = require("../../database/dbconfig");

var searchmenu = function (req,callback) {
    var key = req.query.key;        //查询的关键词
    // console.log('searchmenu',req);
    var pool = mysql.createPool(dbConfig.mysql);
    pool.getConnection(function (err, connection) {
        if (err) {
            result = {
                err: true,
                result: "连接数据库失败"
            }
            console.log("err on mysql connection",err);
            callback(result);
        } else {
            if(key == 'all'){
                connection.query("select * from menu", function (err, result) {
                    if (err) {
                        result = {
                            err: true,
                            result: "查询失败"
                        }
                        console.log("查询失败",err);
                        callback(result);
                    } else {
                        console.log('success',result.length);
                        if (result.length == 0) {
                            result = {
                                err: false,
                                result: "暂无数据"
                            }
                        } else{
                            var list = result;
                            result = {
                                err: false,
                                result: "查询成功",
                                list: list
                            }
                        }
                        callback(result);
                    }
    
                })
            }
            else{
                connection.query("select * from menu where name = ?",[key] , function (err, result) {
                    if (err) {
                        result = {
                            err: true,
                            result: "查询失败"
                        }
                        console.log("查询失败",err);
                        callback(result);
                    } else {
                        console.log('success',result.length);
                        if (result.length == 0) {
                            result = {
                                err: true,
                                result: "暂无数据"
                            }
                        } else if (result.length == 1) {
                            var list = result;
                            result = {
                                err: false,
                                result: "查询成功",
                                list :list
                            }
                        }
                        callback(result);
                    }
    
                })
            }
            
        }
    })
}

module.exports = searchmenu;