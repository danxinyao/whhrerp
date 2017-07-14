import ajax from '../fetch'

export default{
    /**
        获取消息列表
      @param  {boolean} auth 令牌
     * @return {[Promise]}
     */
    getMessUsers (auth = true) {
        return ajax({
            url: '/Speech/QueryMessageUsers',
            method: 'get',
            auth,
        })
    },
    /**
        获取用户消息
        @param  {string} uID 用户ID
      @param  {boolean} auth 令牌
     * @return {[Promise]}
     */
    getUserMess (uID, auth = true) {
        return ajax({
            url: '/Speech/QueryUserMessages?userId=' + uID,
            method: 'get',
            auth
        })
    },
    /**
        回复用户消息
        @param  {string} uID 用户ID
      @param  {boolean} auth 令牌
     * @return {[Promise]}
     */
    addUserMess (userid,content,) {
        return ajax({
            url: '/Speech/AddMessage',
            method: 'post',
            body: {
                userID: userid,
                content: content,
                messageType: 1
            }
        })
    },
    /**
       删除户消息
        @param  {string} uID 用户ID
      @param  {boolean} auth 令牌
     * @return {[Promise]}
     */
    delUserMess (userid, auth = true) {
        return ajax({
            url: '/Speech/DelUserMessages?UserID='+userid,
            method: 'post',
            auth
        })
    },
    /**
        备注用户
        @param  {string} uID 用户ID
      @param  {boolean} auth 令牌
     * @return {[Promise]}
     */
    editUserNote (entity, auth = true) {
        return ajax({
            url: '/Speech/EditUserNote',
            method: 'post',
            auth,
            body: entity
        })
    },
    /**
        获取反馈列表
      @param  {boolean} auth 令牌
     * @return {[Promise]}
     */
    getFeedbacks (page, pageSize, auth = true) {
        return ajax({
            url: '/Speech/QueryFeedbacks',
            method: 'post',
            auth,
            body: {
                page: page,
                pageSize: pageSize
            }
        })
    }
}