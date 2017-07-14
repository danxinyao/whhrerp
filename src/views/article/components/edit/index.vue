<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="文章名字">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="建立的时间">
                <el-input v-model="form.date"></el-input>
            </el-form-item>
            <el-form-item label="点击数">
                <el-input v-model="form.clicks"></el-input>
            </el-form-item>
            <el-form-item label="收藏数">
                <el-input v-model="form.collections"></el-input>
            </el-form-item>
            <el-form-item label="评论数">
                <el-input v-model="form.comments"></el-input>
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