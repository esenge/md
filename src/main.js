import Vue from 'vue'
import App from './App.vue'
import styles from './assets/styles/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App, styles),
}).$mount('#app')
