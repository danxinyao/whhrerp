<template>
    <section>
        <pg-operations :btns="operations" @del="del" @add="add"></pg-operations>
        <pg-table 
            :list="rolelist"
            @select-change="selectChange"
            @edit="edit">
        </pg-table>
        <!-- 分页 -->
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
        <!-- 编辑弹出窗口 -->
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