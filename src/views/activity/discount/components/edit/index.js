import {activity as ajax} from 'services'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: {},
        goods: Array
    },
    data() {
        return {
            form: {},
            initForm: {
                goodsList: [],
                name: '',
                beginTime: '',
                endTime: '',
                openQty: 0,
                discountType: 1,
                discountCondition: 1,
                goodsFlag: 0,
                discountData: 0,
            },
            count: 0,
            installFeeTemp: 0,
            rules: {
                name: [
                    { required: true, message: '请输入活动名', trigger: 'blur' },
                ],
            },
        }
    },
    watch: {
        editForm() {
            this.form = this.util.isEmptyObject(this.editForm) ? this.initForm : this.editForm
                this.installFeeTemp = this.form.discountCondition
                if (this.form.discountCondition !==0) {
                    this.installFeeTemp = 1
                }
        },
        installFeeTemp() {
            if (this.installFeeTemp === 0 || this.installFeeTemp == '') {
                this.form.discountCondition = 0
            }
            else {
                this.form.discountCondition = this.installFeeTemp
            }
        },
        'form.discountCondition'() {
        },
        // 监听选择的商品列表的变化
        'form.goodsList'() {
            if (this.form.goodsList !=null) {
                this.count = this.form.goodsList.length
            }
        },
        goods() {
            this.goods.forEach((item) => {
                let flag = 1
                // 查找此商品是否已经添加
                this.form.goodsList.forEach((good) => {
                    if (good.goodsID === item.goodsID) {
                        flag = 0
                    }
                })
                if (flag) {
                    this.form.goodsList.push(item)
                }
            })
        }
    },
    methods: {
        onSubmit() {
            if (this.installFeeTemp === 0 || this.installFeeTemp == '') {
                this.form.discountCondition = 0
            }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.addTimeDiscount(this.form).then(() => {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            })
                            this.count = 0
                            this.form = {}
                            // 新增之后，重新跟新活动列表
                            this.refresh()
                            this.close()       
                    }).catch((error) => {
                        this.$message({
                            message: error,
                            type: 'warning'
                        })
                    })  
                }
            })    
        },
        refresh() {
            this.$emit('refresh')
        },
        close() {
            this.$emit('close')
        },
        showTable() {
            this.$emit('tableShow')  
        },
        // 删除已选的商品
        delGood(index) {
            this.form.goodsList.splice(index,1)
        },
        beginDateChange(val) {
            this.form.beginTime = val
        },
        dateChange(value) {
            this.form.endTime = value
        }
    }
}