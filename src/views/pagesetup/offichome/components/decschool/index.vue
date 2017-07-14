<template>
    <div class="sch_img">
    <div v-for="item in list">      
        <div class="sch_top">
            <span class="top_left">{{ item.title }}</span>
        </div>
        <div class="sch_middle clearfix">
            <div class="sch_middle_left">
                <img src="">
                <el-button type="primary" size="mini" @click="showDialog">修改</el-button>
            </div>
            <div class="sch_middle_right">
                <div class="art" v-for="item in list2">
                    <div class="art_title">{{ item.arttitle }}</div>
                    <p class="art_content">{{ item.artcontent }}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    /*//案例展示的样式*/
.clearfix:after { 
    clear: both; content: '.'; display: block; width: 0; height: 0;line-height: 0px; visibility: hidden;
}
.sch_img {
    width:1190px;height: 580px;
}
.sch_top {
    height: 79px;line-height: 79px;font-size: 28px;
}
.sch_middle {
    position: relative;
}
.sch_middle .sch_middle_left {
    position: relative;width: 305px;height: 480px;display: inline-block;
    left: 0px;top: 0px;background: #D3DCE6;
}
.sch_middle .sch_middle_left .el-button {
    position: absolute;top: 0px;right: 0px;
}
.sch_middle .sch_middle_right {
    position:relative;display: inline-block;top: -350px;left: 0px;margin-left: 20px;
}
.sch_middle .sch_middle_right .art_title {
    font-size: 18px;
}
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>