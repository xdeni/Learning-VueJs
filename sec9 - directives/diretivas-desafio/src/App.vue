<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<div v-mouse:click="meuClick"> 
			<span></span>
		</div>
		<input type="number" v-model="width"/>
	</div>
</template>

<script>
export default {
	data () {
		return {
			x: 0,
			y: 0,
			width: 500,
			height: 500,
			newX: 0,
			oldWidth: 500
		}
	},
	watch: {
		width () {
			const div = document.querySelector('#app div')
			div.style.width = this.width + 'px'
			div.style.height = this.height + 'px'

			const span = document.querySelector('#app div span')
			this.newX = this.oldWidth - this.width
			console.log(this.newX, this.width)

			span.style.left = this.x - this.newX - 10 + 'px'
			span.style.top = this.y - 10 + 'px'
		}
	},
	methods: {
		meuClick (e) {
			const span = document.querySelector('#app div span')
			this.x = e.offsetX
			this.y = e.offsetY
			this.oldWidth = this.width

			span.style.left = this.x - 10 + 'px'
			span.style.top = this.y - 10 + 'px'
		}
	},
	directives: {
		mouse: (el, binding, vnode) => {
			el.addEventListener(binding.arg, binding.value)
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

#app div {
	width: 500px;
	height: 500px;
	position: relative;
	background: #000;;
}

#app div span {
	position: absolute;
	width: 20px;
	height: 20px;
	background: #fff;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
