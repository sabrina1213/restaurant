var mysql = require("mysql");
var dbConfig = require("../database/dbconfig");

var login = function (req, phone, password, callback) {
    var pool = mysql.createPool(dbConfig.mysql);
    pool.getConnection(function (err, connection) {
        if (err) {
            result = {
                err: true,
                result: "连接数据库失败"
            }
            console.log("err..",err);
            callback(result);
        } else {
            connection.query("select * from user where phone = ? AND password =?", [phone, password], function (err, result) {
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
                            result: "账户密码错误"
                        }
                    } else if (result.length == 1) {
                        var t = Math.random();
                        req.session.user = "user=" + phone + "&juck=" + t;
                        result = {
                            err: false,
                            result: "管理员session下发"
                        }
                    }
                    callback(result);
                }

            })
        }
    })
}

module.exports = login;