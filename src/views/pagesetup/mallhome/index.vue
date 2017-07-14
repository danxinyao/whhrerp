<template>
    <section>
        <el-button @click="add" class="add_btn" type="primary" icon="plus">新增模块</el-button>
        <div class="con" v-for="item in shopList">
            <span class="parent_title">{{item.name}}</span>
            <el-button type="primary" icon="edit" size="mini" @click="editM(item)"></el-button>
            <el-button type="primary" icon="delete" size="mini" @click="del(item)"></el-button>
            <div class="box clearfix">
                <div class="left" v-if="subPage.orderNo === 1" v-for="(subPage, index) in item.subDefinePages">
                    <img class="cover" :src="subPage.imageUrl">
                    <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(subPage,335,481)">修改</el-button>
                </div>
                <div class="right">
                    <div class="ul clearfix" v-if="subPage.orderNo > 1" v-for="(subPage, index) in item.subDefinePages">
                        <img class="cover" :src="subPage.imageUrl">
                        <div class="mall_">
                            <!-- <span class="mall_title">{{subPage.name}}</span> -->
                            <!-- <span class="mall_note">{{subPage.note}}</span> -->
                        </div>
                        <el-button class="edit_btn" type="primary" icon="edit" size="mini" @click="edit(subPage,284,240)">修改</el-button>
                    </div>
                </div>
            </div>
        </div>
        <pg-edit :show="showEdit" :editForm="editForm" @close="closeEdit" @refresh="save" :size="size"></pg-edit>
        <pg-edit-name :title="editModuleTitle" :isEdit="isEditModule" :show="showEditModule" :editForm="editModuleForm" @close="closeEditModule" @save="saveEditModule"></pg-edit-name>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .add_btn {
        margin-top: 20px;
    }
    .parent_title {
        display: inline-block;
        padding-bottom: 20px;
        color: #637486;
        font-size: 16px;
        margin-top: 34px;
        &:before {
            display: inline-block;
            content: '\00a0';
            width: 6px;
            background: #cfd8f0;
            margin-right: 18px;
        }
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
    .con {
        text-align: left;
        .box {
            width: 1190px;
            height: 481px;
            .edit_btn {
                position: absolute;
                right: 0;
                top: 0;
            }
            .left {
                width: 335px;
                height: 481px;
                background: #f2f2f2;
                position: relative;
                float: left;
                .cover {
                    width: 100%;
                }
            }
            .right {
                float: left;
                width: 855px;
                height: 481px;
                .ul {
                    overflow: hidden;
                    margin-left: 1px;
                    margin-bottom: 1px;
                    background: #f2f2f2;
                    width: 284px;
                    height: 240px;
                    float: left;
                    position: relative;
                    .cover {
                        width: 100%;
                    }
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