<template>
    <pg-dialog size="small" :title="title" :isShow="show" @close="close" class="flagDia">
        <el-form ref="form" :model="form" label-width="80px" v-if="types ===0">
            <el-form-item label="">
                <el-radio-group v-model="form.status">
                    <el-radio :label="0">配送</el-radio>
                    <el-radio :label="1">快递</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="配送状态" v-if="form.status === 0">
                <el-select v-model="form.flag" placeholder="请选择">
                    <el-option v-for="item in deliveryList" :label="item.text" :value="item.sortId" :disabled="item.disabled"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="快递公司" v-if="form.status === 1">
                <el-select v-model="form.companyCode" placeholder="请选择">
                    <el-option v-for="item in companys" :label="item.text" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="快递单号" v-if="form.status === 1">
                <el-input v-model="form.deliveryNo"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="close">取消</el-button>
            </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="80px" v-if="types ===1">
            <el-form-item label="配送状态">
                <el-select v-model="form.flag" placeholder="请选择">
                    <el-option v-for="item in deliveryList" :label="item.text" :value="item.sortId" :disabled="item.disabled"></el-option>
                </el-select>
                <br><br><br><br>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button @click="close">取消</el-button>
                </el-form-item>
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
<style rel="stylesheet/less" lang="less">
    .flagDia .el-dialog__body {
        padding: 40px 150px;
    }
</style>