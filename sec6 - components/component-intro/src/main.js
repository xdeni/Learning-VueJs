import Vue from 'vue'
import App from './App.vue'
import Counters from './components/counters.vue'
import Counter from './components/counter.vue'

Vue.component('Counters', Counters)
Vue.component('Counter', Counter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
