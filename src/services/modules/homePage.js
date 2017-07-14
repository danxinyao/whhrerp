import ajax from '../fetch'

export default{
    /**
     * 获取商品三级分类
     * @return {[type]}        [description]
     */
    getThreeDept() {
        return ajax({
            url: '/HomePage/QueryThreeDept',
            method: 'get',
        })
    },
    /**
      @param  {string} positiontype 轮播图类型
     * 获取轮播图
     * @return {[type]}   [description]
     */
    getAdvertisings(positiontype) {
        return ajax({
            url: '/HomePage/QueryAdvertisings?positionType='+positiontype,
            method: 'get'
        })
    },
    /**
      @param  {string} positiontype 页面类型
     * 获取自定义页面
     * @return {[type]}   [description]
     */
    getDefinePages(pagetype) {
        return ajax({
            url: '/HomePage/QueryDefinePages?pageType='+pagetype,
            method: 'get'
        })
    },
    /**
     * 省市区
     * @param  {string} parentID 上层ID
     * @param  {number} levelID  1国家，2省，3市，4区
     * @return {[array]}          [description]
     */
    queryRegions(data) {
        return ajax({
            url: '/HomePage/QueryRegions',
            method: 'post',
            body: data
        })
    }
}