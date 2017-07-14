<template>
    <div class="dec_img">
    <div>      
        <span class="dec_top">{{form.title}}</span>
        <div class="dec_middle">
            <div class="dec_middle_left"  v-if="form.subPages[0] != null">
                <img :src="form.subPages[0].imageUrl">
                <div class="dec_introd introd">
                    <p class="title">{{form.subPages[0].name}}</p>
                    <p>{{form.subPages[0].title}}</p>
                </div>
                <el-button type="primary" size="mini" @click="showDialog(form.subPages[0])">修改</el-button>
            </div>
            <div class="dec_middle_right">
                    <div class="dec_middle_right1" v-if="form.subPages[1]!= null">
                        <img :src="form.subPages[1].imageUrl"> 
                        <div class="dec_introd">
                        <p class="title">{{form.subPages[1].name}}</p>
                        </div>
                        <el-button type="primary" size="mini" @click="showDialog(form.subPages[1])">修改</el-button>
                    </div>
                    <div class="dec_middle_right2" v-if="form.subPages[2] != null">
                        <img :src="form.subPages[2].imageUrl"> 
                        <div class="dec_introd">
                        <p class="title">{{form.subPages[2].name}}</p>
                        </div>
                        <el-button type="primary" size="mini" @click="showDialog(form.subPages[2])">修改</el-button>
                    </div>
                    <div class="dec_middle_right3" v-if="form.subPages[3] != null">
                        <img :src="form.subPages[3].imageUrl"> 
                        <div class="dec_introd">
                        <p class="title">{{form.subPages[3].name}}</p>
                        </div>
                        <el-button type="primary" size="mini" @click="showDialog(form.subPages[3])">修改</el-button>
                    </div>
                    <div class="dec_middle_right4" v-if="form.subPages[4] != null">
                        <img :src="form.subPages[4].imageUrl"> 
                        <div class="dec_introd">
                        <p class="title">{{form.subPages[4].name}}</p>
                        </div>
                        <el-button type="primary" size="mini" @click="showDialog(form.subPages[4])">修改</el-button>
                    </div>                 
                    <div class="dec_middle_right5" v-if="form.subPages[5] != null">
                        <img :src="form.subPages[5].imageUrl"> 
                        <div class="dec_introd">
                        <p class="title">{ form.subPages[5].name}}</p>
                        </div>
                        <el-button type="primary" size="mini" @click="showDialog(form.subPages[5])">修改</el-button>
                    </div>          
                </div>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
   /* // 装修效果图的样式*/ 
.dec_img {
    width:1190px;
}
.dec_top {
    font-size:28px;display: inline-block;line-height: 80px;height: 80px;
}
.dec_middle {
    width: 1190px;height: 580px;position: relative;left: 0px;top: 0px;
}
.dec_middle_left {
    width: 320px;position: absolute;display: inline-block;left: 0px;top: 0px;box-sizing:border-box;
}
.dec_middle_left img {
    width: 320px;height: 480px;background: #D3DCE6;
}
.dec_introd .dec_introd {
    height: 100px;background: #EFF2F7;
}
.dec_introd .el-button {
    position: absolute;top: 0px;right: 0px;
}
.dec_middle_right {
    width: 850px;position: absolute;display: inline-block;left: 340px;top: 0px;
}
.dec_middle_right1 {
    position: absolute;left: 0px;top: 0px;width: 600px;box-sizing: border-box;
}
.dec_middle_right1 img {
    width: 600px;height: 230px;background: #D3DCE6;
}
.dec_middle_right2 {
    position: absolute;left: 620px;top: 0px;
    width: 230px;box-sizing: border-box;
}
.dec_middle_right2 img ,.dec_middle_right5 img {
    width: 230px;height: 230px;background: #D3DCE6;
}
.dec_middle_right3 {
    position: absolute;left: 0px;top: 300px;
    width: 290px;box-sizing: border-box;
}
.dec_middle_right3 img ,.dec_middle_right4 img {
    width: 290px;height: 230px;background: #D3DCE6;
}
.dec_middle_right4 {
    position: absolute;left: 310px;top: 300px;
    width: 290px;box-sizing: border-box;
}
.dec_middle_right5 {
    position: absolute;left: 620px;top: 300px;
    width: 230px;box-sizing: border-box;
}
.dec_img .el-button {
    position: absolute;top: 0px;right: 0px;
}
.dec_img .dec_introd p {
    margin: 0px;padding-left:10px;
}
.dec_img .dec_introd{
    background: #EFF2F7;height: 50px;box-sizing: border-box;line-height: 50px;
}
.dec_img .introd {
    height: 100px;box-sizing: border-box;
}
.dec_img .introd .title {
    font-size: 28px;
}
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>