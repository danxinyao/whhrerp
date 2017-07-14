<template>
    <pg-dialog :title="title" :isShow="show" @close="close">
        <p class="list-title">{{editForm.label}}</p>
        <el-tag
            :key="tag"
            v-for="tag in tags"
            :closable="true"
            :close-transition="false"
            @close="handleClose(tag)">
            {{tag.name}}
        </el-tag>
        <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" type="primary" size="small" @click="showInput" icon="plus">添加</el-button>
    </pg-dialog>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .list-title {
        margin-top: 0;
    }
    .el-tag {
        margin-left: 10px;
    }
    .button-new-tag, .input-new-tag {
        margin-left: 5px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>