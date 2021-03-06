const fs = require('fs');
var mysql = require("mysql");
var dbConfig = require("../database/dbconfig");
const addmenu = (req,callback)=>{
    var pool = mysql.createPool(dbConfig.mysql);

    console.log("新增数据",req.body);
    var pic = req.body.newMenuData.picture;
    var name = req.body.newMenuData.name;
    var price = req.body.newMenuData.price;
    var detail = req.body.newMenuData.detail;
    var type = req.body.newMenuData.type;
    var picUrl = './public/images/'+name+'.jpg'

    var base64 = pic.replace(/^data:image\/\w+;base64,/, ""); //去掉图片base64码前面部分data:image/png;base64
    var dataBuffer = Buffer.from(base64, 'base64');
    fs.writeFile(picUrl, dataBuffer, function(err){
        if(err){
            result = {
                err: true,
                result: "图片接受失败"
            }
            callback(result);  
        }else{
            pool.getConnection(function (err, connection) {
                if (err) {
                    result = {
                        err: true,
                        result: "连接数据库失败"
                    }
                    console.log("err on mysql connection", err);
                    callback(result);
                } else {
                    var delSql = 'insert into menu (picture, name, price,detail,type) VALUES (?,?,?,?,?);'
                    picUrl = 'http://localhost:3000/public/images/'+name+'.jpg';
                    //增
                    connection.query(delSql, [picUrl,name,price,detail,type],function (err, result) {
                        if (err) {
                            result = {
                                err: true,
                                result: "插入失败",
                                
                            }
                            callback(result)
                        }
                        else{
                            result = {
                                err: false,
                                result: "插入成功",
                                newPicUrl: picUrl,
                            }
                            callback(result)
                        }
                       
                    });
                }
            })
        }
    });

    
}
module.exports = addmenu;