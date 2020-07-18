<template>
    <li class="card">
        <div class="row">
            <strong>Title: </strong> <span>{{ item.title }}</span>
        </div>
        <div class="row button">
            <router-link :to="`/post/${item.id}`">Ver más</router-link>
        </div>
    </li>
</template>

<script>
export default {
    name: 'CardPost',
    props: ['item']
}
</script>