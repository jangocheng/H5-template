import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import '@/assets/js/rem'
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('@/assets/js/vconsole.min.js')
  new VConsole()
}

new Vue({
  el: '#app',
  render: h => h(App),
  mounted() {
    // !You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
