<template>
    <section>
        <!-- 表格 -->
        <pg-table 
            :list="subscribelist"
            @getSub="getSubscribes">
        </pg-table>
        <!-- 分页 -->
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .el-table {
        margin-top: 20px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>