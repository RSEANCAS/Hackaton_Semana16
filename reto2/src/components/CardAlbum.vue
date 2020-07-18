<template>
    <li class="card">
        <div class="row">
            <strong>Title: </strong> <span>{{ item.title }}</span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'CardAlbum',
    props: ['item']
}
</script>

<style lang="scss" scoped>
    .card {
        .row{
            margin: 0 !important;
        }
    }
</style>