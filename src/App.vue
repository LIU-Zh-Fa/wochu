<template>
  <div id="app">
      <div v-if="$store.state.isLoad">
            <Loading />
      </div>
    <router-view/>
  </div>
</template>
<script>
import Loading from '@/views/loading'
export default {
    components:{
        Loading
    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
