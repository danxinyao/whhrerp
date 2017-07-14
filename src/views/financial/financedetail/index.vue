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
        <div class="currentPay">
            <span class="amount">今日收入: ￥{{amount}}</span>
            <span class="weChatPay">微信收款: ￥{{weChatPay}}</span>
            <span class="aliPay">支付宝收款: ￥{{aliPay}}</span>
            <span class="refundAmount">总退款：<span style="color: #FF4949">￥{{refundAmount}}</span></span>
            <span class="sumAmount">总收入: <span style="color: #13CE66">￥{{sumAmount}}</span></span>
        </div>
        <pg-table 
            :list="datalist"
            >
        </pg-table>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .currentPay {
        line-height: 50px;
        font-size: 18px;
    }
    .amount {
        font-weight: bold;
        padding-right: 50px
    }
    .weChatPay ,.aliPay {
        padding-right: 50px       
    }
    .sumAmount {
       float: right;
       margin-right: 30px;
    }
    .refundAmount {
        float: right;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>