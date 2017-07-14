import {merchant as ajax} from 'services'
import {homePage as ajs} from 'services'
import {property as ajaxs} from 'services'
import { cloneDeep } from 'lodash'
import {goods as aj} from 'services'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: {}
    },
    data() {
        return {
            form: {},
            installFeeTemp: 1,
            initForm: {
                deptName: '',
                merchantsID: '',
                title: '',
                name: '',
                salePrice: '',
                brand: '',
                goodsInfo: {
                    content: ''
                },
                deptID: '',
                goodsProperties: [],
                properties: '',
                installFee: 0,
                barCodes: [],
                mainImageUrl: '',
                subImageUrls: [],
                stockStatus: 1
            },
            tempGoodsProperties: [],
            tempDeptID: '',
            merchantList: [],
            options: [],
            selectedOptions: [],
            colors: [],
            sizes: [],
            color: '',
            size: '',
            goodsInfo: '',
            barCode:{
				    barCodeID: "",
				    goodsID: "",
				    sizeID: "",
				    colorID: "",
				    customBC: "",
				    stockQty: 0,
				    marketPrice: 0,
				    salePrice: 0               	
            },
            mainFiles: [],
            subFiles: [],
            rules: {
                name: [
                    { required: true, message: '请输入商品名', trigger: 'blur' },
                ],
                title: [
                    { required: true, message: '请输入商品标题', trigger: 'blur' },
                ],
                deptID: [
                    { required: true, message: '请选择类目', trigger: 'blur' },
                ],
                merchantsID: [
                    { required: true, message: '请选择商户', trigger: 'blur' },
                ],
            },
            content: '',
            imgSize: '800*800'
        }
    },
    mounted() {
        this.getmerchantList()
        this.getThreeDept()
        this.getSizes()
        this.getColors()
        this.setInitContent()
    },
    watch: {
        installFeeTemp() {
            if (this.installFeeTemp === 0 || this.installFeeTemp == '') {
                this.form.installFee = 0
            }
            else {
                this.form.installFee = this.installFeeTemp
            }
        },
        'form.installFee'() {
            if (this.form.installFee) {

            }  
        },
        editForm() {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.$nextTick(() => {
                    this.tempDeptID = cloneDeep(this.form.deptID)
                    this.tempGoodsProperties = cloneDeep(this.form.goodsProperties)
                    if (this.form.installFee) {
                        this.installFeeTemp = parseInt(this.form.installFee)
                    }
                    if (this.form.mainImageUrl && this.form.mainImageUrl != '') {
                        this.mainFiles = []
                        this.mainFiles.push(this.form.mainImageUrl)
                    }
                    if (this.form.subImageUrls.length > 0) {
                        this.subFiles = this.form.subImageUrls
                    }
                    this.initDept()
                })
            }
            else {
                this.resetForm()
            }

            this.setInitContent()
        }
    },
    created() {
        this.setForm()
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.mainFiles = []
            this.subFiles = []
            this.tempGoodsProperties = []
            this.tempDeptID = ''
            this.selectedOptions = []
        },
        setInitContent() {
            if (this.form.goodsInfo.content) {
                this.content = this.form.goodsInfo.content
            }
            else {
                this.content = ''
            }
            
            this.$nextTick(() => {
                if (this.$refs.contentEditor) {
                    this.$refs.contentEditor.updateEditor()
                }
            })
        },
        initDept() {
            let deptID1 = ''
            let deptID2 = ''
            let isSure = false
            this.options.forEach((item) => {
                if (item.children && item.children.length > 0) {
                    item.children.forEach((item2) => {
                        if (item2.children && item2.children.length > 0) {
                            item2.children.forEach((item3) => {
                                if (item3.value == this.form.deptID) {
                                    isSure = true
                                    deptID1 = item.value
                                    deptID2 = item2.value
                                }
                            })
                        }
                    })
                }
            })

            if (isSure) {
                this.selectedOptions = [deptID1, deptID2, this.form.deptID]
            }
        },
        setForm() {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.$nextTick(() => {
                    this.tempDeptID = cloneDeep(this.form.deptID)
                    this.tempGoodsProperties = cloneDeep(this.form.goodsProperties)
                    if (this.form.installFee) {
                        this.installFeeTemp = parseInt(this.form.installFee)
                    }
                    if (this.form.mainImageUrl && this.form.mainImageUrl != '') {
                        this.mainFiles = []
                        this.mainFiles.push(this.form.mainImageUrl)
                    }
                    if (this.form.subImageUrls.length > 0) {
                        this.subFiles = this.form.subImageUrls
                    }
                    this.initDept()
                })
                this.setInitContent()
            }
            else {
                this.resetForm()
            }
        },
        getSizes() {
            ajaxs.getSizes().then((result) => {
                this.sizes = result
            })
        },
        getColors() {
            ajaxs.getColors().then((result) => {
                this.colors = result
            })
        },
        searchColor() {
            setTimeout(() => {
                ajaxs.getColor({
                name: this.color,
                deptId: ''
            }).then((result) => {
                return result
            })
            }, 2000)
            
        },
        selectColor(item) {
            console.log(item)
        },
        // 新增现货类型
        addGoodsType() {
            this.form.barCodes.push(cloneDeep(this.barCode))
        },
        // 删除现货类型
        delGoodsType(index, rows) {
            this.form.barCodes.splice(index, 1)
        },
      
     //  获取属性
        getProperty() {
            // 用户重新选择类目之后，更新对应的属性，
            // 先清除之前的属性
            this.form.goodsProperties = []
            ajaxs.getProperty({
                condition: this.form.deptID,
                pageSize: 1000,
                page: 1
            }).then((result) => {
                console.log(this.form)
                const res = []
                result.data.forEach((item) => {
                    res.push({
                        propertyID: item.propertyID,
                        propertyName: item.name,
                        data: ''
                    })
                })
                this.form.goodsProperties = res
            })
        },
        // 获取分类
        getThreeDept() {
            ajs.getThreeDept().then((result) => {
                result.forEach((item1) => {
                    const subDept2 = []
                    if (item1.subDept.length !== 0) {
                        item1.subDept.forEach((item2) => {
                            const subDept3 = []
                            if (item2.subDept.length !== 0) {
                                // 获取三级分类
                                item2.subDept.forEach((item3) => {
                                    subDept3.push({
                                        value: item3.deptID,
                                        label: item3.name
                                    })
                                }) 
                            }
                            // 获取二级分类
                            subDept2.push({
                                value: item2.deptID,
                                label: item2.name,
                                children: subDept3
                            })       
                        })
                    }
                    this.options.push({
                        value: item1.deptID,
                        label: item1.name,
                        children: subDept2
                    })
                })
            })
        },
        getmerchantList(){
            ajax.getAllMerchants().then((result) => {
                this.merchantList = result
            })
        },
        // 保存
        save() {
            if (this.form.goodsInfo.content == undefined) {
                this.form.goodsInfo.content = this.content
            }
            // 判断用户是否新增颜色和规格
            if(this.form.barCodes.length ===0){
                this.$message({
                    message: '请添加现货类型',
                    type: 'warning'
                })
                return false
            }
            let flag = 0
            // 判断用户是否填入颜色和规格
            if (this.form.barCodes.length !==0) {
                this.form.barCodes.forEach((item) => {
                    if(item.colorID === '' || item.sizeID === ''){
                        this.$message({
                            message: '请选择颜色和规格',
                            type: 'warning'
                        })
                        flag = 1
                        return false
                    }
                })
            }
            if (flag) { return false}
            // 检查用户输入是否正确
            this.$refs.form.validate((valid) => {
                if (valid) {
                    aj.addGood(this.form).then(() => {
                        this.$emit('getGoods')
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        if (!this.isEdit) {
                            this.resetForm()
                        }
                        this.close()
                    })
                }
            })     
        },
        close() {
            this.$emit('close')
        },
        handleChange(value) {
            this.form.deptID = value[2]
            if (this.tempDeptID == this.form.deptID) {
                this.form.goodsProperties = cloneDeep(this.tempGoodsProperties)
                return
            }
            this.getProperty()
        },
        // 图片上传成功 一张图
        uploadSuccess(file) {
            this.form.mainImageUrl = file
        },
        // 多张图
        multipleUploadSuccess(files) {
            this.form.subImageUrls = files
        }
    }
}