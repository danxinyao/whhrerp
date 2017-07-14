<template>
    <section>
        <pg-operations :btns="operations" @add="add" @del="del"></pg-operations>
        <!-- 表格 -->
        <pg-table :list="colors" @edit="edit" @select-change="selectChange">
        </pg-table>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="query.pageSize" :total="total"></pg-pagination>
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </section>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>