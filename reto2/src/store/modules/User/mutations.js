import types from './mutations-type';

const mutations = {
    [types.setList](state, list) {
        state.list = list;
    },
    [types.setUser](state, item) {
        state.user = item;
    }
}

export default mutations;