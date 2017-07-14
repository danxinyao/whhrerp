<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column prop="orderSheet" label="订单号" min-width="190">
        </el-table-column>
        <el-table-column prop="sheet" label="退款号" min-width="190">
        </el-table-column>
        <el-table-column align="center" prop="payAmount" label="实付款" min-width="100">
        </el-table-column>
        <el-table-column align="center" label="用户" min-width="200">
            <template scope="scope">
                <img :src="scope.row.avatar" class="userimg">
                <span>{{ scope.row.userName }}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="merchantName" label="商户" min-width="100">
        </el-table-column>
        <el-table-column prop="paySheet" label="支付单号" min-width="190">
        </el-table-column>
        <el-table-column align="center" prop="" label="退款类型" min-width="100">
            <template scope="scope">
                <span v-if="scope.row.refundType ===2" class="refundType1">退货退款</span>
                <span v-else  class="refundType2">仅退款</span>
                <div>￥{{scope.row.refundAmount}}</div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="退款原因" min-width="300">
            <template scope="scope">
                <div>
                    <span v-if="scope.row.cause === 1">[商品破损]</span>
                    <span v-if="scope.row.cause === 2">[实际与商品描述不符]</span>
                    <span v-if="scope.row.cause === 3">[不喜欢/效果不好]</span>
                    <span v-if="scope.row.cause === 4">[无理由退货]</span>
                    <span v-if="scope.row.cause === 5">[质量问题]</span>
                    <span v-if="scope.row.cause === 6">[其他]</span>
                    <span>{{scope.row.reason}}</span>
                </div>
                <img :src="item" v-for="item in scope.row.imgUrls" class="goodsimg" @click="showBigImg(item)">
            </template>   
        </el-table-column>
        <el-table-column align="center" prop="returnTime" label="退款时间" min-width="190">
        </el-table-column>       
        <el-table-column align="center" prop="" label="订单状态" min-width="100">
            <template scope="scope">
                <span v-if="scope.row.orderFlag === 0">待付款</span>
                <span v-if="scope.row.orderFlag === 10">待发货</span>
                <span v-if="scope.row.orderFlag === 20">待收货</span>
                <span v-if="scope.row.orderFlag === 100">交易成功</span>
                <span v-if="scope.row.orderFlag === 95">删除</span>
                <span v-if="scope.row.orderFlag === 97 || scope.row.orderFlag == 98">交易关闭</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="退货物流信息" min-width="200">
            <template scope="scope">
                <div class="express">快递公司：{{ scope.row.companyName }}</div>
                <div class="courier">快递单号：{{ scope.row.deliveryNo }}</div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="flag" label="退款状态" min-width="100">
            <template scope="scope">
                <span v-if="scope.row.flag === 1">已创建</span>
                <span v-if="scope.row.flag === 2">卖家同意退款</span>
                <span v-if="scope.row.flag === 3">已退货</span>
                <span v-if="scope.row.flag === 4">退款成功</span>
                <span v-if="scope.row.flag === 5">拒绝退款</span>
                <span v-if="scope.row.flag === 6">取消退款</span>
            </template>
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="170">
            <template scope="scope">
                <el-button size="small" type="text" @click="agree(scope.$index, list)" v-if="scope.row.flag === 1">同意</el-button>
                <el-button size="small" type="text" @click="agree(scope.$index, list)" v-else :disabled="true">同意</el-button>
                <el-button size="small" type="text" @click="refuse(scope.$index, list)" v-if="scope.row.flag === 1">拒绝</el-button>
                <el-button size="small" type="text" @click="refuse(scope.$index, list)" v-else :disabled="true">拒绝</el-button>
                <el-button size="small" type="text" @click="receiptAndRefund(scope.$index, list)" v-if="scope.row.flag === 3">收货并退款</el-button>
                <el-button size="small" type="text" @click="refuse(scope.$index, list)" v-else :disabled="true">收货并退款</el-button>
                <el-button size="small"  type="text" @click="refuseRefund(scope.$index, list)" v-if="scope.row.flag === 3">拒绝退款</el-button>
                <el-button size="small" type="text" @click="refuse(scope.$index, list)" v-else :disabled="true">拒绝退款</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .userimg , .goodsimg{
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        padding: 10px 0;
        margin-left: 2px;
    }
    .refundType1 {
        color: red;
    }
    .refundType2 {
        color: green;
    }
    .express {
        text-align: left;
    }
    .courier {
       text-align: left; 
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>