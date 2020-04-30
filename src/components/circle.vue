<template>
  <div class="circle">
    <img src="https://res.cmicrwx.cn/rs/res3/contractyoung/assets/images/newspring/20200315spring/19card/circle.png" alt />
  </div>
</template>

<style scoped>
div.circle {
  width: 2.86rem;
  height: 2.86rem;
  margin-left: 2.28rem;
  -webkit-animation: 6s linear 0s infinite normal rotate;
  animation: 6s linear 0s infinite normal rotate;
}
.circle img {
  width: 100%;
}

@-webkit-keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>