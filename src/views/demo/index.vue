<template>
    <div>
        <div class="box clearfix">
            <div class="title">
                列表渲染
            </div>
            <pg-demo :title="title" :list="demoList"></pg-demo>
        </div>
        <div>
            <pg-editor ref="detailEditor" :init-content="initDetailContent"></pg-editor>
        </div>
        <div>
            <hr-region :styles="regionStyles" @changeRegions="changeRegions"></hr-region>
        </div>
        <div>
            <!-- 一张图 -->
            <span>一张图</span>
            <img-upload @upload-success="uploadSuccess"></img-upload>
        </div>
        <div>
             <!-- 多张图 -->
             <!-- 一张图 -->
            <span>多张图</span>
            <img-upload multiple @upload-success="multipleUploadSuccess"></img-upload>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .title {
        font-size: 30px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>