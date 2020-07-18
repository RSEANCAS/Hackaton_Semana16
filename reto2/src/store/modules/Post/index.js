import actions from './actions';
import mutations from './mutations';

const state = {
    list: [],
    post: null
}

const namespaced = true;
export default {
    state,
    namespaced,
    mutations,
    actions
}