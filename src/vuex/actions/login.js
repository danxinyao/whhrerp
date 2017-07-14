import * as types from '../mutationTypes.js'

export default {
    setAuth: ({ commit }, token) => {
        commit(types.AUTH, token)
    }
}