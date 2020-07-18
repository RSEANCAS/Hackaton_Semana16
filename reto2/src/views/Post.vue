<template>
    <div class="posts-view">
        <h2>Post List</h2>
        <ListCard :list="list"/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import store from '@/store';
import ListCard from '@/components/ListCardPost';

export default {
    name: 'PostView',
    computed: {
        ...mapState('PostStore', ['list'])
    },
    components: {
        ListCard
    },
    methods: {
        ...mapActions('PostStore', ['getPosts'])
    },
    created(){
        this.getPosts();
    }
}
</script>