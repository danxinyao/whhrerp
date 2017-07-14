import ajax from '../fetch'

export default{
    /**
     * 获取商家入驻列表
     * @param  {object}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getMerchant(query, page,pageSize,auth = true) {
        return ajax({
            url: '/MerchantEnter/QueryMerchantEnters',
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
     * 备注商家
     * @param  {string}  merchantAct [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    editMerchant(merchantAct, auth = true) {
    	return ajax({
    		url: '/MerchantEnter/EditMerchantsNote',
    		method: 'post',
            auth,
    		body: merchantAct
    	})
    }
}