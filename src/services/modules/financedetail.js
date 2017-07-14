import ajax from '../fetch'

export default{
    /**
     * @return {[Promise]}
     */
    QueryFinance(data) {
        return ajax({
            url: '/QueryFinance',
            method: 'post',
            body: data
        })
    }
}