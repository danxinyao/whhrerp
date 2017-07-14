<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="" label="文章名字" width="350">
            <template scope="scope">
                <span v-if="scope.row.articleType ===0">[装修学堂]</span>
                <span v-else>[装修案例]</span>
                <span>{{scope.row.name}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="建立的时间" width="250">
        </el-table-column>
        <el-table-column align="center" prop="clickCount" label="点击数" width="150">
        </el-table-column>
        <el-table-column align="center" prop="favoritesCount" label="收藏数" width="150">
        </el-table-column>
        <el-table-column align="center" prop="commentCount" label="评论数" width="150">
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="120">
            <template scope="scope">
                <el-button size="small" type="text" @click="handleEdit(scope.$index, list)">编辑</el-button>
               <!--  <el-button size="small" @click="">推荐到首页</el-button> -->
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