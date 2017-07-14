<template>
    <el-table 
    :data="list" 
    highlight-current-row 
    border
    v-loading="listLoading" 
    style="width: 100%">
        <el-table-column align="center" prop="createTime" label="时间" width="200">
        </el-table-column>
        <el-table-column align="center" label="用户" width="250">
            <template scope="scope">
                <img :src="scope.row.userAvatar" class="userimg">
                <span v-text="scope.row.userName">{{userName}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="message" label="内容" width="300">
        </el-table-column>
        <el-table-column align="center" prop="" label="评论出处" width="200">
            <template scope="scope">
                <span v-if="scope.row.messageBoardType ===1">{{scope.row.messageBoardDataInfo}}(装修效果)</span>
                <span v-if="scope.row.messageBoardType ===2">{{scope.row.messageBoardDataInfo}}(设计师图)</span>
                <span v-if="scope.row.messageBoardType ===3">{{scope.row.messageBoardDataInfo}}(装修学堂)</span>
                <span v-if="scope.row.messageBoardType ===4">{{scope.row.messageBoardDataInfo}}(商品)</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="状态" width="130">
            <template scope="scope">
                <span v-if="scope.row.status ===0">新建</span>
                <span v-if="scope.row.status ===100">审核通过</span>
                <span v-if="scope.row.status ===95">删除</span>
                <span v-if="scope.row.status ===97">屏蔽</span>
            </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="150">
            <template scope="scope">
                <el-button size="small" type="text" @click="auditing(scope.$index,list)" v-if="scope.row.status == 100" :disabled="true">审核通过</el-button>
                <el-button size="small" type="text" @click="auditing(scope.$index,list)" v-else>审核通过</el-button>
                <el-button size="small" type="text" @click="shield(scope.$index,list)" v-if="scope.row.status == 97" :disabled="true">屏蔽</el-button>
                <el-button size="small" type="text" @click="shield(scope.$index,list)" v-else>屏蔽</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .userimg {
        width: 60px;
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        margin: 10px 0;
        background: #F9FAFC;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>