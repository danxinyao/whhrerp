<template>
    <pg-dialog size="large" :title="title" :isShow="show" @close="close">
        <el-form ref="form" :model="form" label-width="90px" :rules="rules">
            <el-form-item label="商户" prop="merchantsID">
                <el-select v-model="form.merchantsID" placeholder="请选择">
                    <el-option
                    v-for="item in merchantList"
                    :label="item.name"
                    :value="item.merchantsID">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品名" prop="name">
                <el-input v-model="form.name" placeholder="请输入商品的标题(必填)" required></el-input>
            </el-form-item>
            <el-form-item label="商品标题" prop="title">
                <el-input v-model="form.title" placeholder="为该采购单取个标题(必填)" required></el-input>
            </el-form-item>
            <el-form-item label="商品单位">
                <el-input v-model="form.unit"></el-input>
            </el-form-item>
            <el-form-item label="商品品牌">
                <el-input v-model="form.brand"></el-input>
            </el-form-item>
            <el-form-item label="选择类目" prop="deptID">
                <el-cascader
                    expand-trigger="hover"
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange">
                </el-cascader>
            </el-form-item>
            <p class="list-title">商品属性</p>
            <el-form-item label="">
                <div v-for="item in form.goodsProperties">
                    <el-row>
                        <el-col :span="2">{{item.propertyName}}</el-col>
                        <el-col :span="10">
                            <el-input v-model="item.data"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </el-form-item>
            <p class="list-title">现货类型</p>
            <el-button style="margin-bottom: 15px" type="primary" size="small" @click="addGoodsType">新增</el-button>
            <el-table
                :data="form.barCodes"
                border
                style="width: 100%"
                ref="table">
                <el-table-column
                    resizable
                    fixed
                    width="100">
                    <template scope="scope">
                        <el-button type="primary" size="mini" icon="delete" @click="delGoodsType(scope.$index, list)"></el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="颜色"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-select v-model="scope.row.colorID" filterable placeholder="请选择">
                            <el-option
                                v-for="item in colors"
                                :label="item.name"
                                :value="item.colorID">
                            </el-option>
                        </el-select>
                        <!-- <el-autocomplete v-model="color" placeholder="请输入" @select="selectColor" :fetch-suggestions="searchColor"></el-autocomplete> -->
                    </template>
                </el-table-column>
                <el-table-column
                    label="规格"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-select v-model="scope.row.sizeID" filterable placeholder="请选择">
                            <el-option
                                v-for="item in sizes"
                                :label="item.name"
                                :value="item.sizeID">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                    label="库存量"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.stockQty"></el-input><template slot="append">件</template>
                    </template>
                </el-table-column>
                <el-table-column
                    label="售价"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.salePrice"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="市场价"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.marketPrice"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="编码"
                    resizable
                    min-width="150">
                    <template scope="scope">
                        <el-input v-model="scope.row.customBC"></el-input>
                    </template>
                </el-table-column>
            </el-table>
            <el-form-item label="上传主图">
                <img-upload :files="mainFiles" @upload-success="uploadSuccess" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item label="上传副图">
                <img-upload multiple :files="subFiles" @upload-success="multipleUploadSuccess" :tip="imgSize"></img-upload>
            </el-form-item>
            <el-form-item label="图文详情">
                <pg-editor ref="contentEditor" v-model="form.goodsInfo.content" :init-content="content"></pg-editor>
            </el-form-item>
            <el-form-item label="送货入户">
                <el-radio-group v-model="form.installFee">
                    <el-row>
                        <el-col :span="5">
                            <el-radio :label="0">免费</el-radio>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">
                            <el-radio :label="installFeeTemp">收取</el-radio>
                        </el-col>
                        <el-col :span="10">
                            <el-input v-model="installFeeTemp" size="mini">
                                <template slot="append">元</template>
                            </el-input>
                        </el-col>
                    </el-row>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="状态">
                <el-radio-group v-model="form.stockStatus">
                    <el-radio :label="1">上架</el-radio>
                    <el-radio :label="0">下架</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
                <el-button @click="close">取消</el-button>
            </el-form-item>
        </el-form>
    </pg-dialog>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .el-row {
        margin-top: 10px;
    }
    .remind {
        color: red;
        font-size: 12px;
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
