<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="预约时间">
                <el-input v-model="form.createTime"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="所在的城市">
                <el-input v-model="form.state" placeholder="请输入省份"></el-input>
                <el-input v-model="form.city" placeholder="请输入城市"></el-input>
                <el-input v-model="form.district" placeholder="请输入区"></el-input>
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