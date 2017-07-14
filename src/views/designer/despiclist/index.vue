<template>
    <section>
       <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <pg-operations :btns="operations" @add="add"></pg-operations>
        <pg-piclist @edit="edit" :list="datalist" @getDesDraw="getDesignerDraw"></pg-piclist>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>