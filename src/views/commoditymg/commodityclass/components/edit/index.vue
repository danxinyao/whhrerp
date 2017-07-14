<template>
    <pg-dialog :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="分类名">
                <el-input v-model="form.label"></el-input>
            </el-form-item>
            <br>
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