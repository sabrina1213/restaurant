<template>
  <div>
    <el-row>
      <el-table :data="billData" border style="width:100%">
        <el-table-column prop="bill_number" label="订单号" width="200">
        </el-table-column>
        <el-table-column prop="table_number" label="桌号" width="200">
        </el-table-column>
        <el-table-column prop="total_price" label="金额" width="200">
        </el-table-column>
        <el-table-column prop="submission_time" label="下单时间" width="200">
        </el-table-column>
        
        <el-table-column label="操作" fixed="right" width="200">
          <template #default="scope">
            <el-button
              type="text"
              size="small"
              @click="showdetail(scope.$index, scope.row)"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import { defineComponent ,onMounted} from "vue";
import { reactive, ref ,toRaw} from "@vue/reactivity";

import {searchBill} from "@/api/index.js"
export default defineComponent({
  setup() {
      let billData = reactive([
          ]);
      onMounted(()=>{
          searchBill().then((res)=>{
              if(res.err == false){
                res.list.forEach(element => {
                    billData.push(element);
                });
                 console.log('bill_statue',billData);
              }
          })
      });
       
      return{
          billData
      }
  },
});
</script>

