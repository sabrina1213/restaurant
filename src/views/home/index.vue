<template>
    <el-row>
        <el-col :span="3.5">
            <Nav/>
        </el-col>
        <el-col :span="21">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './nav/index.vue'
export default defineComponent({
    components:{
        Nav,
    },
    setup() {
        
    },
})
</script>

