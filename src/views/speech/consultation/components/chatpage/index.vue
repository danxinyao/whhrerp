<template>
    <div class="chat clearfix" v-show="show">
        <p class="list-title">客户名</p>
        <div class="relist search">
            <div class="box l" v-for="item in 5">
                <div class="time">10:34</div>
                <div class="head clearfix">
                    <div class="headimg"></div>
                    <span class="uname">fwer</span>
                </div>
                <div class="Content">
                   erwerwerwerwerwerwerqwrtertgf
                </div>
            </div>
            <div class="box r" v-for="item in 5" v-show="showreply">
                <div class="time">41656</div>
                <div class="head clearfix">
                    <div class="headimg"></div>
                    <span class="uname">hxc</span>
                </div>
                <div class="content">
                   efwaef 你放假而股票 嗜赌如命购入品郭敬明
                </div>
            </div>
        </div>
        <el-form ref="form">
            <el-form-item style="height: 90px;">
                <el-input type="textarea" :rows="4" v-model="replycontent"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="reply">回复</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .chat {
        position: absolute;
        margin-left: 370px;
        .box {
            padding: 20px 10px;
            .time {
                text-align: center;
                font-size: 14px;
                color: #999;
            }
            .head {
                padding: 10px 0;
                height: 40px;
                line-height: 40px;
                .headimg {
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    background: #ddd;
                    display: inline-block;
                }
                .uname {
                    display: inline-block;
                    color: #333333;
                    font-size: 18px;
                }
            }
            .content {
                color: #333;
                font-size: 16px;
                line-height: 1.6;
            }
        }

        .box.l {
            .head {
                .headimg {
                    float: left;
                }
                .uname {
                    float: left;
                    padding-left: 10px;
                }
            }
            .content {
                padding-left: 50px;
                padding-right: 50px;
            }
        }
        .box.r {
            .head {
                .headimg {
                    float: right;
                }
                .uname {
                    float: right;
                    padding-right: 10px;
                }
            }
            .content {
                padding-left: 50px;
                padding-right: 50px;
                text-align: right;
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