<template>
    <section>
        <el-col :span="24" class="toolbar">
            <el-button>批量删除</el-button>
            <el-button>+新增文章</el-button>
        </el-col>
        <pg-table :list="datalist" @edit="edit"></pg-table>
        <pg-edit :title="title" :show="isEdit" @close="closeEdit"></pg-edit>
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