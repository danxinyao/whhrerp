<template>
    <el-table :data="list" highlight-current-row v-loading="listLoading" style="width: 100%">
        <el-table-column fixed type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="文章名字" width="600">
        </el-table-column>
        <el-table-column fixed prop="date" label="建立的时间" width="200">
        </el-table-column>
        <el-table-column prop="clicks" label="点击数" width="100">
        </el-table-column>
        <el-table-column prop="collections" label="收藏数" width="100">
        </el-table-column>
        <el-table-column prop="comments" label="评论数" width="100">
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="100">
            <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, list)">编辑</el-button>
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