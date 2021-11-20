var express = require('express')

let router = express.Router();

var getTpyeList = require('./client/getTypeList');
var getMenulist = require('./client/getMenulist');
var postBillList = require('./client/postBillList');

//返回result给前端函数
function returnJson(req, res, result) {
    if (req.jsonp) {
        res.jsonp(result);
    } else {
        res.json(result);
    }
}

router.use('/getTpyeList',function(req,res){
    getTpyeList (function(result){
        returnJson(req,res,result);
    })
})
router.use('/getMenulist',function(req,res){
    getMenulist(req,function(result){
        returnJson(req,res,result);
    })
})
router.post('/postBillList',function(req, res){
    
    postBillList(req,function(result){
        returnJson(req, res, result);
    })
    
})
module.exports = router