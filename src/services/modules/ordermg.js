import ajax from '../fetch'

export default{
    /**
     * @return {[Promise]}
     */
    getMallOrders () {
        return ajax({
            url: '/QueryMallOrders',
            method: 'post',
        })
    },
    refund () {
        return ajax({
            url: '/IsFavorites',
            method: 'post',
        })
    }
}