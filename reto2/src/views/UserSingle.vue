<template>
    <div class="single">
        <div v-if="user != null" class="data">
            <h3>Info User</h3>
            <div class="row">
                <h4>UserName</h4>
                <p>{{user.username.toUpperCase()}}</p>
            </div>
            <div class="row">
                <h4>Name</h4>
                <p>{{user.name}}</p>
            </div>
            <div class="row">
                <h4>Email</h4>
                <p>{{user.email}}</p>
            </div>
            <div class="row">
                <h4>Address</h4>
                <p>{{user.address.street}} {{user.address.suite}} - {{user.address.city}}</p>
            </div>
            <div class="row">
                <h4>Phone</h4>
                <p>{{user.phone}}</p>
            </div>
            <div class="row">
                <h4>WebSite</h4>
                <p>{{user.website}}</p>
            </div>
        </div>
        <div class="link-back">
            <router-link to="/users">Regresar</router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import store from '@/store';

export default {
    name: 'UserSingle',
    computed: {
        ...mapState('UserStore', ['user'])
    },
    methods: {
        ...mapActions('UserStore', ['getUser'])
    },
    created(){
        this.getUser(this.$route.params.id);
    }
}
</script>