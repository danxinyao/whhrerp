import { merchant as ajax} from 'services'
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
            initForm: {
                name: '',
                mobile: '',
                merchantsID: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入商户名', trigger: 'blur' },
                ],
                mobile: [
                    { required: true, message: '请输入电话', trigger: 'blur' },
                ]
            }       
        }
    },
    watch: {
        editForm() {
            this.form = this.util.isEmptyObject(this.editForm) ? this.initForm : this.editForm
        }
    },
    methods: {
        onSubmit(initForm) {
            // 检查用户输入是否正确
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.addMerchant(this.form).then(()=>{
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                         this.close()
                         this.refresh()
                    })
                }
            })
        },
        refresh() {
            this.$emit('refresh')
        },
        close() {
            this.$emit('close')
        }
    }
}