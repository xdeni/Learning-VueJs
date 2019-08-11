import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('wordLength', function (value) {
	let words = value.split(' ')
	let words_length = words.map(word => `${word} (${word.length})` )
	return words_length.join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
