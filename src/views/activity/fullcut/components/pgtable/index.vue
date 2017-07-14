<template>
    <pg-dialog :size="'large'" title="添加商品" :isShow="showTable" @close="closeTable"> 
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
            <el-table :data="goodslist" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="商品名称" min-width="200">
                    <template scope="scope">
                        <img :src="scope.row.mainImageUrl" class="goodimg">
                        <div class="goodinfo">
                            <span class="goodName">{{ scope.row.name }}</span>
                            <span class="customNo">编号:{{ scope.row.customNo }}</span>
                        </div>
                    </template>           
                </el-table-column>  
                <el-table-column prop="salePrice" label="销售价" min-width="200">
                </el-table-column>
                <el-table-column prop="stockQty" label="商品库存" min-width="200">
                </el-table-column>
            </el-table>  
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" :total="total">
            </pg-pagination>  
            <div class="btn">
                <el-button type="primary" @click="addGoods">确认添加</el-button>
                <el-button @click="closeTable">取消</el-button>
            </div>
        </section>
    </pg-dialog>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
    .el-row .search {
        margin-top: 0px;
    }
    .btn {
        text-align: center;
        margin: 30px auto 30px auto;
    }
    .el-input__inner {
        width: 200px;
    }
    .goodimg {
        width: 60px;
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        margin: 10px 0;
        background: #F9FAFC;
    }
    .goodinfo {
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
        width: 200px;
    }
    .goodName {
        display: block;
    }
    .customNo {
        display: block;
    }
</style>