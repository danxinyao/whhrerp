import ajax from '../fetch'

export default{
    /**数据报表
     * @return {[Promise]}
     */
      /**
     * 获取财务列表
     * @param  {Object} query 时间范围
     * @return {[type]}        [description]
     */
    getFinanceData(query,page,pageSize) {
        return ajax({
            url: '/Report/QueryFinanceData',
            method: 'post',
            body: {
                condition: query,
                page: page,
                pageSize: pageSize
            }
        })
    },
    /**
     * 获取商品排名列表
     * @param  {Object} query 时间范围
     * @return {[type]}        [description]
     */
    getGoodsRanking(query,page,pageSize, auth = true) {
        return ajax({
            url: '/Report/QueryGoodsRanking',
            method: 'post',
            auth,
            body: {
                condition: query,
                page: page,
                pageSize: pageSize
            }
        })
    },
    /**
     * 获取客户报表列表
     * @param  {Object} query 时间范围
     * @return {[type]}        [description]
     */
    getUsers(query,page,pageSize, auth = true) {
        return ajax({
            url: '/Report/QueryGoodsRanking',
            method: 'post',
            auth,
            body: {
                condition: query,
                page: page,
                pageSize: pageSize
            }
        })
    }
}