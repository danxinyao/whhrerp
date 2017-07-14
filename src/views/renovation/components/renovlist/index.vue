<template>
    <el-row style="margin-top: 66px" :gutter="20">
        <el-col style="margin-bottom: 20px" :span="6" v-for="(item, index) in list">
            <el-card>
                <img :src="item.mainImageUrl" class="image">
                <div style="padding: 14px">
                    <span>{{item.name}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{item.createTime}}</time>
                        <el-button class="button" type="text" size="mini" @click="del(index, list)">删除</el-button>
                        <el-button class="button" type="text" size="mini" @click="handleEdit(index, list)">修改</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .time {
        font-size: 13px;
        color: #999;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .button {
        float: right;
        margin-left: 10px;
    }
    .image {
        width: 100%;
        max-width: 284px;
        height: 200px;
        display: block;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>