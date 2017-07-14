import * as types from '../mutationTypes.js'

export default {
    setBigImg: ({ commit }, data) => {
        commit(types.BIG_IMG, data)
    }
}