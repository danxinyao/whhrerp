<template>
    <el-table :data="list" highlight-current-row border v-loading="listLoading" style="width: 100%" @selection-change="selectChange">
        <el-table-column align="center" fixed="left" type="selection" width="55">
        </el-table-column>
        <el-table-column align="center" prop="name" label="商品名称" width="300">
           <template scope="scope">
                <img :src="scope.row.mainImageUrl" class="goodsimg">
                <div class="goodIfo">
                    <span class="name">{{scope.row.name}}</span>
                    <span class="customNo">编号:{{scope.row.customNo }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="title" label="商品标题" width="200">
            <template scope="scope">
                <a target="_blank" :href="scope.row.goodsUrl">{{scope.row.title}}</a>
            </template>
        </el-table-column>
        <el-table-column align="center" prop="merchantsName" label="商户" width="100">
        </el-table-column>
        <el-table-column align="center" prop="deptName" label="分类" width="200">
        </el-table-column>
        <el-table-column align="center" prop="salePrice" label="零售价" width="100">
        </el-table-column>
        <el-table-column align="center" prop="stockQty" label="库存" width="100">
        </el-table-column>
        <el-table-column align="center" prop="createTime" label="发布时间" width="180">
        </el-table-column>
        <el-table-column align="center" prop="" label="状态" width="100">
            <template scope="scope">
                <span v-if="scope.row.stockStatus === 1">已上架</span>
                <span v-if="scope.row.stockStatus === 0">已下架</span>
            </template>
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" min-width="150">
            <template scope="scope">
                <el-button size="small" type="text" @click="shelfGood(scope.$index, list)" v-if="scope.row.stockStatus ===1">下架</el-button>
                <el-button size="small" type="text" @click="shelfGood(scope.$index, list)" v-if="scope.row.stockStatus ===0">上架</el-button>
                <el-button size="small" type="text" @click="handleEdit(scope.$index, list)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<style rel="stylesheet/less" lang="less" scoped>
   .good {
        height: 80px;
   }
   .goodsimg {
        width: 60px;
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        margin: 10px 0;
        background: #F9FAFC;   
   }
   .goodIfo {
      display: inline-block;
      height: 40px;line-height: 40px;
      vertical-align: middle;margin-left: 5px;
   }
   .name {
        display: block;
        width: 180px;
        height: 20px;line-height: 20px;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
   }
   .customNo {
        display: block;
        height: 20px;line-height: 20px;
        margin-top: 5px;
   }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>