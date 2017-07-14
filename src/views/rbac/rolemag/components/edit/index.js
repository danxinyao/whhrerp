import {  role as ajax} from 'services'
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
                roleID: '',
                roleMenus: [],
            },
        }
    },
    mounted() {
        this.getMenus()
    },
    watch: {
        editForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
            }
            else {
                this.resetForm()
            }
        }
    },
    created() {
        this.setForm(this.editForm)
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
            }
            else {
                this.resetForm()
            }
        },
        getMenus() {
            // 获取菜单列表
            ajax.getMenus().then((result) => {
                this.initForm.roleMenus = result
            })
        },
        onSubmit() {
            ajax.addRoles(this.form).then(()=>{
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                // 成功之后，刷新列表
                this.refresh()
                this.close()
            })
        },
        refresh() {
            this.$emit('refresh')
        },
        close() {
            this.$emit('close')
        },
    }
}