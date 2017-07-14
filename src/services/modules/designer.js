import ajax from '../fetch'

export default{
     /**
     * 获取设计师图库列表
     * @param  {Object} condition 设计师名
     * @return {[type]}        [description]
     */
	getDesignerDraw(condition, pageSize, page) {
        return ajax({
            url: '/Designer/QueryDesignerDrawings',
            method: 'post',
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**
     * 获取设计师图库详情
     * @param  {string} desDrawId 设计师ID
     * @return {[type]}        [description]
     */
    getDesDraw(desDrawId) {
        return ajax({
            url: '/Designer/QueryDesignerDrawing?designerDrawingID='+desDrawId,
            method: 'get'
        })
    },
    /**
     * 删除设计师图库
     * @param  {string} desDrawId 设计师ID
     * @return {[type]}        [description]
     */
    delDesDraw(desDrawId,auth = true) {
        return ajax({
            url: '/Designer/DelDesignerDrawing?designerDrawingID='+desDrawId,
            method: 'get',
            auth
        })
    },
    /**
     * 新增/编辑设计师图库
     * @param  {Object} draw 设计师图库详情
     * @return {[type]}        [description]
     */
    saveDesignerDrawing(draw,auth = true) {
        return ajax({
            url: '/Designer/SaveDesignerDrawing',
            method: 'post',
            auth,
            body: draw
        })
    },
    /**
     * 获取设计师列表
     * @param  {Object} condition 设计师名
     * @return {[type]}        [description]
     */
    getDesigners(condition,page,pageSize,auth = true) {
        return ajax({
            url: '/Designer/QueryDesigners',
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
     * 新增/编辑设计师
     * @param  {Object} draw 设计师图库详情
     * @return {[type]}        [description]
     */
    saveDesigner(desiger, auth = true) {
        return ajax({
            url: '/Designer/SaveDesigner',
            method: 'post',
            auth,
            body: desiger
        })
    },
    /**
     * 删除设计师
     * @param  {string} desigerids 设计师ID
     * @return {[type]}        [description]
     */
    delDesigner(desigerids, auth = true) {
        return ajax({
            url: '/Designer/DelDesigners',
            method: 'post',
            auth,
            body: {
                ids: desigerids
            }
        })
    },
    /**
     * 获取全部设计师-下拉框
     * @param  {string} auth 令牌
     * @return {[type]}        [description]
     */
    getAllDesigners(auth = true) {
        return ajax({
            url: '/Designer/QueryAllDesigners',
            method: 'post',
            auth
        })
    },
    /**
     * 推荐/取消推荐设计师到首页
     * @param  {string} desigerid 设计师ID
     * @return {[type]}        [description]
     */
    recommendToHomePage(desigerid,auth = true) {
        return ajax({
            url: '/Designer/RecommendToHomePage?designerId='+desigerid,
            method: 'get',
            auth
        })
    },
}