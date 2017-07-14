import { quotation as ajax} from 'services'
export default {
    props: {
        title: String,
        show: Boolean
    },
    data() {
        return {
            form: {
                roomarea: '',
                phone: '',
                address: '',
                date: '',
                note: '',
                housetype:''
            }
        }
    },
    methods: {
        onSubmit() {
            ajax.addDecQuot(this.form).then(() => {
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