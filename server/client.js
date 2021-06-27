var express = require('express')

let router = express.Router();

var getTpyeList = require('./client/getTypeList');

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

module.exports = router