<template>
    <div>
        <el-row>
            <SearchMenu/>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <AddMenu/>
        </el-row>
        <el-row>
            <EditMenu/>
        </el-row>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SearchMenu from './searchMenu.vue'
import AddMenu from './addMenu.vue'
import EditMenu from './editMenu.vue'
export default defineComponent({
    components:{
        SearchMenu,
        AddMenu,
        EditMenu
    },
    setup() {
        
    },
})
</script>