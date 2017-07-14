<template>
    <section>
        <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :reset-form="resetForm"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <el-tabs type="card" @tab-click="handleClick">
            <el-tab-pane label="全部">
            </el-tab-pane>
            <el-tab-pane label="待付款">
            </el-tab-pane>
            <el-tab-pane label="待发货">
            </el-tab-pane>
            <el-tab-pane label="待收货">
            </el-tab-pane>
            <!-- <el-tab-pane label="处理退款">
            </el-tab-pane> -->
        </el-tabs>
        <pg-table 
            :list="orderslist" border
            @edit="edit"
            @detail="detail"
        >
        </pg-table>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
        <pg-edit :title="title" :show="isEdit" @close="closeEdit" :mallOrder="mallOrder" @refresh="refresh" :types="type"></pg-edit>
        <pg-detail :isdetail="showdetail" @closeDetial="closedetail" :mall="mall"></pg-detail>
    </section>
</template>
<style rel="stylesheet/less" lang="less">
    @import '~assets/styles/_variables';
    .el-tabs--border-card > .el-tabs__content {
        padding: 0;
    }
    .el-tabs__header {
        margin: 0;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>       