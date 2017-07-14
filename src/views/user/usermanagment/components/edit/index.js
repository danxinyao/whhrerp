export default {
    props: {
        title: String,
        show: Boolean
    },
    data() {
        return {
            form: {
                    name: '',
                    phone: '',
                    registType: '',
                    address: '',
                    contact:''
            },
            typeList: [
                {
                    name: '微信'
                },
                {
                    name: '账号'
                },
                {
                    name: 'QQ'
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