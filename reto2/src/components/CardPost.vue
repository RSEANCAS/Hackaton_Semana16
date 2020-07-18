<template>
    <li>
        <div>
            <strong>Title: </strong> <span>{{ item.title }}</span>
            <strong>Body: </strong> <span>{{ item.body }}</span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'CardPost',
    props: ['item']
}
</script>