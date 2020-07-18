<template>
    <ul class="list">
        <Card v-for="item in list" :key="item.id" :item="item"/>
    </ul>
</template>

<script>
import Card from '@/components/CardAlbum.vue';

export default {
    name: 'ListCardAlbum',
    props: ['list'],
    components: {
        Card
    }
}
</script>