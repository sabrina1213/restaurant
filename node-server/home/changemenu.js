var mysql = require("mysql");
var dbConfig = require("../database/dbconfig");
const changemenu = ()=>{
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
            
        }
    })
}
module.exports = changemenu;