<template>
    <pg-dialog :style="small" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="类型">
                <el-radio-group v-model="form.decorationType">
                    <el-radio :label="0">家装</el-radio>
                    <el-radio :label="1">工装</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="标题" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <div v-show="form.decorationType == 0">
                <el-form-item label="户型">
                <el-select v-model="form.houseTypeID" placeholder="请选择">
                    <el-option v-for="item in selections.houseTypes" :label="item.name" :value="item.houseTypeID"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="风格">
                <el-select v-model="form.houseStyleID" placeholder="请选择">
                    <el-option v-for="item in selections.houseStyles" :label="item.name" :value="item.houseStyleID"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="面积">
                <el-select v-model="form.houseAreaID" placeholder="请选择">
                    <el-option v-for="item in selections.houseAreas" :label="item.name" :value="item.houseAreaID"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="空间">
                <el-select v-model="form.housePlaceID" placeholder="请选择">
                    <el-option v-for="item in selections.housePlaces" :label="item.name" :value="item.housePlaceID"></el-option>
                </el-select>
                </el-form-item>
            </div>
            <div v-show="form.decorationType == 1">
                <el-form-item label="场所">
                <el-select v-model="form.houseSiteID" placeholder="请选择">
                    <el-option v-for="item in selections.houseSites" :label="item.name" :value="item.houseSiteID"></el-option>
                </el-select>
                </el-form-item>
            </div>
            <el-form-item label="主图">
                <img-upload @upload-success="uploadSuccess" :files="mainFiles" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item label="副图片">
                <img-upload multiple  :files="subFiles" @upload-success="multipleUploadSuccess" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button @click="close">取消</el-button>
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
<style rel="stylesheet/less" lang="less">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .remind {
        color: red;
        font-size: 12px;
    }
</style>