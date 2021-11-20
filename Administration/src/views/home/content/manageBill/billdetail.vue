<template>
  <div class="bill-detial">
      桌号:{{bill.table_number}}订单号:{{bill.bill_number}}下单时间:{{bill.submission_time}}金额:{{bill.total_price}}
      <el-table :data="billList" border >
        <el-table-column prop="goods_name" label="菜名" width="200">
        </el-table-column>
        <el-table-column prop="goods_price" label="单价" width="100">
        </el-table-column>
        <el-table-column prop="goods_count" label="数量" width="200"> </el-table-column>
      </el-table>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:{
        value:Object,
        
    },
    setup(props){
        
        let bill = computed(()=>{
            return props.value.value
        })
        let billList = computed(()=>{
            return props.value.list
        })
        console.log('billNumber',props.value.value,'billList',props.value.list)
        return {
            bill,
            billList
        }
    }
}
</script>

<style>

.el-table--border {
    border-right: none;
    border-bottom: none;
    width: 500px;
    margin-top: 30px;
}
</style>