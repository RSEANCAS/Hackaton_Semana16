import types from './mutations-type';

const mutations = {
    [types.setList](state, list) {
        state.list = list;
    },
    [types.setPost](state, item) {
        state.post = item;
    }

}

export default mutations;