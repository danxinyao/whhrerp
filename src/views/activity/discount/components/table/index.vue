<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" type="selection" fixed="left" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="活动名称" width="300">
        </el-table-column>  
        <el-table-column align="center" prop="beginTime" label="活动开始时间" width="250">
        </el-table-column>
        <el-table-column align="center" prop="endTime" label="活动结束时间" width="250">
        </el-table-column>
        <el-table-column align="center" prop="activityStatus" label="活动状态" width="200">
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="100">
            <template scope="scope">
                <el-button size="small" type="text" @click="handleEdit(scope.$index, list)">编辑</el-button>
            </template> 
        </el-table-column>
    </el-table>         
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>