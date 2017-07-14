import * as types from '../mutationTypes'

const state = {
    authToken: ''
}

const mutations = {
    [types.AUTH](state, token){
        state.authToken = token
    }
}

export default{
    state,
    mutations
}