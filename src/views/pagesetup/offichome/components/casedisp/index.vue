<template>
    <div class="case_img">
    <div v-for="item in list">      
        <div class="case_top">
            <span class="top_left">{{ item.title }}</span>
        </div>
        <div class="case_middle clearfix">
                <div class="case_middle_img">
                    <img src=""> 
                    <div class="case_introd">
                        <p class="title">田园设计风格</p>
                    </div>
                    <el-button type="primary" size="mini" @click="showDialog">修改</el-button>
                </div>
                <div class="case_middle_img">
                    <img src="">  
                    <div class="case_introd">
                        <p class="title">田园设计风格</p>
                    </div>
                    <el-button type="primary" size="mini" @click="showDialog">修改</el-button>
                </div>
                <div class="case_middle_img">
                    <img src=""> 
                    <div class="case_introd">
                        <p class="title">田园设计风格</p>
                    </div>
                    <el-button type="primary" size="mini" @click="showDialog">修改</el-button>
                </div>
                <div class="case_middle_img recommendList">
                        <div class="recommendDesign">推荐设计师</div>
                        <ul class="recommend">
                        <li>
                           <div class="recommend_left">
                               <img src="http://dummyimage.com/60x60/4d494d/686a82.gif&text=placeholder+image"> 
                           </div>
                           <div class="recommend_right">
                               <div class="recommend_right_top">  设计师名字
                               </div>
                               <div class="recommend_right_buttom">  擅长***********设计
                               </div>
                           </div> 
                        </li>
                        <li>
                           <div class="recommend_left">
                               <img src="http://dummyimage.com/60x60/4d494d/686a82.gif&text=placeholder+image"> 
                           </div>
                           <div class="recommend_right">
                               <div class="recommend_right_top">  设计师名字
                               </div>
                               <div class="recommend_right_buttom">  擅长***********设计
                               </div>
                           </div> 
                        </li>
                        <li>
                           <div class="recommend_left">
                               <img src="http://dummyimage.com/60x60/4d494d/686a82.gif&text=placeholder+image"> 
                           </div>
                           <div class="recommend_right">
                               <div class="recommend_right_top">  设计师名字
                               </div>
                               <div class="recommend_right_buttom">  擅长***********设计
                               </div>
                           </div> 
                        </li>
                        <li>
                           <div class="recommend_left">
                               <img src="http://dummyimage.com/60x60/4d494d/686a82.gif&text=placeholder+image"> 
                           </div>
                           <div class="recommend_right">
                               <div class="recommend_right_top">  设计师名字
                               </div>
                               <div class="recommend_right_buttom">  擅长***********设计
                               </div>
                           </div> 
                        </li>
                    </ul>
                    <el-button type="primary" size="mini" @click="modifyDesigner">修改</el-button>
                </div>             
        </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
.clearfix:after { 
    clear: both; content: '.'; display: block; width: 0; height: 0; visibility: hidden;
}
.case_img {
    width:1190px;height: 530px;box-sizing: border-box;
}
.case_top {
    height: 79px;line-height: 79px;font-size: 28px;
} 
.case_middle_img {
    width: 285px;height: 450px;float: left;margin-right: 19px;position: relative;
}
.case_middle_img img {
  width: 285px;height: 400px;background: #D3DCE6;
}
.case_middle_img:nth-child(4){
    width: 275px;margin-right: 0px;
}
.recommendDesign {
    height: 80px;line-height: 80px;padding-left: 15px;font-size: 20px;
}
.recommend li {
    height: 80px;
}
.recommend_left {
    width: 60px;height:60px;border-radius:100%;overflow:hidden;float: left;
    margin-left: 15px;
}
.recommend_left img {
    width: 100%;
}
.case_middle_img .el-button {
    position: absolute; top: 0px;right: 0px;
}
.recommend_right {
    padding-left: 90px;
}
.recommend_right_top {
    margin-bottom: 10px;
}
.recommendList {
    border: 1px solid black;
}
.case_introd {
  height: 50px;line-height: 50px;background: #EFF2F7;box-sizing: border-box;
}
.case_introd p {
  margin: 0px;padding-left: 10px;
}
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>