import ajax from '../fetch'

export default{
    /**
     * 获取全部装修类型-下拉框
     * @param  {string} auth 令牌
     * @return {[type]}        [description]
     */
    getDecorationType(auth = true) {
        return ajax({
            url: '/DropDownList/GetDecorationType',
            method: 'get',
            auth
        })
    },
    /**
     * 获取全部户型-下拉框
     * @return {[type]}        [description]
     */
    getHouseTypes() {
        return ajax({
            url: '/DropDownList/GetHouseType',
            method: 'get',
        })
    },
    /**
     * 获取全部装修风格-下拉框
     * @return {[type]}        [description]
     */
    getHouseStyles() {
        return ajax({
            url: '/DropDownList/GetHouseStyles',
            method: 'get',
        })
    },
    /**
     * 获取全部装修面积-下拉框
     * @return {[type]}        [description]
     */
    getHouseAreas() {
        return ajax({
            url: '/DropDownList/GetHouseAreas',
            method: 'get',
        })
    },
    /**
     * 获取全部装修空间-下拉框
     * @return {[type]}        [description]
     */
    getHousePlaces() {
        return ajax({
            url: '/DropDownList/GetHousePlaces',
            method: 'get',
        })
    },
    /**
     * 获取全部装修场所-下拉框
     * @return {[type]}        [description]
     */
    getHouseSites() {
        return ajax({
            url: '/DropDownList/GetHouseSites',
            method: 'get',
        })
    },
    /**
     * 获取全部文章类型-下拉框
     * @param  {string} auth 令牌
     * @return {[type]}        [description]
     */
    getArticleType(auth = true) {
        return ajax({
            url: '/DropDownList/GetArticleType',
            method: 'get',
            auth
        })
    },
    /**
     * 获取全部配送状态-下拉框
     * @param  {string} auth 令牌
     * @return {[type]}        [description]
     */
    getOrderDeliveryFlag(auth = true) {
        return ajax({
            url: '/DropDownList/GetOrderDeliveryFlag',
            method: 'get',
            auth
        })
    },/**
     * 获取快递公司-下拉框
     * @param  {string} auth 令牌
     * @return {[type]}        [description]
     */
    getDeliveryCompanyInfo() {
        return ajax({
            url: '/DropDownList/GetDeliveryCompanyInfo',
            method: 'get',
        })
    },
}