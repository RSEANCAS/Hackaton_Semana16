<template>
    <div class="albums-view">
        <h2>Album List</h2>
        <ListCard :list="list"/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import store from '@/store';
import ListCard from '@/components/ListCardAlbum';

export default {
    name: 'AlbumView',
    computed: {
        ...mapState('AlbumStore', ['list'])
    },
    components: {
        ListCard
    },
    methods: {
        ...mapActions('AlbumStore', ['getAlbums'])
    },
    created(){
        this.getAlbums();
    }
}
</script>