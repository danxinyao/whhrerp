<template>
    <pg-dialog :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="form.note"></el-input>
            </el-form-item>
            <el-form-item label="主图">
                <img-upload :files="mainFiles" @upload-success="uploadSuccess"  :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item label="链接">
                <el-input v-model="form.url"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
                <el-button @click="close">关闭</el-button>
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
    .remind {
        color: red;
        font-size: 12px;
    }
</style>