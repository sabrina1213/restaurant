import {get}from './get.js'

const getTpyeList = get('/client/getTpyeList');  //获取菜单分类列表
const getMenuList = get('/client/getMenuList');


export {
    getTpyeList,
    getMenuList
}

