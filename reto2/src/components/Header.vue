<template>
    <header class="header">
        <div class="container">
            <router-link to="/">
                <img src="../assets/logo.svg" />
            </router-link>
            
            <nav id="nav">
                <router-link to="/users">Users</router-link> |
                <router-link to="/posts">Posts</router-link> |
                <router-link to="/albums">Albums</router-link>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
#app{
    &>.header{
        display: flex;
        &>.container{
            display: flex;
            justify-content: space-between;
            width: var(--width)
        }
    }
}
</style>