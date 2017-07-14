<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="账号" v-if="isEdit === true">
                <el-input v-model="form.loginName"  :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="开通账号" prop="loginName" v-else>
                <el-input v-model="form.loginName"></el-input>
            </el-form-item>
            <el-form-item label="初始密码" prop="passWord" v-if="isEdit === false">
                <el-input v-model="form.passWord"></el-input>
            </el-form-item>
            <el-form-item label="名字" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="mobile">
                <el-input v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="角色类型" prop="roleID">
                <el-select v-model="form.roleID" placeholder="请选择">
                    <el-option v-for="item in roleList" :label="item.name" :value="item.roleID"></el-option>
                </el-select>
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