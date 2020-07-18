<template>
    <div class="users-view">
        <h2>User List</h2>
        <ListCard :list="list"/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import store from '@/store';
import ListCard from '@/components/ListCardUser';

export default {
    name: 'User',
    computed: {
        ...mapState('UserStore', ['list'])
    },
    components: {
        ListCard
    },
    methods: {
        ...mapActions('UserStore', ['getUsers'])
    },
    created(){
        this.getUsers();
    }
}
</script>