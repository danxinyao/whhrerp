import { menuList } from '../../data/menu.js'
import {login as ajax} from 'services'
import cookie from 'js-cookie'

export default {
    data() {
        return {
            sysName: '后台管理系统',
            userInfo: {
                name: '',
                head: ''
            },
            menuList: [],
        }
    },
    mounted() {
        this.userInfo.name = this.$route.query.data
        this.getMenuList()
        // this.menuList = menuList
    },
    methods: {
        getMenuList() {
            ajax.getLoginMenus(this.userInfo.name).then((result) =>{
                this.menuList = result
            })
        },
        handleDropdown(command) {
            if (command === 'logout') {
                this.$confirm('确定退出吗？', '提示', { type: 'warning' }).then(() => {
                    this.$message({
                        message: '退出登录成功',
                        type: 'success'
                    })
                    cookie.remove('isLogin')
                    this.$router.push('/log')
                }).catch(() => {

                })
            }
        }
    }
}