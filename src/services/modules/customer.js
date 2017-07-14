/**
 * 客服
 */
import ajax from '../fetch'
export default {
    /*
     * 发送消息
     * @param  {Boolean} auth 令牌
     */
    sendMessage(data, auth = true) {
        return ajax({
            url: '/CustomerMessage/SendMessage',
            method: 'post',
            body:data,
            auth
        })
    },
    /**
     * 获取当天聊天记录
     * @param  {string} userId 用户id
     * @return {[type]}        [description]
     */
    getCurrentDateLog(userId, auth = true) {
        return ajax({
            url: '/CustomerMessage/GetCurrentDateLog?userId=' + userId,
            method: 'get',
            auth
        })
    },
    /**
     * 获取未查看消息数
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getUnReadMessageCount(auth = true) {
        return ajax({
            url: '/CustomerMessage/GetUnReadMessageCount',
            method: 'get',
            auth
        })
    }
}