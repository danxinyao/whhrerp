/**
 * 登录注册
 */
import ajax from '../fetch'
import {rootPath} from '../fetch/config'

export default{
    /**
     * 登录
     * @param  {object} data 参数
     * @return {[type]}      [description]
     */
    login(data) {
        return ajax({
            url: '/oauth2/token',
            formJson: false,
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            path: rootPath.substring(0, rootPath.length - 4)
        })
    },
    getLogins (page, pageSize,auth = true) {
        return ajax({
            url: '/Login/QueryLogins',
            method: 'post',
            auth,
            body: {
                pageSize: pageSize,
                page: page
            }
        })
    },
    stopAndStartLogin (loginid,auth = true) {
        return ajax({
            url: '/Login/StopAndStartLogin?loginId='+loginid,
            method: 'get',
            auth,
        })
    },
    saveLogin (login,auth = true) {
        return ajax({
            url: '/Login/SaveLogin',
            method: 'post',
            auth,
            body: login
        })
    },
    delLogin (loginId,auth = true) {
        return ajax({
            url: '/Login/DelLogin?loginId='+loginId,
            method: 'get',
            auth
        })
    },
    getLoginMenus (loginName,auth = true) {
        return ajax({
            url: '/Login/QueryLoginMenus?loginName='+loginName,
            method: 'get',
            auth
        })
    },
    resetLoginPwd (dto,auth = true) {
        return ajax({
            url: '/Login/ReSetLoginPwd',
            method: 'post',
            auth,
            body: dto
        })
    },
}