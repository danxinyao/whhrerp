import {customer as ajax} from 'services'
export default {
    data() {
        return {
            form: {
                userId: '',
                content: ''
            },
            msgList: [],
            customerList: [],
            timer: null,
            currentUser: {}
        }
    },
    mounted() {
        this.getUnReadMessageCount()
        if (!this.timer) {
            this.timer = setInterval(() => {
                this.getUnReadMessageCount()
            }, 2000)
        }
    },
    methods: {
        // 查看用户信息
        tapUser(item) {
            this.currentUser = item
            this.form.userId = item.userId
            this.msgList = []
            this.getCurrentDateLog()
        },
        // 获取未查看消息数
        getUnReadMessageCount() {
            ajax.getUnReadMessageCount().then((result) => {
                this.customerList = result
            })
        },
        // 发送消息
        submit() {
            if (this.form.userId == '' || this.form.content == '')
                return
            ajax.sendMessage(this.form).then((result) => {
                this.msgList.push({
                    content: this.form.content,
                    messageType: 1,
                    createTime: this.util.currentTime(true)
                })
                this.form.content = ''
                setTimeout(() => {
                    this.$refs.customer.scrollTop = this.$refs.customer.scrollHeight
                }, 100)
            })
        },
        // 获取当天聊天记录
        getCurrentDateLog() {
            ajax.getCurrentDateLog(this.form.userId).then((result) => {
                this.msgList = result
                setTimeout(() => {
                    this.$refs.customer.scrollTop = this.$refs.customer.scrollHeight
                }, 100)
            })
        }
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }
}