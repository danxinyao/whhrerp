<template>
    <section>
        <div class="con">
            <div class="page1" v-if="item.orderNo === 1" v-for="item in homeList">
                <h2 class="parent_title">{{item.name}}</h2>
                <div class="box" v-for="sub in item.subDefinePages">
                    <img class="cover" :src="sub.imageUrl">
                    <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,1190,'高不限')">修改</el-button>
                </div>
            </div>
            <div class="page2" v-if="item.orderNo === 2" v-for="item in homeList">
                <h2 class="parent_title">{{item.name}}</h2>
                <div class="box clearfix" v-if="sub.orderNo === 1" v-for="sub in item.subDefinePages">
                    <div class="left">
                        <img class="cover" :src="sub.imageUrl">
                        <span class="sub_title">
                            <h2>{{sub.name}}</h2>
                            <p class="small">{{sub.note}}</p>
                        </span>
                        <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,320,480)">修改</el-button>
                    </div>
                    <div class="right">
                        <div class="ul clearfix" :class="['p' + sub.orderNo]" v-if="sub.orderNo > 1" v-for="sub in item.subDefinePages">
                            <img class="cover" :src="sub.imageUrl">
                            <span class="sub_title">{{sub.name}}</span>
                            <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,600,230)" v-if="sub.orderNo === 2">修改</el-button>
                            <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,230,230)" v-if="sub.orderNo === 3 ||sub.orderNo === 6">修改</el-button>
                            <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,290,230)" v-if="sub.orderNo === 4 ||sub.orderNo === 5">修改</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page3" v-if="item.orderNo === 3" v-for="item in homeList">
                <h2 class="parent_title">{{item.name}}</h2>
                <div class="box clearfix" v-if="sub.orderNo === 1" v-for="sub in item.subDefinePages">
                    <div class="left">
                        <img class="cover" :src="sub.imageUrl">
                        <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,335,481)">修改</el-button>
                    </div>
                    <div class="right">
                        <div class="ul clearfix" v-if="sub.orderNo > 1" v-for="sub in item.subDefinePages">
                            <img class="cover" :src="sub.imageUrl">
                            <div class="mall_">
                                <span class="mall_title">{{sub.name}}</span>
                                <span class="mall_note">{{sub.note}}</span>
                            </div>
                            <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,284,240)">修改</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page4" v-if="item.orderNo === 4" v-for="item in homeList">
                <h2 class="parent_title">{{item.name}}</h2>
                <div class="box clearfix">
                    <div class="ul" v-for="sub in item.subDefinePages">
                        <img class="cover" :src="sub.imageUrl">
                        <span class="sub_title">{{sub.name}}</span>
                        <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,285,400)">修改</el-button>
                    </div>
                </div>
            </div>
            <div class="page5" v-if="item.orderNo === 5" v-for="item in homeList">
                <h2 class="parent_title">{{item.name}}</h2>
                <div class="box clearfix" v-if="sub.orderNo === 1" v-for="sub in item.subDefinePages">
                    <div class="left">
                        <img class="cover" :src="sub.imageUrl">
                        <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(sub,285,350)">修改</el-button>
                    </div>
                </div>
            </div>
        </div>
        <pg-edit :show="showEdit" :editForm="editForm" @close="closeEdit" @refresh="save" :size="size"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .con {
        .edit_btn {
            position: absolute;
            right: 0;
            top: 0;
        }
        .left {
            position: relative;
            float: left;
            background: #f2f2f2;
        }
        .right {
            float: left;
        }
        .cover {
            width: 100%;
        }
        .sub_title {
            display: block;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 10px;
            color: #fff;
            background: rgba(0, 0, 0, 0.6)
        }
        .mall_ {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 10px;
            .mall_title {
                display: block;
                font-size: 14px;
                color: #333;
                padding-bottom: 10px;
            }
            .mall_note {
                display: block;
                font-size: 18px;
                color: #e70012;
            }
        }
        .ul {
            float: left;
            background: #f2f2f2;
            position: relative;
            overflow: hidden;
        }
        .page1 {
            .box {
                width: 1190px;
                height: 124px;
                position: relative;
                background: #f2f2f2;
                overflow: hidden;
            }
        }
        .page2 {
            position: relative;
            .box {
                position: relative;
                width: 1190px;
                height: 480px;
            }
            .left {
                width: 320px;
                height: 480px;
            }
            .p2 {
                position: absolute;
                width: 600px;
                height: 230px;
                left: 340px;
                top: 0;
            }
            .p3, .p6 {
                position: absolute;
                width: 230px;
                height: 230px;
            }
            .p4, .p5 {
                width: 290px;
                height: 230px;
                position: absolute;
            }
            .p3 {
                left: 960px;
                top: 0;
            }
            .p4 {
                left: 340px;
                top: 250px;
            }
            .p5 {
                left: 650px;
                top: 250px;
            }
            .p6 {
                left: 960px;
                top: 250px;
            }
        }
        .page3 {
            .box {
                width: 1190px;
                height: 481px;
                .left {
                    width: 335px;
                    height: 481px;
                }
                .right {
                    float: left;
                    width: 855px;
                    height: 481px;
                    .ul {
                        .cover {
                            height: 170px;
                        }
                        margin-left: 1px;
                        margin-bottom: 1px;
                        width: 284px;
                        height: 240px;
                    }
                }
            }
        }
        .page4 {
            .box {
                width: 1190px;
                height: 400px;
                .ul {
                    width: 285px;
                    height: 400px;
                    margin-right: 20px;
                }
            }
        }
        .page5 {
            .box {
                width: 1190px;
                height: 350px;
                .left {
                    width: 285px;
                    height: 350px;
                }
            }
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>