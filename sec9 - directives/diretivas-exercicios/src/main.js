import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('spotlight', (el, binding, vnode) => {
	console.log(binding.value)
	if (binding.arg == 'late') {
		setTimeout(() => {
			if(binding.modifiers['blink']) {
				let colorOne = 'green'
				let colorTwo = 'red'
				let actualColor = colorOne
				
				setInterval(() => {
					actualColor = actualColor === colorOne ? colorTwo : colorOne
					el.style.backgroundColor = actualColor
				}, binding.value.interval)
			} else {
				el.style.backgroundColor = 'red'
			}
		}, binding.value.late)
	}
	else el.style.backgroundColor = 'red'
})

new Vue({
	render: h => h(App),
}).$mount('#app')
