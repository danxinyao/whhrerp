<template>
    <section>
        <pg-operations :btns="operations" @add="add" @del="del"></pg-operations>
        <pg-table 
            :list="datalist"
            :len="len"
            @select-change="selectChange"
            @edit="edit"
            @arrowUp="arrowUp"
            @arrowDown="arrowDown">
        </pg-table>
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