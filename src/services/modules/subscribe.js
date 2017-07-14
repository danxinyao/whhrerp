import ajax from '../fetch'

export default{
    /**
     * 获取在线预约列表
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getSubscribes(page, pageSize, auth = true) {
        return ajax({
            url: '/Subscribe/QuerySubscribes',
            method: 'post',
            auth,
            body: {
                page: page,
                pageSize: pageSize
            }
        })
    },
    /**
     * 获取装修报价列表
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getDecorationQuotations(page, pageSize, auth = true) {
        return ajax({
            url: '/Subscribe/QueryDecorationQuotations',
            method: 'post',
            auth,
            body: {
                page: page,
                pageSize: pageSize
            }
        })
    },
    /**
     * 修改装修报价备注
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    editDecorationQuotation(note, auth = true) {
        return ajax({
            url: '/Subscribe/EditDecorationQuotationNote',
            method: 'post',
            auth,
            body: note
        })
    },
    /**
     * 修改预约备注
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    editSubscribeNote(note, auth = true) {
        return ajax({
            url: '/Subscribe/EditSubscribeNote',
            method: 'post',
            auth,
            body: note
        })
    }
}