import {get}from './get.js'
import { post } from './post.js';

const getTpyeList = get('/client/getTpyeList');  //获取菜单分类列表
const getMenuList = get('/client/getMenuList');   //获取菜单列表
const postBillList = post('/client/postBillList'); //提交账单列表


export {
    getTpyeList,
    getMenuList,
    postBillList
}

