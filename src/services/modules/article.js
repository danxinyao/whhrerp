import ajax from '../fetch'

export default{
    /**
     * @return {[Promise]}
     */
     /**
     * 文章管理-文章列表-获取文章列表
     * @param  {Object} condition 文章分类和文章名，分页
     * @return {[type]}        [description]
     */
    getArticles (condition, page, pageSize) {
        return ajax({
            url: '/Article/QueryArticles',
            method: 'post',
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**
     * 文章管理-文章列表-新增/编辑文章
     * @param  {Object} artile 文章详情
     */
    addArt(artile, auth = true) {
        return ajax({
            url: '/Article/AddArticle',
            method: 'post',
            auth,
            body: artile,
        })	
    },
    /**
     * 文章管理-文章列表-批量删除文章
     * @param  {Array} articleIds 文章ID
     */
    delArt (articleIds, auth = true) {
        return ajax({
            url: '/Article/DelArticle',
            method: 'post', 
            auth,
            body: articleIds
        })  
    },
    /**
     * 获取公司介绍、关于我们、联系我们、了解我们等
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getCompanyInfos() {
        return ajax({
            url: '/Article/GetCompanyInfos',
            method: 'get'
        })
    }			
}