<template>
    <pg-dialog :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="模块名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
                <el-button type="primary" @click="save">创建</el-button>
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