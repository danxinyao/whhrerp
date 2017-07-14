/**
 * 自定义页面
 */
import ajax from '../fetch'

export default {
    /**
     * 查询官网首页
     * @return {[type]} [description]
     */
    getHomePage() {
        return ajax({
            url: '/CustomPage/QueryHomePage',
            method: 'get'
        })
    },
    /**
     * 查询商城首页
     * @return {[type]} [description]
     */
    getShopPage() {
        return ajax({
            url: '/CustomPage/QueryShopPage',
            method: 'get'
        })
    },
    /**
     * 保存官网首页
     * @param  {object}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    saveHomePage(data, auth = true) {
        return ajax({
            url: '/CustomPage/SaveHomePage',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 保存商城首页
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    saveShopPage(data, auth = true) {
        return ajax({
            url: '/CustomPage/SaveShopPage',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 删除模块
     * @param  {array}  idList [description]
     * @param  {Boolean} auth   [description]
     * @return {[type]}         [description]
     */
    delModule(idList, auth = true) {
        return ajax({
            url: '/CustomPage/DeleteModule',
            method: 'post',
            auth,
            body: {
                ids: idList
            }
        })
    }
}