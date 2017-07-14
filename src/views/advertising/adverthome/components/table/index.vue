<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left"  type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" label="图片" width="500">
            <template scope="scope">
                <img :src="scope.row.imageUrl" height="100px">   
            </template>
        </el-table-column>
        <el-table-column align="center" label="移动" width="500">
            <template scope="scope">
                <div class="icon">
                    <el-button v-if="scope.$index !== 0" @click="arrowUp(scope.$index, list)">上移</el-button>
                    <el-button v-if="scope.$index !== (len - 1)" @click="arrowDown(scope.$index, list)">下移</el-button>
                </div>
            </template>
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="100">
            <template scope="scope">
                <el-button size="small" type="text" @click="handleEdit(scope.$index, list)">编辑</el-button>
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
    .icon {
        text-align: center;
    }
    .el-icon-arrow-up {
        display: block;
        margin-bottom: 5px;
    }
    .el-icon-arrow-down {
        display: block;
    }
</style>
