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
        <div class="usercount">总用户数: {{userCount}}</div>
        <pg-table :list="userslist">
        </pg-table>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .usercount {
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