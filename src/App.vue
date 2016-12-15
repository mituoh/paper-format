<template>
  <div id="app">
    <format></format>
  </div>
</template>

<script>
import Format from './components/Format';

export default {
  name: 'app',
  components: {
    Format,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
