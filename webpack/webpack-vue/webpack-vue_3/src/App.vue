<template>
  <div id="app">
    <p class="hello">
      {{ message }}
      <button class="btn" @click="showSlides">开启/关闭轮播图</button>
    </p>
    <my-slides v-if="ifShowSlides"></my-slides>
  </div>
</template>

<script>
// import MySlides from "./components/MySlides";
const MySlides = () => import("./components/MySlides");
export default {
  name: 'App',
  components: { "my-slides": MySlides },
  data() {
    return {
      message: 'hello Webpack! 😎',
      ifShowSlides: false,
    }
  },
  methods: {
    showSlides() {
      this.ifShowSlides = !this.ifShowSlides;
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
.btn {
  line-height: 2.5;
  border: 0;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(6, 118, 246);
}
</style>