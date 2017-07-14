<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :rules="rules" :model="form" label-width="100px">
            <el-form-item label="图库名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="所属的设计师">
                <el-select v-model="form.designerID" placeholder="请选择">
                    <el-option v-for="item in designers" :label="item.name" :value="item.designerID"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图库类型">
                <el-select v-model="form.decorationType" placeholder="请选择">
                    <el-option v-for="item in getDecorationType" :label="item.text" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="主图">
                <img-upload @upload-success="uploadSuccess" :files="mainFiles" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item label="副图">
                <img-upload multiple :files="subFiles" @upload-success="multipleUploadSuccess" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
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