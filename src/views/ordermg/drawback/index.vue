<template>
    <section>
        <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <pg-table 
            :list="datalist"    
            @agree="agree"
            @refuse="refuse"
            @receiptAndRefund="receiptAndRefund"
            @showBigImg="showBigImg">
        </pg-table>
        <!-- 同意退款的对话框 -->
        <pg-dialog :style="small" :title="填写退款地址" :isShow="show" @close="close">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="收货人" prop="linkMan">
                    <el-input v-model="form.linkMan" placeholder="请输入收货人的名字"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="form.phone" placeholder="请输入收货人的联系方式"></el-input>
                </el-form-item>
                <el-form-item label="城市" required prop="district">
                    <hr-region @changeRegions="changeRegions"></hr-region>
                </el-form-item>
                <el-form-item label="详细地址" prop="address">
                    <el-input v-model="form.address" placeholder="请输入详细的收货地址"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button @click="close">取消</el-button>
                </el-form-item>
            </el-form>
        </pg-dialog>
        <!-- 拒绝退款的对话框 -->
        <pg-dialog :style="small" :title="说明拒绝理由" :isShow="showDia" @close="closeDia">
            <el-form ref="form2" :model="form2" label-width="80px" :rules="rule2">
                <el-form-item label="理由:" prop="sellMemo">
                    <el-input type="textarea" v-model="form2.sellMemo" placeholder="请输入拒绝退款的原因"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="save">保存</el-button>
                    <el-button @click="closeDia">取消</el-button>
                </el-form-item>
            </el-form>
        </pg-dialog>
        <el-dialog v-model="isShowBigImg" size="tiny">
            <img width="100%" :src="bigImg">
        </el-dialog>
        <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
        </pg-pagination>
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