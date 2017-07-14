<template>
    <el-table 
        :data="list" 
        highlight-current-row 
        v-loading="listLoading" 
        element-loading-text="加载中" 
        style="width: 100%" 
        border 
        >
        <el-table-column align="center" prop="createTime" label="申请时间" width="180">
        </el-table-column>
        <el-table-column align="center" prop="name" label="名字" width="100">
        </el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="150">
        </el-table-column>
        <el-table-column align="center" prop="company" label="公司名" width="150">
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
        <el-table-column align="center" label="类型" width="100">
            <template scope="scope">
                <div class="place">
                    <span class="reign" v-if="scope.row.merchantsType === 1">厂家</span>
                    <span class="reign" v-if="scope.row.merchantsType === 2">代理商</span>
                    <span v-if="scope.row.merchantsType === 3">经销商</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="brand" label="品牌" width="120">
        </el-table-column>
        <el-table-column align="center" prop="note" label="备注" min-width="120">
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="100">
            <template scope="scope">
                <el-button size="small" type="text" @click="remark(scope.$index,list)">备注</el-button>
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
<style rel="stylesheet/less" lang="less" scoped>
    .place{
        text-align: center;
    }
    .reign {
        padding-right: 5px;
    }
</style>