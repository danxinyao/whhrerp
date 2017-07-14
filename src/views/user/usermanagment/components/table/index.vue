<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column align="center" prop="createTime" label="注册时间" width="250">
        </el-table-column>
        <el-table-column align="center" prop="" label="注册方式" width="100">
            <template scope="scope">
                <span v-if="scope.row.loginType === 0">账号</span>
                <span v-if="scope.row.loginType === 1">微信</span>
                <span v-if="scope.row.loginType === 2">QQ</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="name" label="用户名" width="100">
        </el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="150">
        </el-table-column>
        <el-table-column align="center" prop="weChat" label="微信昵称" width="150">
        </el-table-column>
        <el-table-column align="center" prop="qq" label="QQ昵称" width="150">
        </el-table-column>       
        <el-table-column align="center" prop="" label="地区" width="200">
            <template scope="scope">
                <div class="place">
                    <span class="reign" v-if="scope.row.stateName">{{scope.row.stateName}}</span>
                    <span class="reign" v-if="scope.row.cityName">{{scope.row.cityName}}</span>
                    <span v-if="scope.row.districtName">{{scope.row.districtName}}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="amount" label="消费金额" min-width="120">
        </el-table-column>
    </el-table>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
    .place{
        text-align: center;
    }
    .reign {
        padding-right: 5px;
    }
</style>