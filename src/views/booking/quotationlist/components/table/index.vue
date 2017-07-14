<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%">
        <el-table-column align="center" prop="createTime" label="时间" width="180">
        </el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号" width="150">
        </el-table-column>
        <el-table-column align="center" label="城市" width="200">
                <template scope="scope">
                <div class="place">
                    <span class="reign" v-if="scope.row.stateName">{{scope.row.stateName}}</span>
                    <span class="reign" v-if="scope.row.cityName">{{scope.row.cityName}}</span>
                    <span v-if="scope.row.districtName">{{scope.row.districtName}}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="" label="房型面积" width="150">
            <template scope="scope">
                <span>{{scope.row.area}}</span>m<sup>2</sup>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="roomSize" label="户型" width="150">
        </el-table-column>
        <el-table-column align="center" prop="note" label="备注" min-width="150">
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="100">
            <template scope="scope">
                <el-button type="text" @click="remark(scope.$index,list)">备注</el-button>
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