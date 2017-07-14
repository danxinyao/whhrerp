<template>
<!--     <div class="piclist clearfix">
        <div v-for="(item,index) in list" class="piclist_img clearfix">      
            <div class="piclist_img_top">
                <img :src="item.mainImageUrl">
                <div>
                    <el-button type="primary" size="mini" @click="modify(index,list)">修改</el-button>
                    <el-button type="primary" icon="delete" size="mini" @click="del(index,list)"></el-button>
                </div>                
            </div>
            <div class="piclist_img_buttom clearfix">
                <div class="piclist_buttom_left">
                    <img :src="item.designerAvatar">
                </div>
                <div class="piclist_buttom_right">
                    <div class="title">{{item.designerName}}</div>
                    <div class="style">{{item.description}}&nbsp;|&nbsp;{{item.pictureCount}}张</div>
                </div>
            </div>
        </div>
    </div> -->
    <el-row style="margin-top: 66px" :gutter="20">
        <el-col style="margin-bottom: 20px" :span="6" v-for="(item, index) in list">
            <el-card>
                <img :src="item.mainImageUrl" class="image">
                <div style="padding: 14px">
                    <img class="avatar" :src="item.designerAvatar"><span class="name">{{item.designerName}}</span>
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
    .avatar {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        overflow: hidden;
    }
    .name {
        display: inline-block;
        vertical-align: top;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
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
   // .clearfix:after {
   //      clear: both;content: '.';display: block;width: 0px;height: 0px;visibility: hidden;
   // }
   // .piclist {
   //      margin-top: 20px;padding-top: 50px;width: 1190px;
   // }
   // .piclist_img {
   //      width: 284px;height: 285px;position: relative;
   //       margin-right: 12px;margin-bottom: 20px;display: inline-block;
   // }
   // .piclist_img_top {
   //      width: 284;height: 200px;
   // }
   // .piclist_img_top div {
   //      position: absolute;right: 0px;top: 0px;text-align: center;
   // }
   // .piclist_img_top div .el-button {
   //      display: inline-block;
   // }
   // .piclist_img_buttom {
   //      width: 284px;height: 85px;padding: 10px;background: #F9FAFC;box-sizing: border-box;
   // }
   // .piclist_buttom_left {
   //      width: 60px;height: 60px;float: left;border-radius: 100%;overflow: hidden;
   // }
   // .piclist_buttom_right {
   //    padding-left: 90px; height: 60px;width: 150px;
   // }
   // .piclist_buttom_right .title {
   //    padding: 5px 0px; 
   // }
   // .piclist_buttom_right .style {
   //    padding: 5px 0px; 
   // }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>