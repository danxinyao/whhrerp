import { role as ajax} from 'services'
import { login as ajaxs} from 'services'
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
                loginName: '',
                name: '',
                mobile: '',
                passWord: '',
                roleID: ''
            },
            roleList: [],
            rules: {
                loginName: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入名字', trigger: 'blur' },
                ],
                mobile: [
                    { required: true, message: '请输入电话', trigger: 'blur' },
                ],
                passWord: [
                    { required: true, message: '请设置初始密码', trigger: 'blur' },
                ],
                roleID: [
                    { required: true, message: '请选择角色类型', trigger: 'blur' },
                ],
            },
        }
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
    mounted() {
        this.getAllRoles()
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
        // 获取全部的角色
        getAllRoles() {
            ajax.getAllRoles().then((result) => {
               this.roleList = result
            })
        },
        onSubmit() {
            // 检查用户输入是否正确
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajaxs.saveLogin(this.form).then(()=>{
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                         this.close()
                         this.refresh()
                    }).catch((error) => {
                        this.$message({
                            message: error,
                            type: 'error'
                        })
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