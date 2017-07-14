import * as types from '../mutationTypes'

const state = {
    showImg: {
        isShow: false,
        file: ''
    }
}

const mutations = {
    [types.BIG_IMG](state, data){
        state.showImg = data
    }
}

export default{
    state,
    mutations
}