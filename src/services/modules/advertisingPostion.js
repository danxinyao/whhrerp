import ajax from '../fetch'

export default{
    /**
     * @return {[Promise]}
     */
     // 广告位管理模块的接口
     /**
     * 获取广告位列表
     * @param  {Object} data 广告位类型和分页
     * @return {[type]}        [description]
     */
    getAdvertPosit (data, auth = true) {
        return ajax({
            url: '/AdvertisingPosition/QueryAdvertisingPositions',
            method: 'post',
            body: data,
            auth
        })
    },
     /**
     * 新增/编辑广告位
     * @param  {Object} advPos 广告详情
     */
    saveAdvertPosit (advPos, auth = true) {
        return ajax({
            url: '/AdvertisingPosition/SaveAdvertisingPosition',
            method: 'post',
            auth,
            body: advPos,   
        })
    },
    /**
     * 批量删除广告位
     * @param  {Array} adposid 广告ID
     */
    delAdvertPosit (adposid, auth = true) {
    	return ajax({
    		url: '/AdvertisingPosition/DelAdvertisingPosition',
    		method: 'post',
            body: adposid,
            auth
    	})
    },
    /**
     * 广告位排序
     * @param  {Object} avdID1 avdID2 广告ID
     */
    AdvPosSort (avdID1, avdID2,auth = true) {
        return ajax({
            url: '/AdvertisingPosition/AdvertisingPositionSort',
            method: 'post',
            auth,
            body: {
                advertisingPositionID1: avdID1,
                advertisingPositionID2: avdID2
            }
        })
    },
}