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
        <pg-operations :btns="operations" @del="del" @add="add"></pg-operations>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">全部</el-menu-item>
          <el-menu-item index="2">未开始</el-menu-item>
          <el-menu-item index="3">进行中</el-menu-item>
          <el-menu-item index="4">已结束</el-menu-item>
        </el-menu>
        <pg-table :list="discountlist" @select-change="selectChange" @edit="edit">
        </pg-table>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="page" :page-size="pageSize" :total="total">
        </pg-pagination>
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @tableShow="showTable" :goods="goods" @refresh="refresh"></pg-edit>
        <pgtable title="添加商品" :showTable="isTable" @closeTable="closeTable" @selectGoods="selectGoods"></pgtable>
    </section>
</template>
<style rel="stylesheet/less" lang="less">
    @import '~assets/styles/_variables';
    .el-menu:after, .el-menu:before {
        display: none;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>