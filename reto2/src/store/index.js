import Vue from 'vue'
import Vuex from 'vuex'

import UserStore from './modules/User';
import PostStore from './modules/Post';
import AlbumStore from './modules/Album';

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     usuario: {
    //         lista: []
    //     }
    // },
    // mutations: {},
    // actions: {},
    modules: {
        UserStore,
        PostStore,
        AlbumStore
    }
})