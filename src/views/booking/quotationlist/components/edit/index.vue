<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="日期">
                <el-input v-model="form.date"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="所在的城市">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="房型面积">
                <el-input v-model="form.roomarea"></el-input>
            </el-form-item>
            <el-form-item label="户型">
                <el-input v-model="form.housetype"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.note"></el-input>
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