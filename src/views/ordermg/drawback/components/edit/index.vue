<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="订单ID">
                <el-input v-model="form.orderid"></el-input>
            </el-form-item>
            <el-form-item label="用户">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="实付款">
                <el-input v-model="form.payment"></el-input>
            </el-form-item>
            <el-form-item label="含运费">
                <el-input v-model="form.freight"></el-input>
            </el-form-item>
            <el-form-item label="下单时间">
                <el-input v-model="form.date"></el-input>
            </el-form-item>
            <el-form-item label="商户">
                <el-input v-model="form.business"></el-input>
            </el-form-item>
            <el-form-item label="支付IID">
                <el-input v-model="form.paymentid"></el-input>
            </el-form-item>
            <el-form-item label="有无退款">
                <el-input v-model="form.refund"></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="form.typeName" placeholder="请选择">
                    <el-option v-for="item in typeList" :label="item.state" :value="item.state"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="发货物流信息">
                <el-input v-model="form.loginfor"></el-input>
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