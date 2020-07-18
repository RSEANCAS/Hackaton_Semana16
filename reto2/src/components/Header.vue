<template>
    <header class="header">
        <div class="container">
            <router-link to="/" class="logo">
                <img src="../assets/logo.svg" />
            </router-link>
            <nav class="nav">
                <router-link to="/users">Users</router-link>
                <router-link to="/posts">Posts</router-link>
                <router-link to="/albums">Albums</router-link>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
#app{
    &>.header{
        display: flex;
        box-shadow: black 0px 0px 6px;
        &>.container{
            display: flex;
            justify-content: space-between;
            width: var(--width);
            // padding: 20px 0px;
            align-items: center;
            &>.logo{
                display: flex;
            }
            &>.nav{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-column-gap: 10px;
                & a{
                    color: #333;
                }
            }
        }
    }
}
</style>