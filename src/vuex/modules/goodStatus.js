import * as types from '../mutationTypes'

const state = {
    stateList: []
}

const mutations = {
    [types.goodState](state, data){
        state.stateList = data
    }
}

export default{
    state,
    mutations
}