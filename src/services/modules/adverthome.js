import ajax from '../fetch'

export default{
    /**
     * @return {[Promise]}
     */
    getAdvertPosit (data, auth = true) {
        return ajax({
            url: '/QueryAdvertisingPositions ',
            method: 'post',
            body: data,
            auth
        })
    },
    eidtAdvertPosit (data, auth = true) {
        return ajax({
            url: '/EidtAdvertisingPosition ',
            method: 'post',
            body: data,
            auth
        })
    },
    addAdvertPosit (data, auth = true) {
    	return ajax({
    		url: '/AddAdvertisingPosition ',
    		method: 'post',
    		body: data,
            auth
    	})
    }
}