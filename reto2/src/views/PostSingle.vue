<template>
    <div class="single">
        <div v-if="post != null" class="data">
            <h3>Info Post</h3>
            <div class="row">
                <h4>Title</h4>
                <p>{{post.title.toUpperCase()}}</p>
            </div>
            <div class="row">
                <h4>Body</h4>
                <p>{{post.body}}</p>
            </div>
        </div>
        <div class="link-back">
            <router-link to="/posts">Regresar</router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import store from '@/store';

export default {
    name: 'PostSingle',
    computed: {
        ...mapState('PostStore', ['post'])
    },
    methods: {
        ...mapActions('PostStore', ['getPost'])
    },
    created(){
        this.getPost(this.$route.params.id);
    }
}
</script>