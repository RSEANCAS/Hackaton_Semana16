<template>
    <li class="card">
        <div class="row">
            <strong>UserName: </strong> <span>{{ item.username }}</span>
        </div>
        <div class="row">
            <strong>Name: </strong> <span>{{ item.name }}</span>
        </div>
        <div class="row button">
            <router-link :to="`/user/${item.id}`">Ver más</router-link>
        </div>
    </li>
</template>

<script>
export default {
    name: 'CardUser',
    props: ['item']
}
</script>