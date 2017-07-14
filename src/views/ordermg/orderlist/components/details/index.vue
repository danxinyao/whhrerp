<template>
    <pg-dialog title="商品详情" :isShow="isdetail" @close="close" size="large">
        <!-- 表单 -->
        <el-form label-position="top" label-width="80px" ref="form" :model="mall">
            <el-form-item label="订单状态">
                <el-steps :space="100" :active="active" class="flagTimeline">
                  <el-step :title="item.text" :description="item.time" v-for="item in mall.orderFlagTimeline"></el-step>
                </el-steps>
            </el-form-item>
            <el-form-item label="订单信息">
                <div class="info">
                    <div>订单号:&nbsp;&nbsp;{{mall.sheet }}
                    </div>
                    <div class="customer_address">收货信息:
                        <span class="address">&nbsp;&nbsp;{{mall.address}}</span>
                        <span class="name">&nbsp;&nbsp;{{mall.linkMan}}</span>
                        <span class="mobile">&nbsp;&nbsp;{{mall.mobile}}</span>
                    </div>
                    <div class="note">
                        <span>买家备注:&nbsp;&nbsp;{{mall.buyerMemo}}</span>
                    </div>
                </div>
            </el-form-item>
            <el-form-item>
                <!-- 表格 -->
                <el-table highlight-current-row border
                v-loading="listLoading" style="width: 100%" :data="mall.orderItems">
                    <el-table-column prop="" label="商品明细" width="500">
                       <template scope="scope">
                            <img v-if="scope.row.imgUrl" :src="scope.row.imgUrl" class="goodsimg">
                            <!-- <img :src="scope.row.imgUrl" class="goodsimg"> -->
                            <div class="goodInfo">
                                <span class="good_name">{{scope.row.name}}</span>
                                <span class="good_size">{{scope.row.size}}</span>
                                <span class="good_color">{{scope.row.color}}</span>
                                <span class="good_qty">*{{scope.row.qty}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="" label="是否需要上门安装" width="200">
                        <template scope="scope">
                            <span v-if="scope.row.installFee === 0">否</span>
                            <span v-else>是</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="installFee" label="配送安装费" width="150">
                    </el-table-column>
                    <el-table-column prop="price" label="单价" width="100">
                    </el-table-column>
                    <el-table-column prop="actualAmount" label="总计"  min-width="100">
                    </el-table-column>
                    <el-table-column prop="merchantName" label="商户" min-width="100" >
                    </el-table-column>
                    <el-table-column label="退款状态" min-width="100">
                        <template scope="scope">
                            <span v-if="scope.row.refundFlag === 0">无退款</span>
                            <span v-if="scope.row.refundFlag === 10">正在退款</span>
                            <span v-if="scope.row.refundFlag === 100">完成退款</span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-form-item>
            <br/><br/><br/><br/>
            <!-- 物流信息 -->
            <el-form-item label="物流信息" v-if="mall.deliveryType ===2">
                <div class="delivery">
                    <p>快递公司:&nbsp;&nbsp;{{mall.companyName }}</p>
                    <p>快递单号:&nbsp;&nbsp;{{mall.deliveryNo  }}</p>
                    <p>物流状态:</p>
                    <el-steps :space="100" :active="active2" class="flagTimeline" direction="vertical">
                        <el-step :title="item.text" :description="item.time" v-for="item in mall.deliveryTimeline"></el-step>
                    </el-steps>
                </div>
            </el-form-item>
            <el-form-item class="close_btn">
                <el-button @click="close">取消</el-button>
            </el-form-item>
        </el-form>
    </pg-dialog>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .form-item-table {
        margin-left: 0;
        .el-form-item__content {
            margin-left: 0;
        }
    }
    .goodsimg {
        display: inline-block;
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        padding: 10px 0;
    }
    .info {
        display: flex;
        margin-left: 50px;
    }
    .info div {
        flex: 1;
    }
    .el-form-item {
        margin-bottom: 10px;
    }
    .note {
        display: inline-block;
    }
    .note span {
        display: block;
    }
    .goodInfo {
        display: inline-block;
        margin-left: 8px;
    }
    .good_name {
        display: block;
        width: 380px;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .good_size,.good_color {
        margin-right: 5px;
    }
    .close_btn {
        text-align: center;
    }
    .el-form-item[data-v-495fff54] {
        margin-bottom: 20px;
    }
    .flagTimeline {
        margin-left: 50px;
    }
    .delivery {
        padding-left: 50px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>