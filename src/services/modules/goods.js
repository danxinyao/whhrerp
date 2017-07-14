import ajax from '../fetch'

export default{
    /**
     * 获取商品列表
     * @param  {Object} query 商品标题和商品编号
     * @return {[type]}        [description]
     */
    getGoods(query, page, pageSize, auth = true) {
        return ajax({
            url: '/Goods/QueryAdminGoodsPageList',
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
     * 获取商品列表-活动管理
     * @param  {Object} query 商品标题和商品编号，商品分类
     * @return {[type]}        [description]
     */
    // 查询商品详细信息
    getAdminGoodsDetail(id, auth = true) {
        return ajax({
            url: '/Goods/QueryAdminGoodsDetail?id=' + id,
            method: 'get',
            auth
        })
    },
    getGoodsForAct(query, page, pageSize,auth = true) {
        return ajax({
            url: '/Goods/QueryGoodsForActivity',
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
     * 新增/编辑商品
     * @param  {Object} goods 商品详情
     * @return {[type]}        [description]
     */
    addGood (goods, auth = true) {
        return ajax({
            url: '/Goods/SaveGood',
            method: 'post',
            auth,
            body: goods
        })
    },
    /**
     * 上架/下架商品
     * @param  {Object} goodsid 商品ID和上下架状态
     * @return {[type]}        [description]
     */
    shelfGood(goodsid,stockStaus, auth = true) {
        return ajax({
            url: '/Goods/ShelfGood',
            method: 'post',
            auth,
            body: {
            	GoodsID: goodsid,
                stockStatus: stockStaus
            }
        })
    },
    /**
     * 批量删除商品
     * @param  {Array} goodids 商品ID
     * @return {[type]}        [description]
     */
    delGoods(goodids, auth = true) {
        return ajax({
            url: '/Goods/DelGoods',
            method: 'post',
            auth,
            body: goodids
        })
    },
    /**
     * 查询售后信息
     * @return {[type]} [description]
     */
    getSupportContent() {
        return ajax({
            url: '/Goods/QuerySupportContents',
            method: 'post'
        })
    },
    /**
     * 新增、修改售后信息
     * @param {object}  data [description]
     * @param {Boolean} auth [description]
     */
    addSupportContent(data, auth = true) {
        return ajax({
            url: '/Goods/AddSupportContent',
            method: 'post',
            auth,
            body: data
        })
    }
}