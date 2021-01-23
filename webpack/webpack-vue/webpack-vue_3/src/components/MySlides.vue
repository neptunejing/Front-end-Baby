<template>
  <div class="slide-container">
    <div class="slide-items">
      <div v-for="item in imgs" :key="item.index" class="slide-item"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
    }
  }
}
</script>
<style lang="scss" scoped>
$container-width: 800px;
$container-height: 450px;
$imgs-number: 3;

.slide-container {
  overflow: hidden;
  width: $container-width;
  height: $container-height;
  margin: auto;
  color: #fff;
}
.slide-items {
  width: $container-width * $imgs-number;
  animation: marginLeft 10.5s infinite;
}

.slide-items .slide-item {
  float: left;
  width: $container-width;
  height: $container-height;
}
.slide-items .slide-item:nth-child(1) {
  background: url("../assets/imgs/a.jpg");
  background-size: $container-width $container-height;
}

.slide-items .slide-item:nth-child(2) {
  background: url("../assets/imgs/b.jpg");
  background-size: $container-width $container-height;
}

.slide-items .slide-item:nth-child(3) {
  background: url("../assets/imgs/c.jpg");
  background-size: $container-width $container-height;
}
@keyframes marginLeft {
  0%,
  25% {
    margin-left: 0;
  }
  35%,
  65% {
    margin-left: -800px;
  }
  75%,
  95% {
    margin-left: -1600px;
  }

  100% {
    margin-left: 0;
  }
}
</style>