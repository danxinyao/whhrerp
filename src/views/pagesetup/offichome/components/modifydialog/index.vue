<template>
    <pg-dialog :style="small" title="修改图片" :isShow="show" @close="moddiaclose">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="子标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="  ">
                <img-upload :files="mainFiles" @upload-success="uploadSuccess"></img-upload>
            </el-form-item>
            <el-form-item label="链接">
                <el-input v-model="form.url"></el-input>
            </el-form-item>
            <el-form-item>            
                <el-button type="primary" @click="subMit">确 定</el-button>
                <el-button @click="moddiaclose">取 消</el-button>
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