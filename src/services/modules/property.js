import ajax from '../fetch'

export default{
    /**
     * 获取属性列表
     * @param  {[type]}  query [description]
     * @param  {Boolean} auth  [description]
     * @return {[type]}        [description]
     */
    getProperty(query, auth = true) {
        return ajax({
            url: '/Property/QueryProperty',
            method: 'post',
            auth,
            body: query
        })
    },
    /**
     * 添加属性
     * @param {[type]}  query [description]
     * @param {Boolean} auth  [description]
     */
    addProperty(query, auth = true) {
        return ajax({
            url: '/Property/AddProperty',
            method: 'post',
            auth,
            body: query
        })
    },
    /**
     * 删除属性
     * @param  {[type]}  proId [description]
     * @param  {Boolean} auth  [description]
     * @return {[type]}        [description]
     */
    delProperty(proId, auth = true) {
        return ajax({
            url: '/Property/DelProperty?propertyId=' + proId,
            method: 'get',
            auth
        })
    },
    /**
     * 获取规格集合
     * @return {array} [description]
     */
    getSizes() {
        return ajax({
            url: '/Property/QuerySize',
            method: 'post'
        })
    },
    /**
     * 新增规格
     * @param {object}  data name, sizeID
     * @param {Boolean} auth [description]
     */
    addSize(data, auth = true) {
        return ajax({
            url: '/Property/AddSize',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 批量删除规格
     * @param  {array}  idList sizeID集合
     * @param  {Boolean} auth   口令
     * @return {[type]}         [description]
     */
    delSizes(idList, auth = true) {
        return ajax({
            url: '/Property/DelSize',
            method: 'post',
            auth,
            body: {
                ids: idList
            }
        })
    },
    /**
     * 获取颜色集合
     * @return {array} [description]
     */
    getColors() {
        return ajax({
            url: '/Property/QueryColors',
            method: 'post'
        })
    },
    // 模糊匹配颜色集合
    getColor(data) {
        return ajax({
            url: '/DropDownList/GetColor?name=' + data.name + '&deptId=' + data.deptId,
            method: 'get'
        })
    },
    getColorPageList(data, auth = true) {
        return ajax({
            url: '/Property/QueryColorsPageList',
            method: 'post',
            body: data,
            auth
        })
    },
    getSizePageList(data, auth = true) {
        return ajax({
            url: '/Property/QuerySizesPageList',
            method: 'post',
            body: data,
            auth
        })
    },
    // 模糊匹配规格集合
    getSize(data) {
        return ajax({
            url: '/DropDownList/GetSize?name=' + data.name + '&deptId=' + data.deptId,
            method: 'get'
        })
    },
    /**
     * 新增颜色
     * @param {object}  data name、colorId
     * @param {Boolean} auth [description]
     */
    addColor(data, auth = true) {
        return ajax({
            url: '/Property/AddColor',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 删除颜色
     * @param  {array}  colorID集合
     * @param  {Boolean} auth    口令
     * @return {[type]}          [description]
     */
    delColors(idList, auth = true) {
        return ajax({
            url: '/Property/DelColor',
            method: 'post',
            auth,
            body: {
                ids: idList
            }
        })
    }

}