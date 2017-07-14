import ajax from '../fetch'

export default{
    /*
        商品管理-商品分类
    */
    /**
     * 新增一级分类
     * @param  {string} name 分类名
     */
    addFirstDept(name, auth = true) {
        return ajax({
            url: '/Dept/AddFirstDept?Name=' + name,
            method: 'post',
            auth
        })
    },
    /**
     * 新增子分类
     * @param  {data} name 分类名和父级分类ID
     */
    addSubDept(data, auth = true) {
        return ajax({
            url: '/Dept/AddSubDept?Name=' + data.Name + '&ParentID=' + data.ParentID,
            method: 'post',
            auth
        })
    },
    /**
     * 修改分类
     * @param  {Object} data 分类名和父级分类ID
     */
    editDept(data, auth = true) {
        return ajax({
            url: '/Dept/EditDept?DeptID=' + data.DeptID + '&Name=' + data.Name,
            method: 'post',
            auth
        })
    },
    /**
     * 删除分类
     * @param  {string} deptID 分类ID
     */
    delDept(deptID, auth = true) {
        return ajax({
            url: '/Dept/DelDept?DeptID=' + deptID,
            method: 'post',
            auth
        })
    }
}