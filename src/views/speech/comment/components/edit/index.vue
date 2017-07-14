<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="时间"> 
                <el-input v-model="form.date"></el-input>
            </el-form-item>
            <el-form-item label="用户">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="内容">                      
                <el-input v-model="form.content"></el-input>
            </el-form-item>
            <el-form-item label="文章出处">                      
                <el-input v-model="form.source"></el-input>
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