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
        <div class="merchantcount">总商户数: {{merchantcount}}</div>
        <pg-table 
            :list="merchantslist"
            @select-change="selectChange"
            @edit="edit">
        </pg-table>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .merchantcount {
        margin-bottom: 20px;
        margin-right: 20px;
        font-size: 16px;
        text-align: right;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>