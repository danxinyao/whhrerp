<template>
    <pg-dialog size="large" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="文章归类">
                <template>
                    <el-select v-model="form.articleType" placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :label="item.text"  
                            :value="item.value">
                        </el-option>    
                    </el-select>
                </template>
            </el-form-item>
            <el-form-item label="主图">
                <img-upload @upload-success="uploadSuccess" :files="mainFiles" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item label="简介">
                <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="form.description">
                </el-input>
            </el-form-item>
            <el-form-item label="详细内容">
                <pg-editor ref="contentEditor" v-model="form.content" :init-content="content"></pg-editor>
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