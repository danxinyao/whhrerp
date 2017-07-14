import { subscribe as ajax} from 'services'
export default {
    props: {
        title: String,
        show: Boolean,
        form: Object
    },
    data() {
        return {
        }
    },
    methods: {
        onSubmit() {
            ajax.addSubscribe(this.form).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
            })
        },
        close() {
            this.$emit('close')
        }
    }
}