const mysql = require("mysql");
var dbConfig = require("../database/dbconfig");

const postBillList = (req, callback) => {
    console.log(req.body.params);
   
    var list = req.body.params.list;
    var money = req.body.params.money;
    var table_number = req.body.params.table;
    var time = new Date();
    var submission_time = time.getFullYear()+'/'+time.getMonth()+'/'+time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    var bill_number = '0'+time.getFullYear()+time.getMonth()+time.getDate()+time.getHours()+time.getMinutes()+time.getSeconds();
    console.log(submission_time);
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
            for (var i = 0; i <list.length; i++){
                var Sql = 'insert into bill (table_number, money, goods_name,goods_price,goods_count,submission_time,bill_number) VALUES (?,?,?,?,?,?,?);'
                console.log(list[i]);
                //增
                connection.query(Sql, [table_number, money,list[i].name,list[i].price,list[i].count, submission_time,bill_number], function (err, result) {
                    if (err) {
                        result = {
                            err: true,
                            result: "插入失败",
                        }
                        console.log(err);
                        callback(result)
                        return;
                    } 
                });
            };
            result = {
                err: false,
                result: "插入成功",
                billNumber:bill_number,
                submissionTime:submission_time,
            }
            callback(result);
        }
    })
}

module.exports = postBillList;