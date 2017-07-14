<template>
    <el-table 
    :data="list" 
    highlight-current-row 
    border
    v-loading="listLoading" 
    style="width: 100%">
        <el-table-column align="center" prop="createTime" label="时间" width="250">
        </el-table-column>
        <el-table-column align="center" prop="user" label="用户" width="300">
            <template scope="scope">
                <img v-if="scope.row.userAvatar" :src="scope.row.userAvatar" class="userimg">
                <span>{{scope.row.userName ? scope.row.userName : '匿名用户'}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="250">
        </el-table-column>
        <el-table-column align="center" prop="message" label="用户反馈内容" width="440">
        </el-table-column>
    </el-table>
</template>
<style type="text/css">
    .userimg {
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        padding: 10px 0;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>