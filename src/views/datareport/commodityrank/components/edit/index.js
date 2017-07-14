export default {
    props: {
        title: String,
        show: Boolean
    },
    data() {
        return {
            form: {
                name: '',
                date: '',
                rank: '',
                price:'',
                number: ''
            }
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