<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column prop="sheet" label="订单编号" width="190">
        </el-table-column>
        <el-table-column align="center" prop="" label="用户" width="180">
           <template scope="scope">
                <img v-if="scope.row.avatar" :src="scope.row.avatar" class="userimg">
                <!-- <img :src="scope.row.avatar" class="userimg"> -->
                <span>{{ scope.row.userName }}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="payAmount" label="实付款" width="100">
        </el-table-column>
        <el-table-column align="center" prop="installFee" label="配送安装费" width="80">
        </el-table-column>
        <el-table-column prop="createTime" label="下单时间" width="190">
        </el-table-column>
        <el-table-column align="center" prop="installFee" label="是否需要上门安装" width="100">
            <template scope="scope">
                <span v-if="scope.row.installFee === 0">否</span>
                <span v-else>是</span>
            </template>
        </el-table-column>
        <el-table-column align="center" label="有无退款" min-width="100">
            <template scope="scope">
                <span v-if="scope.row.refundFlag === 0">无退款</span>
                <span v-if="scope.row.refundFlag === 10">正在退款</span>
                <span v-if="scope.row.refundFlag === 100">完成退款</span>
            </template>
        </el-table-column>
        <el-table-column align="center" label="订单状态" min-width="100">
            <template scope="scope">
                <!-- <span v-if="scope.row.flag === 0">待付款</span>
                <span v-if="scope.row.flag === 10">待发货</span>
                <span v-if="scope.row.flag === 20">待收货</span>
                <span v-if="scope.row.flag === 100">交易成功</span>
                <span v-if="scope.row.flag === 95">删除</span>
                <span v-if="scope.row.flag === 97">取消</span> -->
                <span v-if="scope.row.flag == 20 && scope.row.refundFlag <= 0">待收货</span>
                <span v-if="scope.row.flag == 10 && scope.row.refundFlag <= 0">待发货</span>
                <span v-if="scope.row.flag == 0 && scope.row.refundFlag < 100">待付款</span>
                <span v-if="scope.row.refundFlag >= 100 || scope.row.flag == 97 || scope.row.flag == 98">交易关闭</span>
                <span v-if="scope.row.flag == 100 && scope.row.refundFlag != 10">交易成功</span>
                <span v-if="scope.row.refundFlag == 10">申请退款中</span>
            </template>
        </el-table-column>
        <el-table-column align="center" label="配送类型" min-width="100">
            <template scope="scope">
                <span v-if="scope.row.deliveryType === 0">无</span>
                <span v-if="scope.row.deliveryType === 1">同城配送</span>
                <span v-if="scope.row.deliveryType === 2">快递配送</span>
            </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="150">
            <template scope="scope">
                <el-button size="small" type="text" @click="handleEdit(scope.$index, list,0)" v-if="(scope.row.deliveryType === 0&&scope.row.flag === 10)">发货</el-button>
                <el-button size="small" type="text" @click="handleEdit(scope.$index, list,1)" v-if="(scope.row.deliveryType === 1&&(scope.row.flag === 10 ||scope.row.flag === 20)&& scope.row.deliveryFlag !== 100)">更新配送</el-button>
                <el-button size="small" type="text" @click="detail(scope.$index, list)">详情</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .userimg {
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