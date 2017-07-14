<template>
    <div class="list">
        <p class="list-title">最近咨询客户</p>
        <el-table 
            :data="list" 
            highlight-current-row 
            v-loading="listLoading" 
            element-loading-text="加载中" 
            style="width: 350px" 
            border
            @current-change="handleCurrentChange">
            <el-table-column label="头像" width="100">
                <template scope="scope">
                    <el-badge :value="scope.row.userCount" class="item" >
                        <div class="head user">
                            <img :src="scope.row.userAvatar">
                        </div>
                    </el-badge>
                </template>
            </el-table-column>
            <el-table-column label="用户名" width="100">
                <template scope="scope">
                    <span>{{scope.row.userName}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="时间" width="200">
            </el-table-column>
            <el-table-column align="center" label="操作" width="200">
                <template scope="scope">
                    <el-button size="small" @click="remark(scope.$index, list)">备注</el-button>
                    <el-button size="small" @click="del(scope.$index, list)">删除记录</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .list {
        position: absolute;
        float: left;
        width: 350px;
    }
    .item {
        margin-top: 20px;
        .head {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            overflow: hidden;
        }
    }
    .user:hover {
        cursor: pointer;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>