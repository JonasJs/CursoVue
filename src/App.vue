<template>
  <section id="app">
    <Navbar> </Navbar>
    <router-view></router-view>
  </section>
</template>

<script>
import Navbar from '@/components/shared/Navbar';
export default {
  name: 'app',
  
  components:{
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
