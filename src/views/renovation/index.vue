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
        <pg-operations :btns="operations" @add="add"></pg-operations>
        <pg-renovlist :list="decorationlist" @edit="edit" :selections="selectlist" @getDecEff="getDecorationEffects"></pg-renovlist>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="page" :page-size="pageSize" :total="total">
        </pg-pagination>
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" :selections="selectlist" @refresh="refresh"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .el-pagination {
        white-space: normal;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>