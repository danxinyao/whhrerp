<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="时间" width="220">
        </el-table-column>
        <el-table-column align="center" prop="name" label="姓名" width="130">
        </el-table-column>
        <el-table-column align="center" prop="description" label="简介" width="450">
        </el-table-column>
        <el-table-column align="center" prop="imgLibCount" label="图库数量" width="140">
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="200">
            <template scope="scope">
                <el-button size="small" type="text" @click="handleEdit(scope.$index, list)">编辑</el-button>
                <el-button size="small" type="text" v-if="scope.row.recommendedFlag === 0" @click="recommend(scope.$index, list)">推荐到首页</el-button>
                <el-button size="small" type="text" v-if="scope.row.recommendedFlag === 1" @click="recommend(scope.$index, list)">取 消 推 荐</el-button>
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