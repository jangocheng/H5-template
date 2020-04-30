<template>
  <!-- !请务必在最外层div中添加id="app" 避免预渲染后页面vue绑定事件失效 -->
  <div id="app">
    <button @click="clickme">{{msg}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'click me'
    }
  },
  methods: {
    clickme() {
      alert('hello world')
    }
  }
}
</script>


