import * as types from '../mutationTypes.js'

export default {
    setEditorStatus: ({ commit }, status) => {
        commit(types.EDITOR, status)
    }
}