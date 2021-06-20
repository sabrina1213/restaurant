var mysql = require("mysql");
var dbConfig = require("../database/dbconfig");
const deletemenu = (req,callback) => {
    var pool = mysql.createPool(dbConfig.mysql);
    var key = req.query.key;
    console.log("删除的关键词",key);
    pool.getConnection(function (err, connection) {
        if (err) {
            result = {
                err: true,
                result: "连接数据库失败"
            }
            console.log("err on mysql connection", err);
            callback(result);
        } else {
            var delSql = 'delete from menu where name=?';
            //删
            connection.query(delSql, [key],function (err, result) {
                if (err) {
                    result = {
                        err: true,
                        result: "删除失败"
                    }
                    callback(result)
                }
                else{
                    result = {
                        err: false,
                        result: "删除成功"
                    }
                    callback(result)
                }
               
            });
        }
    })
}
module.exports = deletemenu;