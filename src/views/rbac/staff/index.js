import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { role as ajax } from 'services' 
import { login as ajaxs} from 'services'
export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            staffslist: [],
            title: '编辑',
            showEdit: false,
            isEdit: false,
            editForm: {},
            isShowMoreQuery: false, // 搜索区是否显示更多
            total: 0, // 数据总条数
            page: 1, // 当前页数
            pageSize: 15, // 每页条数
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add'
                }
            ],
            showPass: false,
            form: {
                loginID: '',
                passWord: '',
                passWord1: '',
                passWord2: ''
            },
            rules: {
                oldPass: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                ],
                passWord1: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                ],
                passWord2: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                ]
            },
        }
    },
    mounted() {
        this.getLogins()
    },
    methods: {
        getLogins() {
            ajaxs.getLogins(this.page,this.pageSize).then((result)=>{
                this.staffslist = result.data
                this.total = result.totalCount
            })
        },
        // 禁用和启用账号
        stopAndStartLogin(loginID,status) {
            let str = ''
            let str1 = ''
            if (status) {
                str = '你确定禁用此账号?'
                str1 = '禁用成功!'      
            }
            else {
                str = '你确定启用此账号?'
                str1 = '启用成功!'
            }
            this.$confirm(str, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                ajaxs.stopAndStartLogin(loginID).then(() => {
                    this.$message({
                        message: str1,
                        type: 'success'
                    })
                    this.getLogins()
                })
            })
        },
        // 当前页数更是触发
        currentChange(current) {
            this.page = current
            this.getLogins()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getLogins()
        },
        // 批量删除
        del(loginID) {
            this.$confirm('此操作将永久删除该员工, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajaxs.delLogin(loginID).then(() => {
                    //删除成功的回调函数
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    // 删除之后重新加载活动列表
                    this.getLogins()
                })
            })
        },
        // 新增
        add() {
            this.editForm = {}
            this.title = '新增'
            this.isEdit = false
            this.showEdit = true
        },
        // 打开编辑窗口
        edit(item) {
            this.editForm = item
            this.title = '编辑'
            this.isEdit = true
            this.showEdit = true
        },
        // 关闭编辑窗口
        closeEdit() {
            this.showEdit = false
        },
        refresh() {
            this.page = 1
            this.getLogins()
        },
        editPass(loginID) {
            this.form.loginID = loginID
            this.showPass = true
        },
        closePass() {
            this.showPass = false
        },
        onSubmit() {
            // 保存修改的密码
            // 判断用户新密码是否一致
            if (this.form.passWord1 !== this.form.passWord2) {
                this.$message({
                    message: '你输入的新密码不一致,请重新输入!',
                    type: 'warning'
                })
                return false
            }
             // 检查用户输入是否正确
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.form.passWord = this.form.passWord1
                    ajaxs.resetLoginPwd(this.form).then(() => {
                        this.$message({
                            message: '重置密码成功!',
                            type: 'success'
                        })
                        this.showPass = false
                    })
                }
            })
        }
    }
}