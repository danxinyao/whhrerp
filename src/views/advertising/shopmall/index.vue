<template>
    <section>
        <pg-operations :btns="operations" @add="add" @del="del"></pg-operations>
        <pg-table 
            :list="datalist"
            :len="len"
            @select-change="selectChange"
            @edit="edit"
            @arrowDown="arrowDown"
            @arrowUp="arrowUp">
        </pg-table>
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