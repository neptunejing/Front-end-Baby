<template>
  <div id="app">
    <p class="hello">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'hello Webpack! 😎'
    }
  }
}
</script>

<style scoped>
.hello {
  color: #000000;
  text-align: center;
  font-size: 20px;
}
</style>