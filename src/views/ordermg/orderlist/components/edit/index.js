import {mallOrder as ajax} from 'services'
import {dropDownList as ajaxs} from 'services'
export default {
    props: {
        title: String,
        show: Boolean,
        types: Number,
        mallOrder: {}
    },
    data() {
        return {
            form: {
                id: '',
                flag: -1,
                status: 1,
                companyCode: '',
                companyName: '',
                deliveryNo: ''
            },
            deliveryList: [],
            companys: []
        }
    },
    watch: {
        mallOrder() {
            // // 初始化的时候，获取订单的ID和状态
            this.form.flag = this.mallOrder.deliveryFlag
            // this.form.mallOrderID = this.mallOrder.mallOrderID
            this.form.id = this.mallOrder.mallOrderID
            // 对配送状态的进行逻辑判断，正在的配送状态之前的状态不可选
            // 先清空之前的订单的配送状态
            this.deliveryList.forEach((item) => {
                if (item.sortId < this.form.flag) {
                    item.disabled = true
                } else {
                    item.disabled = false
                }
            })
        }
    },
    mounted() {
        this.getOrderDeliveryFlag()
        this.getDeliveryCompanyInfo()
    },
    methods: {
        getOrderDeliveryFlag() {
            ajaxs.getOrderDeliveryFlag().then((result) => {
                this.deliveryList = result
            })
        },
        // 获取快递公司
        getDeliveryCompanyInfo() {
            ajaxs.getDeliveryCompanyInfo().then((result) => {
                this.companys = result
            })
        },
        onSubmit() {
            // 如果是快递发货
            if (this.types ===0 && this.form.status ===1) {
                this.companys.forEach((item) => {
                    if (this.form.companyCode === item.value) {
                        this.form.companyName = item.text
                    }
                })
                ajax.sendOut(this.form).then(() => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    // 更新订单列表
                    this.refresh()
                    this.close()
                }).catch((error) => {
                    this.$message({
                        message: error,
                        type: 'info'
                    })
                })
            }
            else {
                // 更新配送状态
                ajax.editDeliveryFlag(this.form).then(() => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    // 更新订单列表
                    this.refresh()
                    this.close()
                }).catch((error) => {
                    this.$message({
                        message: error,
                        type: 'info'
                    })
                })
            }
        },
        refresh() {
            this.$emit('refresh')
        },
        close() {
            this.$emit('close')
        }
    }
}