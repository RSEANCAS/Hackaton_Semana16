<template>
    <ul class="list">
        <Card v-for="item in list" :key="item.id" :item="item"/>
    </ul>
</template>

<script>
import Card from '@/components/CardUser.vue';

export default {
    name: 'ListCardUser',
    props: ['list'],
    components: {
        Card
    }
}
</script>