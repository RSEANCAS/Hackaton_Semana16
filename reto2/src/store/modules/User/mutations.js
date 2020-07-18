import types from './mutations-type';

const mutations = {
    [types.setList](state, list) {
        state.list = list;
    }
}

export default mutations;