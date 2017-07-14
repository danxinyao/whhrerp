import { activity  as ajax } from 'services'
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
                typeName: '',
                reduceType: 1,
                freeDeliveryFlag: 0,
                goodsFlag: 0,
                reduceMoney: 0,
            },
            count: 0,
            installFeeTemp: 0,
            money: false,
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
            this.installFeeTemp = this.form.reduceType
            if (this.form.reduceType !==0) {
                this.installFeeTemp = 1
            }
            // 初始化的时候，判断现金选项是否选中
            if (this.form.reduceMoney === 0) {
                this.money = false
            }
            else {
                this.money = true
            }
        },
        installFeeTemp() {
            if (this.installFeeTemp === 0 || this.installFeeTemp == '') {
                this.form.reduceType = 0
            }
        },
        'form.reduceType'() {
            if (this.form.reduceType) {

            }  
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
            // 如果没有选中减现金，把reduceMoney设为o
            if (this.money === false) {
                this.form.reduceMoney = 0
            }
            if (this.installFeeTemp === 0 || this.installFeeTemp == '') {
                this.form.reduceType = 0
            }
            // 编辑时把包邮选项转换成1或0
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.addFullReduces(this.form).then(() => {
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