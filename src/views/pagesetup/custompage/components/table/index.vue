<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column align="center" fixed type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="页面名称" width="400">
        </el-table-column>
        <el-table-column align="center" prop="address" label="页面地址" width="400">
        </el-table-column>
        <el-table-column align="center" prop="date" label="建立时间" width="300">
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="100">
            <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, list)">编辑</el-button>
                <el-button size="small" @click="handleEdit(scope.$index, list)">删除</el-button>
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