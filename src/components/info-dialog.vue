<template>
  <div class="modal-bg" v-show="show">
    <div class="wrapper">
      <div class="modal-container">
        <van-icon
          name="close"
          @click="hideModal"
          class="close-icon close-icon-model close-icon-action"
        />
        <div class="modal-header">{{ title }}</div>
        <div class="modal-main">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  name: 'modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    hideModal() {
      this.$emit('hideModal')
    }
  }
}
</script>

<style scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.modal-container {
  width: 80%;
  font-size: 0.28rem;
  color: #262626;
  line-height: 0.6rem;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.3rem 0.3rem 1rem;
  background-color: #fff;
}

.modal-header {
  color: #333;
  font-size: 0.36rem;
  text-align: center;
  margin: 0 auto 0.2rem;
  font-weight: 600;
}
.modal-main {
  position: relative;
  height: 8.5rem;
  overflow: auto;
}

.modal-main > p {
  text-align: justify;
}

.close-icon {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 'vant-icon';
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  z-index: 1000000;
}

.close-icon-action {
  position: fixed;
  margin-top: -0.1rem;
  margin-left: 68%;
  padding: 0 12px;
  color: #969799;
  font-size: 26px;
  line-height: inherit;
}

.close-icon-model:before {
  content: '\F034';
}
</style>
