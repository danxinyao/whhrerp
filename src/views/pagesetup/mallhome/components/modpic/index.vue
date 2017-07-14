<template>
	<pg-dialog :style="small" title="修改图片" :isShow="show" @close="moddiaclose">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="  ">
                <!-- <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
                    <el-button size="small" type="primary">点击上传图片</el-button>
                </el-upload> -->
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog v-model="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="链接">
                <el-input v-model="form.link"></el-input>
            </el-form-item>
            <el-form-item>            
                <el-button type="primary">确 定</el-button>
                <el-button @click="moddiaclose">取 消</el-button>
            </el-form-item>
        </el-form>
    </pg-dialog>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>