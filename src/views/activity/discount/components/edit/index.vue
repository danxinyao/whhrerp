<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="活动名字" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="beginTime">
                <el-date-picker
                  v-model="form.beginTime"
                  @change="beginDateChange"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="过期时间" prop="endTime">
                <el-date-picker
                  v-model="form.endTime"
                  @change="dateChange"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="开放数量">
                <el-input v-model="form.openQty"></el-input>
            </el-form-item>
            <el-form-item label="优惠方式">
                <el-radio-group v-model="form.discountType">
                    <el-row>
                        <el-radio :label="0">折扣</el-radio>
                        <el-input placeholder="请输入折扣" class="input_label" v-model.number="form.discountData" v-if="form.discountType === 0">     
                            <template slot="append">折</template>
                        </el-input>
                    </el-row>
                    <el-row class="case">
                        <el-radio :label="1">减现金</el-radio>
                        <el-input placeholder="请输入金额" class="input_label" v-model.number="form.discountData" v-if="form.discountType === 1">
                            <template slot="append">元</template>
                        </el-input>
                    </el-row>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="优惠条件">
                <el-radio-group v-model="installFeeTemp">
                    <el-row>
                        <el-radio :label="0">无条件</el-radio>
                    </el-row>
                    <el-row>
                        <el-radio :label="1">每一个用户限领取</el-radio>
                        <el-input placeholder="请输入件数" class="input_label" v-model.number="form.discountCondition">
                            <template slot="append">件</template>
                        </el-input>
                    </el-row>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动商品">
                <el-radio-group v-model="form.goodsFlag">
                    <el-radio :label="0">全部商品</el-radio>
                    <el-radio :label="1">指定商品</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item v-show="form.goodsFlag">
                <el-button @click="showTable">添加商品</el-button>
                <span>已选商品{{count}}个</span>
            </el-form-item>
            <el-form-item v-show="form.goodsFlag">
                <el-table
                :data="form.goodsList"
                border
                style="width: 100%">
                    <el-table-column label="商品名称" min-width="350">
                        <template scope="scope">
                            <img :src="scope.row.mainImageUrl" class="goodimg">
                            <div class="goodinfo">
                                <span class="goodName">{{ scope.row.name }}</span>
                                <span class="customNo">编号:{{ scope.row.customNo }}</span>
                            </div>
                        </template>          
                    </el-table-column>  
                    </el-table-column>
                    <el-table-column prop="salePrice" label="销售价" width="150">
                    </el-table-column>
                    <el-table-column prop="stockQty" label="商品库存" width="150">
                    </el-table-column>
                    <el-table-column fixed="right" align="center" prop="" label="操作" width="100">
                        <template scope="scope">
                            <el-button type="text" @click="delGood(scope.$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>               
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="close">取消</el-button>
            </el-form-item>
        </el-form>
    </pg-dialog>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
   .goodimg {
        width: 60px;
        max-height: 80px;
        overflow: hidden;
        vertical-align: middle;
        margin: 10px 0;
        background: #F9FAFC;
        display: inline-block;
    }
    .goodinfo {
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
        width: 200px;
    }
    .goodName {
        display: block;
    }
    .customNo {
        display: block;
    }
    .input_label {
        width: 200px;
        margin-left: 5px;
    }
    .case {
        margin-top: 10px;
    }
</style>
