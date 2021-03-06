var express = require('express')
let router = express.Router();
// const { Router } = require('express');

var Login = require('./login/login.js');
var SearchMenu = require('./home/searchmenu.js')


//返回result给前端函数
function returnJson(req, res, result) {
    if (req.jsonp) {
        res.jsonp(result);
    } else {
        res.json(result);
    }
}

// 验证session
function Session(req,res,next){
    if(req.cookies.session_from_sabrina){
        next();
    }
    else{
        result = {
            err :false,
            result :"session匹配失败"
        }
        returnJson(req, res, result)
    }
}
//验证手机号的正则
function isPhone(text){
	//手机号格式  
	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
    if (!myreg.test(text)) {  
        return false;  
    } 
    else{  
        return true;  
    }  
} 
//验证密码的正则
function isPassword(text){
	//6到12为数字和的字母的组合
	var myreg= /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    if (!myreg.test(text)) {  
        return false;  
    } 
    else{  
        return true;  
    }  
}
// 登陆
router.use('/login', function (req, res) {
    var phone,password;
    console.log('login....begin');
    console.log("req",req.query);
    if(req.body.phone){
        console.log('login....get phone');
		phone = req.body.phone;
		password = req.body.password; 
	}
	else if(req.query.phone){
		phone = req.query.phone;
		password = req.query.password;
	}
    if (isPhone(phone) && isPassword(password)) {
        Login(req, phone,password,function (result) {
            // console.log("login....",req,res,result);
            returnJson(req, res, result);
        })
    }
    else{
		result={
			err:true,
			result:"正则不匹配"
		}
		returnJson(req,res,result);
	}
})
// 查找菜单
router.use('/searchmenu',Session,function(req,res){
    console.log("cookies",req.cookies);
    var key;
    // req.session.user;
    if(req.body.key){
        key = req.body.key
    }
    else if(req.query.key){
        key = req.query.key
    }
    SearchMenu(req,key,function(result){
        returnJson(req, res, result);
    })
    console.log("searchquery--query",req.query.key);
})
// 添加菜单接口
router.use('/addmenu',function(req, res){
    console.log('req.file',req.file);
    result = {
        err: false,
        result: "picture upload"
    }
    res.json(result);
})

module.exports= router; 