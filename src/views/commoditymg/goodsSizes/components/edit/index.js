import { property as ajax } from 'services'
import { cloneDeep } from 'lodash'
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
                sizeID: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ]
            }
        }
    },
    watch: {
        editForm() {
            this.resetForm()
        }
    },
    mounted() {
        this.resetForm()
    },
    methods: {
        resetForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = cloneDeep(this.initForm)
            }
            else {
                this.form = cloneDeep(this.editForm)
            }
        },
        // 保存
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.addSize(this.form).then(() => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.refresh()
                        this.close()
                    }).catch((error) => {
                        this.$message({
                            message: error,
                            type: 'warning'
                        })
                    })
                }
            })
        },
        // 刷新列表
        refresh() {
            this.$emit('refresh')
        },
        // 关闭窗口
        close() {
            this.$emit('close')
        }
    }
}