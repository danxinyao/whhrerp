<template>
    <section>
    <div class="mall_img_home" v-show="showmall">
    <div v-for="(item,$index) in list" >      
        <div class="mall_top_home clearfix">    
            <span class="top_left">{{ item.title }}</span>
            <div class="top_right">
                <!-- <span>分类</span><span>分类</span>
                <span>分类</span><span>分类</span><span>分类</span> -->
                <span v-for="category in form.categoryList">{{category.name}}</span>
                <el-button type="primary" size="mini" @click="showDia">修改</el-button>
                <el-button type="primary" size="mini" @click="del($index)">删除</el-button>
            </div>
        </div>
        <div class="mall_middle_home clearfix">
            <div class="middle_left">
                <img src="">
                <el-button type="primary" size="mini" @click="showMod">修改</el-button>
            </div>
            <div class="middle_right_home">
                <div class="middle_right_img1">
                    <img src=""> 
                    <el-button type="primary" size="mini" @click="showMod">修改</el-button>
                </div>
                <div class="middle_right_img2">
                    <img src=""> 
                    <el-button type="primary" size="mini" @click="showMod">修改</el-button>
                </div>
                <div class="middle_right_img3">
                    <img src=""> 
                    <el-button type="primary" size="mini" @click="showMod">修改</el-button>
                </div>
                <div class="middle_right_img4">
                    <img src=""> 
                    <el-button type="primary" size="mini" @click="showMod">修改</el-button>
                </div> 
                <div class="middle_right_img5">
                    <img src=""> 
                    <el-button type="primary" size="mini" @click="showMod">修改</el-button>
                </div>
                <div class="middle_right_img6">
                    <img src=""> 
                    <el-button type="primary" size="mini" @click="showMod">修改</el-button>
                </div>                 
            </div>
        </div>
        </div>
    </div>
    <!-- 修改楼层名称的模块 -->
    <pg-dialog :style="small" title="修改模块" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="栏目名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div class="category" v-for="item in form.categoryList">
                <el-form-item label="分类名">
                    <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="  ">
                    <el-row>
                        <el-col :span="2">
                            <label >链接:</label>
                        </el-col>
                        <el-col :span="22">
                            <el-input v-model="item.link"></el-input>
                        </el-col>
                    </el-row>   
                </el-form-item>
            </div>
            <el-form-item label="  ">
                <el-button type="text" @click="addCategory">添加分类</el-button>
            </el-form-item>
            <el-form-item>            
                <el-button type="primary">确 定</el-button>
                <el-button @click="close">取 消</el-button>
            </el-form-item>
        </el-form>
    </pg-dialog>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
   /*商城主页的图片样式*/
.clearfix:after { 
    clear: both; content: '.'; display: block; width: 0; height: 0; visibility: hidden;
}
.mall_img_home {
  padding-top: 50px;
}

.mall_top_home {  
    height: 79px;line-height: 79px;position: relative;top: 0px;left: 0px;
}
.mall_top_home .top_left {
    font-size: 28px;
}
.mall_top_home .top_right {
    display: inline-block;float: right;
}
.mall_top_home .top_right span {
    display: inline-block; margin: 0 10px;
}
.mall_middle_home {
  
    height: 481px;position: relative;top: 0px;left: 0px;
}
.middle_left {
    
    position: absolute; left: 0px;top: 0px; width: 335px;height: 481px;background: #EFF2F7;
}
.middle_left .el-button {
 
    position: absolute; top: 0px;right: 0px;
}
.middle_right_home {
   
    position: absolute;left: 336px;top: 0px;
}
.middle_right_img1{
   
    width: 284px;height: 240px;position: absolute;left: 0px;background: #EFF2F7;
}
.middle_right_img1 .el-button {
   
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img2{
   
    width: 284px;height: 240px;position: absolute;left: 285px;background: #EFF2F7;
}
.middle_right_img2 .el-button {
   
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img3{
    
    width: 284px;height: 240px;position: absolute;left: 570px;background: #EFF2F7;
}
.middle_right_img3 .el-button {
  
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img4{
  
    width: 284px;height: 240px;position: absolute;left: 0px;top: 241px;background: #EFF2F7;
}
.middle_right_img4 .el-button {
   
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img5{
   
    width: 284px;height: 240px;position: absolute;left: 285px;top: 241px;background: #EFF2F7;
}
.middle_right_img5 .el-button {
   
    position: absolute; top: 0px;right: 0px;
}
.middle_right_img6{
  
    width: 284px;height: 240px;position: absolute;left: 570px;top: 241px;background: #EFF2F7;
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