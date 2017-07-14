<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="页面名称"> 
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="背景色">
                <el-input v-model="form.bgcolor" placeholder="请输入页面背景色色值如:#eeeeee"></el-input>
            </el-form-item>
            <el-form-item label="建立时间">                      
                <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList">
                <el-button size="small" type="primary">新增图片</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="链接">
                <el-input v-model="form.link"></el-input>
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