 <template>
    <section class="clearfix" style="position: relative;">
        <pg-consultusers :list="userList" @getmsg="getmessage" @getMessUsers="getMessUsers" @refresh="refresh"></pg-consultusers>
        <div class="chat clearfix" v-show="showDia">
        <p class="list-title">客户名</p>
        <div class="relist search"  v-for="item in messagelist">                     
            <div class="box l" v-if="item.messageType === 0">
                <div class="time">{{item.createTime}}</div>
                <div class="head clearfix">
                    <div class="headimg">
                        <img :src="userAvatar">
                    </div>
                    <span class="uname">{{userName}}</span>
                </div>
                <div class="Content">
                   {{item.content}}
                </div>
            </div>
            <div class="box r" v-show="showreply"  v-if="item.messageType === 1">
                <div class="time">{{item.createTime}}</div>
                <div class="head clearfix">
                    <div class="headimg"></div>
                    <span class="uname">{{item.name}}</span>
                </div>
                <div class="content">       
                   {{item.content}}
                </div>
            </div>
        </div>
        <el-form ref="form">
            <el-form-item>
                <el-input type="textarea" :rows="4" v-model="replycontent" placeholder="请输入回复内容"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="reply">回复</el-button>
            </el-form-item>
        </el-form>
    </div>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .chat {
        position: absolute;
        margin-left: 370px;
        min-width: 600px;
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
                    overflow: hidden;
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