import * as types from '../mutationTypes.js'

export default {
    setState: ({ commit }, data) => {
        commit(types.goodState, data)
    }
}