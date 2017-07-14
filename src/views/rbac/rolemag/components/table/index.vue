<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="创建时间" width="500">
        </el-table-column>
        <el-table-column align="center" prop="name" label="角色名" width="500">
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="100">
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