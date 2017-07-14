import ajax from '../fetch'

export default{
    /**
     * 获取用户列表
     @param  {object} query [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getUsersList(query,page,pageSize,auth = true) {
        return ajax({
            url: '/UserCenter/QueryUserList',
            method: 'post',
            auth,
            body: {
            	condition: query,
            	pageSize: pageSize,
            	page: page
            }
        })
    },
}