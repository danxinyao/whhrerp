import ajax from '../fetch'

export default{
      /**
     * 获取角色列表
     * @param  {string} page pageSize 分页
     * @return {[type]}        [description]
     */
    getRoles (page, pageSize,auth = true) {
        return ajax({
            url: '/Role/QueryRoles',
            method: 'post',
            auth,
            body: {
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**
     * 获取角色详情
     * @param  {string} roleId 角色ID
     * @return {[type]}        [description]
     */
    getRole (roleId,auth = true) {
        return ajax({
            url: '/Role/QueryRole?roleId='+roleId,
            method: 'get',
            auth
        })
    },
     /**
     * 获取全部的菜单
     * @param  {boolean} auth 令牌
     * @return {[type]}        [description]
     */
    getMenus (auth = true) {
        return ajax({
            url: '/Role/QueryMenus',
            method: 'get',
            auth
        })
    },
     /**
     * 新增角色
        @param  {Array} menusForm 菜单列表
     * @param  {boolean} auth 令牌
     * @return {[type]}        [description]
     */
    addRoles (menusForm,auth = true) {
        return ajax({
            url: '/Role/SaveRole',
            method: 'post',
            auth,
            body: menusForm
        })
    },
    /**
     * 删除角色
        @param  {Array} roleids 角色ID
     * @param  {boolean} auth 令牌
     * @return {[type]}        [description]
     */
    delroles (roleids,auth = true) {
        return ajax({
            url: '/Role/DelRoles',
            method: 'post',
            auth,
            body: roleids
        })
    },
      /**
     * 获取全部角色-下拉框
     * @param  {boolean} auth 令牌
     * @return {[type]}        [description]
     */
    getAllRoles (auth = true) {
        return ajax({
            url: '/Role/QueryAllRoles',
            method: 'get',
            auth
        })
    },
}