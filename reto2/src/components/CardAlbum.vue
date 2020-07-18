<template>
    <li>
        <div>
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