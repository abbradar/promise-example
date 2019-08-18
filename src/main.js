import Vue from 'vue'
import App from './App.vue'

const test = (async () => {
    return null
})()
// eslint-disable-next-line
console.log("sanity check", Promise.prototype, Object.getPrototypeOf(test), Object.getPrototypeOf(test) === Promise.prototype)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
