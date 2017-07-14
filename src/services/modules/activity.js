import ajax from '../fetch'

export default{
     // 活动管理模块的接口
     
     /**
     * 获取限时折扣列表
     * @param  {Object} query 活动名
     * @return {[type]}        [description]
     */
    getTimeDiscounts (query, page, pageSize,auth = true) {
        return ajax({
            url: '/Activity/QueryTimeDiscounts',
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
     * 获取某一限时活动详情
     * @param  {string} timedisid 活动ID
     * @return {}        [description]
     */
    getTimeDiscount (timedisid, auth = true) {
        return ajax({
            url: '/Activity/QueryTimeDiscount?timeDiscountId='+timedisid,
            method: 'post',	
            auth
        })	
    },
    /**
     * 批量删除限时折扣活动
     * @param  {Array} timeid 活动ID
     */
    delTimeDiscount (timeid, auth = true) {
        return ajax({
            url: '/Activity/DelTimeDiscount',
            method: 'post', 
            auth,
            body: timeid
        })  
    },
    /**
     * 新增/编辑限时折扣活动
     * @param  {Object} timedto 活动详情
     */
    addTimeDiscount (timedto, auth = true) {
        return ajax({
            url: '/Activity/SaveTimeDiscount',
            method: 'post', 
            auth,
            body: timedto
        })  
    },   
     /**
     * 获取满减/包邮活动列表
     * @param  {Object} query 活动名
     * @return {[type]}        [description]
     */
    getFullReducess (query, page, pageSize, auth = true) {
        return ajax({
            url: '/Activity/QueryFullReduces',
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
     * 获取某一满减/包邮活动详情 
     * @param  {string} timedisid 活动ID
     * @return {}        [description]
     */
    getFullReduce (fullid, auth = true) {
        return ajax({
            url: '/Activity/QueryFullReduce?fullReduceId='+fullid,
            method: 'post', 
            auth
        })  
    }, 
    /**
     * 批量删除满减/包邮活动
     * @param  {Array} timeid 活动ID
     */
    delFullReduces (fullids, auth = true) {
        return ajax({
            url: '/Activity/DelFullReduces',
            method: 'post', 
            auth,
            body: fullids
        })  
    }, 
      /**
     * 新增/编辑满减/包邮活动
     * @param  {Object} timedto 活动详情
     */
    addFullReduces (dto, auth = true) {
        return ajax({
            url: '/Activity/SaveFullReduce',
            method: 'post', 
            auth,
            body: dto
        })  
    },              		
}