import ajax from '../fetch'

export default{
    /**
    * 获取退款列表
     * @param  {[type]}  condition [description]
     * @param  {Boolean} auth  [description]
     * @return {[Promise]}
     */
    getRefundOrderList (condition, page, pageSize,auth = true) {
        return ajax({
            url: '/RefundOrder/QueryRefundOrderList',
            method: 'post',
            auth,
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**
    * 同意退货
     * @param  {object}  act [description]
     * @param  {Boolean} auth  [description]
     * @return {[Promise]}
     */
    agreeRefundGoods (act,auth = true) {
        return ajax({
            url: '/RefundOrder/AgreeRefundGoods',
            method: 'post',
            auth,
            body: act
        })
    },
    /**
    * 拒绝退款
     * @param  {object}  act [description]
     * @param  {Boolean} auth  [description]
     * @return {[Promise]}
     */
    rejectRefund (act,auth = true) {
        return ajax({
            url: '/RefundOrder/RejectRefund',
            method: 'post',
            auth,
            body: act
        })
    },
    /**
    * 同意退款
     * @param  {object}  refundid [description]
     * @param  {Boolean} auth  [description]
     * @return {[Promise]}
     */
    agreeRefund (refundid,auth = true) {
        return ajax({
            url: '/RefundOrder/AgreeRefund',
            method: 'post',
            auth,
            body: {
                id: refundid
            }
        })
    },
}