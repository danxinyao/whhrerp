import ajax from '../fetch'

export default{
    /**
     * @return {[Promise]}
     */
    addDefinePage (definepage) {
        return ajax({
            url: '/PageConfig/AddDefinePage',
            method: 'post',
            body: definepage
        })
    },
    getDefinePage (pageid) {
        return ajax({
            url: '/PageConfig/QueryDefinePage',
            method: 'post',
            body: {
                pageId: pageid
            }
        })
    },
}