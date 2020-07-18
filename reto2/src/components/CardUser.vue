<template>
    <li>
        <div>
            <strong>UserName: </strong> <span>{{ item.username }}</span>
            <strong>Name: </strong> <span>{{ item.name }}</span>
            <strong>Email: </strong> <span>{{ item.email }}</span>
            <strong>Address: </strong> <span>{{ item.address.street }} {{ item.company.suite }}, {{ item.company.city }}</span>
            <strong>Phone: </strong> <span>{{ item.phone }}</span>
            <strong>WebSite: </strong> <span>{{ item.website }}</span>
            <strong>Empresa: </strong> <span>{{ item.company.name }}</span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'CardUser',
    props: ['item']
}
</script>