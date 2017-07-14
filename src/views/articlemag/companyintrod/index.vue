<template>
    <section>
        <pg-table :list="infoList" @edit="edit"></pg-table>
        <pg-edit :editForm="editForm" :show="isEdit" @close="closeEdit" @refresh="getCompanyInfos"></pg-edit>
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