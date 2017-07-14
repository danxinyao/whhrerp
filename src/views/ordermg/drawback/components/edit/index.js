export default {
    props: {
        title: String,
        show: Boolean
    },
    data() {
        return {
            form: {
                orderid: '',
                name: '',
                payment: '',
                freight: '',
                date: '',
                business: '',
                paymentid: '',
                refund: '',
                loginfor: '',
                typename: ''
            },
            typeList: [
                {
                    state: '交易关闭'
                },
                {
                    state: '交易成功'
                }
            ]
        }
    },
    methods: {
        onSubmit() {
            this.$message({
                message: '保存成功',
                type: 'success'
            })
        },
        close() {
            this.$emit('close')
        }
    }
}