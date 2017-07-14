<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column prop="name" label="栏目名称" width="800">
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="300">
            <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, list)">编辑</el-button>
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