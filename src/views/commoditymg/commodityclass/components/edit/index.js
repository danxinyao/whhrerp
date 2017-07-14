import {dept as ajax} from 'services'
import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        isFirst: Boolean,
        editForm: Object
    },
    data() {
        return {
            form: {},
            initForm: {
                label: '',
                value: ''
            }
        }
    },
    watch: {
        editForm() {
            if (this.util.isEmptyObject(this.editForm)) {
                this.form = this.initForm
            }
            else {
                this.form = this.editForm
            }
        }
    },
    methods: {
        save() {
            if (this.isFirst && !this.isEdit) {
                ajax.addFirstDept(this.form.label).then(() => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    this.refresh()
                    this.close()
                })
            }
            else if (!this.isFirst && !this.isEdit) {
                ajax.addSubDept({
                    Name: this.form.label,
                    ParentID: this.form.value
                }).then(() => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    this.refresh()
                    this.close()
                })
            }
            else if (this.isEdit && !this.isFirst) {
                ajax.editDept({
                    Name: this.form.label,
                    DeptID: this.form.value
                }).then(() => {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    })
                    this.refresh()
                    this.close()
                })
            }
        },
        close() {
            this.$emit('close')
        },
        refresh() {
            this.$emit('refresh')
        }
    }
}