<template>
    <ul>
        <Card v-for="item in list" :key="item.id" :item="item"/>
    </ul>
</template>

<script>
import Card from '@/components/CardPost.vue';

export default {
    name: 'ListCardPost',
    props: ['list'],
    components: {
        Card
    }
}
</script>