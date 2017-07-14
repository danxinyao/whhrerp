<template>
    <pg-dialog :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="名字">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="公司名">
                <el-input v-model="form.company"></el-input>
            </el-form-item>
            <el-form-item label="地区">
                <el-form-item label="  ">
                    <el-input v-model="form.state"></el-input>
                </el-form-item>
                <el-form-item label="  ">
                    <el-input v-model="form.city"></el-input>
                </el-form-item>
                <el-form-item label="  ">
                    <el-input v-model="form.district"></el-input>
                </el-form-item>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="form.merchantsType">
                    <el-option v-for="item in typeList" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="品牌">
                <el-input v-model="form.brand"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.note"></el-input>
            </el-form-item>
            <br/>
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
    .el-row {
        display: inline-block;
    }
</style>