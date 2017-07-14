import { merchantEnter as ajax } from 'services'
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
                company: '',
                state: '',
                city: '',
                district: '',
                merchantsType: '',
                brand: '',
                note: ''
            },
            typeList: [
                {
                    id: 1,
                    name: '厂家'
                },
                {
                    id: 2,
                    name: '代理商'
                },
                {
                    id: 3,
                    name: '经销商'
                }
            ]
        }
    },
    watch: {
        editForm() {
            this.form = this.util.isEmptyObject(this.editForm) ? this.initForm : this.editForm
        }
    },
    methods: {
        onSubmit() {
            ajax.addMerchant(this.form).then(() => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.form = {}
                this.$emit('close')
            })
        },
        close() {
            this.$emit('close')
        }
    }
}