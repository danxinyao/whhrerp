import * as types from '../mutationTypes'

const state = {
    status: 0
}

const mutations = {
    [types.EDITOR](state, status){
        state.status = status
    }
}

export default{
    state,
    mutations
}