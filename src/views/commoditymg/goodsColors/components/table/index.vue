<template>
    <el-table 
        :data="list" 
        highlight-current-row 
        v-loading="listLoading" 
        element-loading-text="加载中" 
        style="width: 100%" 
        border 
        @selection-change="selectChange"
        >
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="colorID" label="颜色编码" min-width="210">
        </el-table-column>
        <el-table-column align="center" prop="name" label="名字" min-width="100">
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="创建时间" min-width="180"></el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="100">
            <template scope="scope">
                <el-button type="text" size="small" icon="edit" @click="handleEdit(scope.$index,list)"></el-button>
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