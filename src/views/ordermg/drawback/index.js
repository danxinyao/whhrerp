import PgTable from './components/table/index.vue'
import { refundOrder as ajax} from 'services'
export default {
    components: {
        PgTable
    },
    data() {
        return {
            datalist: [],
            show: false,
            showDia: false,
            query: {
                sheet: '',
                orderSheet: ''
            },
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            form: {
                id: '',
                linkMan: '',
                phone: '',
                state: '',
                city: '',
                district: '',
                address: ''
            },
            form2: {
                id: '',
                sellMemo: ''
            },
            refundType: 1,
            isShowBigImg: false, // 是否显示大图弹出框
            bigImg: '', // 大图地址
            rules: {
                linkMan: [
                    { required: true, message: '请输入收货人', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                ],
                address: [
                    { required: true, message: '请输入详细地址', trigger: 'blur' },
                ],
                district: [
                    { required: true, message: '请选择城市', trigger: 'blur' },
                ],
            },
            rule2: {
                sellMemo: [
                    { required: true, message: '请输入拒绝退款的原因', trigger: 'blur' },
                ]
            },
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '订单号',
                        model: 'orderSheet'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getRefundOrderList()
    },
    methods: {
        getRefundOrderList() {
            ajax.getRefundOrderList(this.query,this.page, this.pageSize).then((result) => {
                this.datalist = result.data
                this.total = result.totalCount
            })
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getRefundOrderList()
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getRefundOrderList()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getRefundOrderList()
        },
        agree(item) {
            this.form.id = item.id
            this.refundType = item.refundType
            // 仅退款时，不需要填写收货地址
            if (this.refundType !==1) {
                this.show = true
            }
            else {
                this.$confirm('确认退回货款?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    ajax.agreeRefund(item.id).then(() => {
                        this.$message({
                            message: '退款成功!',
                            type: 'success'
                        })
                        this.getRefundOrderList()
                    })
                })
            }
        },
        close() {
            this.show = false
        },
        refuse(item) {
            this.form2.id = item.id 
            this.showDia = true
        },
        closeDia() {
            this.showDia = false
        },
        // 获取选择的省市区
        changeRegions(region) {
            this.form.state = region.state
            this.form.city = region.city
            this.form.district = region.district
        },
        // 保存同意退款
        onSubmit() {
            // 检查用户输入是否正确
            // this.$refs.form.validate((valid) => {
            //     if (valid) {
                        ajax.agreeRefundGoods(this.form).then(() => {
                            this.$message({
                                message: '已同意退款',
                                type: 'success'
                            })
                            this.close()
                            this.getRefundOrderList()
                        })
            //     }
            // })     
        },
        // 拒绝退款
        save() {
            this.$refs.form2.validate((valid) => {
                if (valid) {
                    ajax.rejectRefund(this.form2).then(() => {
                    this.$message({
                        message: '已拒绝退款',
                        type: 'success'
                    })
                        this.closeDia()
                        this.getRefundOrderList()
                    })
                }
            })     
        },
        // 收货并退款
        receiptAndRefund(item) {
            this.$confirm('确认退回货款?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.agreeRefund(item.id).then(() => {
                    this.$message({
                        message: '退款成功',
                        type: 'success'
                    })
                    this.getRefundOrderList()
                })
            })
        },
        // 查看大图
        showBigImg(url) {
            console.log(url)
            this.bigImg = url
            this.isShowBigImg = true
        }
        // 拒绝退款
        // refuseRefund(item) {

        // }
    }
}