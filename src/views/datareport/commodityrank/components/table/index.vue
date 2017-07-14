<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column align="center" prop="rank" label="排名" width="200">
        </el-table-column>
        <el-table-column align="center" label="商品名" width="448">
            <template scope="scope">
                <!-- <img class="goodsimg" :src="scope.row.imgsrc"> -->
                <span>{{scope.row.goodsName}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="salePrice" label="单价" width="300">
        </el-table-column>
        <el-table-column align="center" prop="saleQty" label="成交数量" width="300">
        </el-table-column>
    </el-table>
</template>
<style rel="stylesheet/less" lang="less" scope>
    .goodsimg {
        width: 60px;
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        padding: 10px 0;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>