<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column align="center" prop="createTime" label="开通时间" width="250">
        </el-table-column>
        <el-table-column align="center" prop="loginName" label="账号" width="250">
        </el-table-column>
        <el-table-column align="center" prop="roleName" label="角色" width="200">
        </el-table-column>
        <el-table-column align="center" label="操状态" min-width="200">
            <template scope="scope">
                <span size="small" v-if="scope.row.status ===0">已禁用</span>
                <span size="small" v-if="scope.row.status ===1">已启用</span>
            </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="300">
            <template scope="scope">
                <el-button size="mini" type="text" @click="handleEdit(scope.$index, list)">编辑</el-button>
                <el-button size="mini" type="text" v-if="scope.row.status !==0" @click="stopAndStartLogin(scope.$index, list)">禁用</el-button>
                <el-button size="mini" type="text" v-if="scope.row.status !==1" @click="stopAndStartLogin(scope.$index, list)">启用</el-button>
                <el-button size="mini" type="text" v-if="scope.row.status ===0" @click="del(scope.$index, list)">删除</el-button>
                <el-button size="mini" type="text" @click="editPass(scope.$index, list)">重置密码</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>