import {get}from './get.js'
import {post} from './post'


const login = get('/manager/login');
const addMenu = post('/manager/addmenu');
const deleteMenu = get('/manager/deletemenu');
const searchMenuApi = get('/manager/searchmenu');
const searchBill = get('/manager/searchBill');
export {
    login,
    addMenu,
    deleteMenu,
    searchMenuApi,
    searchBill
}
