<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
$width: 800px;

:root{
  --width: #{$width};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1em;
}

#app{
  display: flex;
  flex-direction: column;
  widows: 100%;
  .container {
    margin: auto;
  }
}
</style>
