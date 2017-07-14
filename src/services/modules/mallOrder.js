import ajax from '../fetch'

export default{
    /**
     * 获取订单列表
     * @param  {Object} query 订单编号
     * @return {[type]}        [description]
     */
    getOrderList(query, page, pageSize,auth = true) {
        return ajax({
            url: '/MallOrder/QueryOrderList',
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
     * 获取订单详情
     * @param  {string} morderid 订单ID
     * @return {[type]}        [description]
     */
    getOrderDetail(morderid, auth = true) {
        return ajax({
            url: '/MallOrder/QueryAdminOrderDetail?id='+morderid,
            method: 'get',
            auth
        })
    },
    /**
     * 编辑物流状态
     * @param  {Object} act 物流状态
     * @return {[type]}        [description]
     */
    editDeliveryFlag(act,auth = true) {
        return ajax({
            url: '/MallOrder/EditDeliveryFlag',
            method: 'post',
            auth,
            body: act
        })
    },
    /**
     * 发货
     * @param  {Object} act 物流状态
     * @return {[type]}        [description]
     */
    sendOut(act,auth = true) {
        return ajax({
            url: '/MallOrder/SendOut',
            method: 'post',
            auth,
            body: act
        })
    },
}