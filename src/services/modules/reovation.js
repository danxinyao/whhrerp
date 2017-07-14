import ajax from '../fetch'

export default{
    /**
     * @return {[Promise]}
     */
    getHouseTypes(data) {
        return ajax({
            url: '/QueryHouseTypes',
            method: 'post',
            body: data
        })
    },
    addDec(data, auth = true) {
        return ajax({
            url: '/AddDecorationEffect',
            method: 'post',
            auth,
            body: data
        })
    },
    delDec(decEffId, auth = true) {
    	return ajax({
    		url: '/DecorationEffect/DelDecorationEffect?DecorationEffectID='+decEffId,
    		method: 'post',
            auth
    	})
    }
}