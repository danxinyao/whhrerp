import PgConsultusers from './components/consultusers/index.vue'
import { speech as ajax} from 'services'
export default {
    components: {
        PgConsultusers,
    },
    data() {
        return {
           userList: [],
           messagelist: [],
           replycontent: '',
           showDia: false,
           userid: '',
           replylist: [],
           showreply: false,
           userName: '',
           userAvatar: ''
        }
    },
    mounted() {
        this.getMessUsers()
    },
    methods: {
        getMessUsers() {
            ajax.getMessUsers().then((result) => {
                this.userList = result
                // this.userid = result.userID
            })
        },
        getmessage(usId) {
            this.userid = usId
            // 获取用户的头像和名称
            this.userList.forEach((user) => {
                if (user.userID === usId) {
                    // 获取备注
                    if (user.userNote) {
                        this.userName = user.userNote
                    }
                    else {
                        this.userName = user.userName
                    }
                    // 获取头像
                    this.userAvatar = user.userAvatar
                }
            })
            ajax.getUserMess(usId).then((result) => {
                this.messagelist = result
                this.showDia = true
                this.showreply = true
            })
        },
        reply() {
            // 如果管理回复的内容为空，不发送到后台
            if (this.replycontent == '') {
                return false
            }
            let time= new Date()
            let editTime = time.getHours()+ ':' +time.getMinutes()
            this.messagelist.push({
                createTime: editTime,
                name: 'admin',
                content: this.replycontent,
                userID: this.userid,
                messageType: 1
            })
            // 这里处理回复按钮的接口
            ajax.addUserMess(this.userid,this.replycontent).then(() => {
                // 回复成功的回调函数
                // 清空回复框中的内容
                console.log(123)
                this.replycontent = ''
                console.log(123)
            })
        },
        // 删除聊天记录时，清空视图中的聊天记录
        refresh() {
            this.messagelist = []
        }
    }
}