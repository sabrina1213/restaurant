const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const manager = require('./manager')
const client = require('./client')
/*加载模板处理模块*/
var swig = require('swig');

let cookieParser = require('cookie-parser');
let session = require('cookie-session');

// const session = require('express-session')

app.use(cookieParser('sabrina'));//用于对cookie进行签名，提高安全性
app.use(session({
	secret: 'sabrina',  //通过设置的secret字符串，来计算hash值并放在cookie中，使产生的signedCookie防篡改
	name: 'session_from_sabrina', //设置cookie中，保存session的字段名称，默认为connect.sid
	cookie:{maxAge:36000 * 24 * 30},
	resave: true,   //即使session没有被修改，也保存session值，默认为true
	saveUnitialized:true	//强制未初始化的session保存到数据库
}))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ limit:'500mb',extended: true }))
// parse application/json
app.use(express.json({limit:'500mb'}))

//设置跨域请求
app.use("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin",  req.header("origin"));
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
	next();
});


app.use('/public', express.static('public'));
// app.use('/public',express.static( './public'));
app.use(express.static(path.resolve(__dirname,'./dist')));
// app.get("*",function(req,res){
// 	const html = fs.readFileSync(path.resolve(__dirname,'./dist/index.html'))
// })

const port = 3000
// const host = '101.34.51.116'
const host = '127.0.0.1'
app.use('/manager',manager);
app.use('/client',client);
app.listen(port, host,() => {
  console.log(`App listening at http://${host}:${port}`)
})

