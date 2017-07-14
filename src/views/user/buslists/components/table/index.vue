<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="商户名" width="500"></el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="300"></el-table-column>
        <el-table-column align="center" prop="goodsCount" label="商品数量" min-width="200">
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