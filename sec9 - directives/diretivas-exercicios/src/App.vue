<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'text directive'"></p>
		<p v-spotlight:late.blink="{late: 3000, interval: 200}">phrase with directive</p>
		<p v-spotlight:late="{late: 4000, interval: 200}">phrase with directive</p>
		<p v-spotlight>phrase with directive</p>
		<p v-local-spotlight.blink="{bgColor: 'lightblue'}"> spotlight local</p>
		<p v-local-spotlight="{bgColor: 'black'}"> spotlight local</p>
		<p v-local-spotlight.blink="{bgColor: 'black', interval: 5}"> spotlight local</p>
	</div>
</template>

<script>
export default {
	directives: {
		'local-spotlight': function (el, binding, vnode) {
			binding.modifiers['blink'] ? (
				setInterval(() => {
					el.style.backgroundColor = 
						el.style.backgroundColor == binding.value.bgColor ?
						'chocolate' : binding.value.bgColor
				}, binding.value.interval || 500)
			) : el.style.backgroundColor = binding.value.bgColor
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
