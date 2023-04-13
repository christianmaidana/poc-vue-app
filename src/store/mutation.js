import * as types from './mutation-types'

export const mutations = {
    [types.INIT_FILES] (state, payload) {
        state.files.push(...payload)
    },
    [types.ADD_FILE] (state, payload) {
        state.files.push(payload)
    },
    [types.REMOVE_FILE] (state, id) {
        const index = state.files.findIndex((file) => file.id === id);
        state.files.splice(index, 1);
    }
}