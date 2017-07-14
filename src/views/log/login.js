import { login as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            logining: false,
            form: {
                username: 'admin',
                password: '123456',
                grant_type: 'password',
                scope: 'admin'
            },
            rules: {
                username: [
                    { 
                        required: true, 
                        message: '请输入账号', 
                        trigger: 'blur' 
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            },
            checked: false
        }
    },
    mounted() {
        // this.handleSubmit()
    },
    methods: {
        ...mapActions([
            'setAuth'
        ]),
        handleSubmit() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.logining = true
                    ajax.login(this.form).then((result) => {
                        this.logining = false
                        if (result) {
                            this.setAuth(result.access_token)
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            })
                            setTimeout(() => {
                                // this.$router.push('/main')
                                this.$router.push({
                                    path: '/main',
                                    query: {
                                        data: this.form.username
                                    }
                                })
                            }, 1000)
                        }
                        else {
                            this.$message({
                                message: '登录失败',
                                type: 'error'
                            })
                        }
                    }).catch((error) => {
                        this.logining = false
                        this.$message({
                            message: '账号或密码错误',
                            type: 'error'
                        })
                    })
                }
            })
        }
    }
}