<template>
<div>
  <Indesition />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Counter :start="100"/> -->
</div>
</template>

<script>
// import Counter from './components/Counter.vue'
import Indesition from './components/Indesition.vue'
export default {
  name: 'App',
  components: {
      // Counter
      Indesition
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
