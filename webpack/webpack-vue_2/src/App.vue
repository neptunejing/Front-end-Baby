<template>
  <div id="app">
    <p class="hello">{{ message }}</p>
    <my-slides></my-slides>
  </div>
</template>

<script>
import MySlides from "./components/MySlides";
export default {
  name: 'App',
  components: { "my-slides": MySlides },
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