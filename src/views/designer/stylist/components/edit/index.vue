<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="设计师" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
             <el-form-item label="头像">
                <img-upload @upload-success="uploadSuccess" :files="mainFiles" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item label="简介" prop="description">
                <el-input type="textarea" v-model="form.description" :rows="5" :cols="8"></el-input>
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