<template>
    <section>
        <pg-operations :btns="operations" @add="add" @del="del"></pg-operations>
        <pg-table
            :list="datalist"
            :len="len"
            @select-change="selectChange"
            @arrowUp="arrowUp"
            @arrowDown="arrowDown"
            @edit="edit">
        </pg-table>
        <pg-edit :title="title" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </section>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>