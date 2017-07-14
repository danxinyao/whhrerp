import ajax from '../fetch'

export default{
    /**
     * 获取全部商户-下拉框
     * @param  {string} auth 令牌
     * @return {[type]}        [description]
     */
    getAllMerchants(auth = true) {
        return ajax({
            url: '/Merchant/QueryAllMerchants',
            method: 'post',
            auth
        })
    },
    /**
     * 获取全部商户列表
     * @param  {string} query 商户名和手机号
     * @return {[type]}        [description]
     */
    getMerchants(query,page,pageSize, auth = true) {
        return ajax({
            url: '/Merchant/QueryMerchants',
            method: 'post',
            auth,
            body: {
            	condition: query,
            	pageSize: pageSize,
            	page: page
            }
        })
    },
    /**
     * 新增商户
     * @param  {Object} dto 商户详情
     * @return {[type]}        [description]
     */
    addMerchant(dto, auth = true ) {
        return ajax({
            url: '/Merchant/AddMerchant',
            method: 'post',
            auth,
            body: dto
        })
    },
    /**
     * 批量删除商户
     * @param  {Object} dto 商户IDs
     * @return {[type]}        [description]
     */
    delMerchants(dto, auth = true ) {
        return ajax({
            url: '/Merchant/DelMerchants',
            method: 'post',
            auth,
            body: dto
        })
    },
}