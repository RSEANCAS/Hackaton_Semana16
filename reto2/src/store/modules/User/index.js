import actions from './actions';
import mutations from './mutations';

const state = {
    list: []
}

const namespaced = true;
export default {
    state,
    namespaced,
    mutations,
    actions
}