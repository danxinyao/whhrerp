<template>
    <div class="mall_img">
    <div>      
        <div class="mall_top">    
            <span class="top_left">{{ mallForm.title }}</span>
        </div>
        <div class="mall_middle clearfix">
            <div class="middle_left">
                <img :src="mallForm.subPages[0].imageUrl">
                <el-button type="primary" size="mini" @click="showDialog(mallForm.subPages[0])">修改</el-button>
            </div>
            <div class="middle_right">
                <div class="middle_right_img1">
                    <img :src="mallForm.subPages[1].imageUrl"> 
                    <el-button type="primary" size="mini" @click="showDialog(mallForm.subPages[1])">修改</el-button>
                </div>
                <div class="middle_right_img2">
                    <img :src="mallForm.subPages[2].imageUrl"> 
                    <el-button type="primary" size="mini" @click="showDialog(mallForm.subPages[2])">修改</el-button>
                </div>
                <div class="middle_right_img3">
                    <img :src="mallForm.subPages[3].imageUrl"> 
                    <el-button type="primary" size="mini" @click="showDialog(mallForm.subPages[3])">修改</el-button>
                </div>
                <div class="middle_right_img4">
                    <img :src="mallForm.subPages[4].imageUrl"> 
                    <el-button type="primary" size="mini" @click="showDialog(mallForm.subPages[4])">修改</el-button>
                </div> 
                <div class="middle_right_img5">
                    <img :src="mallForm.subPages[5].imageUrl"> 
                    <el-button type="primary" size="mini" @click="showDialog(mallForm.subPages[5])">修改</el-button>
                </div>  
                <div class="middle_right_img6">
                    <img :src="mallForm.subPages[6].imageUrl"> 
                    <el-button type="primary" size="mini" @click="showDialog(mallForm.subPages[6])">修改</el-button>
                </div>                 
            </div>
        </div> 
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
   /*商城主页的图片样式*/
.clearfix:after { 
    clear: both; content: '.'; display: block; width: 0; height: 0; visibility: hidden;
}
.mall_img {  
  height: 560px;position: relative;
}
.mall_top {  
    height: 79px;line-height: 79px;font-size: 28px;
}
.mall_middle {
    height: 481px;position: relative;top: 0px;left: 0px;
}
.middle_left {
    position: absolute; left: 0px;top: 0px; width: 335px;height: 481px;background: #D3DCE6;
}
.middle_left .el-button {
    position: absolute; top: 0px;right: 0px;
}
.middle_right {
    position: absolute;left: 336px;top: 0px;
}
.middle_right_img1{
    width: 284px;height: 240px;position: absolute;left: 0px;background: #D3DCE6;
}
.middle_right_img1 .el-button {
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img2{
    width: 284px;height: 240px;position: absolute;left: 285px;background: #D3DCE6;
}
.middle_right_img2 .el-button {
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img3{
    width: 284px;height: 240px;position: absolute;left: 570px;background: #D3DCE6;
}
.middle_right_img3 .el-button {
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img4{
    width: 284px;height: 240px;position: absolute;left: 0px;top: 241px;background: #D3DCE6;
}
.middle_right_img4 .el-button {
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img5{
    width: 284px;height: 240px;position: absolute;left: 285px;top: 241px;background: #D3DCE6;
}
.middle_right_img5 .el-button {
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img6{
    width: 284px;height: 240px;position: absolute;left: 570px;top: 241px;background: #D3DCE6;
}
.middle_right_img6 .el-button {
    position: absolute; top: 0px;right: 0px;
} 
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>