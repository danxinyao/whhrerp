<template>
    <section>
        <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <pg-operations :btns="operations" @add="add" @del="del"></pg-operations>
        <br>
        <el-tabs class="com_tabs" v-model="activeIndex" type="card" @tab-click="handleClick">
            <el-tab-pane name="-1" label="全部">全部</el-tab-pane>
            <el-tab-pane name="1" label="出售中">出售中</el-tab-pane>
            <el-tab-pane name="0" label="仓库">仓库</el-tab-pane>
        </el-tabs>
        <pg-table 
            :list="goodslist"
            @select-change="selectChange"
            @edit="edit"
            @getGoods="getGood">
        </pg-table>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @getGoods="getGood"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less">
    @import '~assets/styles/_variables';
    .el-tabs__content {
        display: none;
    }
    .el-tabs__nav-prev, .el-tabs__nav-next {
        display: none;
    }
    .el-tabs__nav-wrap.is-scrollable {
        padding: 0;
    }
    .com_tabs {
        margin-top: 50px;
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