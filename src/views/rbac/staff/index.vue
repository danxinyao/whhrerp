<template>
    <section>
        <pg-operations :btns="operations" @add="add"></pg-operations>
        <pg-table 
            :list="staffslist"
            @editPass="editPass"
            @edit="edit"
            @refresh="refresh"
            @stopAndStartLogin="stopAndStartLogin"
            @delAccount="del">
        </pg-table>
        <!-- 修改密码的对话框 -->
        <pg-dialog :style="small" :title="title" :isShow="showPass" @close="closePass">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="新密码" prop="passWord1">
                    <el-input type="password" v-model="form.passWord1"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="passWord2">
                    <el-input type="password" v-model="form.passWord2"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button @click="closePass">取消</el-button>
                </el-form-item>
            </el-form>
        </pg-dialog>
        <!-- 分页 -->
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
        <!-- 编辑弹出窗口 -->
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>       