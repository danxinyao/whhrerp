<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column align="center" prop="payTime" label="时间" width="200">
        </el-table-column>
        <el-table-column align="center" prop="" label="用户名" width="200">
            <template scope="scope">
                <img class="userimg" :src="scope.row.userAvatar">
                <span>{{scope.row.userName}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="amount" label="消费金额" width="150">
        </el-table-column>
        <el-table-column align="center" prop="saleQty" label="成交数量" width="150">
        </el-table-column>
        <el-table-column align="center" prop="" label="购买到的商品" min-width="400">
            <template scope="scope">
                <div v-for="item in scope.row.goods">
                    <img :src="item.mainImageUrl" class="goodimg">
                    <span class="goodName">{{item.goodsName}}</span>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<style rel="stylesheet/less" lang="less" scope>
    .goodimg , .userimg {
        width: 60px;
        max-height: 80px;
        overflow: hidden;
        vertical-align: middle;
        margin: 10px 0;
        background: #F9FAFC;
        display: inline-block;
    }
    .goodName {
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
        width: 200px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>