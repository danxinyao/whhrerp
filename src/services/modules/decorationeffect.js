import ajax from '../fetch'

export default{
    /**
     * 获取装修效果图列表
     * @param  {Object} query 装修类型和分页
     * @return {[type]}        [description]
     */
    getDecorationEffects(query,page,pageSize) {
        return ajax({
            url: '/DecorationEffect/QueryDecorationEffects',
            method: 'post',
            body: {
            	condition: query,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**
     * 新增/修改效果图
     * @param  {Object} decAct 效果图详情
     */
    addDecorationEffect(decAct, auth = true) {
        return ajax({
            url: '/DecorationEffect/SaveDecorationEffect',
            method: 'post',
            auth,
            body: decAct
        })
    },
    /**
     * 批量删除效果图
     * @param  {string} decEffId 效果图ID
     */
    delDecEffect(decEffId,auth = true) {
        return ajax({
            url: '/DecorationEffect/DelDecorationEffect?DecorationEffectID='+decEffId,
            method: 'post',
            auth
        })
    }
}