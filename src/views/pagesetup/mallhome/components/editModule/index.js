import { property as ajax } from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        editForm: {},
        isEdit: Boolean
    },
    data() {
        return {
            form: {},
            initForm: {
                name: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入模块名称',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    watch: {
        editForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = cloneDeep(this.initForm)
            }
            else {
                this.form = cloneDeep(this.editForm)
            }
        }
    },
    methods: {
        // 保存
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.close()
                    this.$emit('save', this.form)
                }
            })
        },
        // 关闭窗口
        close() {
            this.$emit('close')
        }
    }
}