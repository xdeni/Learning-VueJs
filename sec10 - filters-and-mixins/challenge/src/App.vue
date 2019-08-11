<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ prhase | changeSpace }}</p>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ prhase | wordLength }}</p>
		<H2>COMPUTED MIXINS</H2>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ prhase1 }}</p>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ prhase2 }}</p>
	</div>
</template>

<script>
const computedPrhaseMixin = {
	computed: {
		prhase1 () {
			let words = this.prhase.split(' ')
			let words_length = words.map(word => `${word} (${word.length})` )
			return words_length.join(' ')
		},
		prhase2 () {
			return this.prhase.split(' ').join(', ')
		}
	}
}

export default {
	mixins: [computedPrhaseMixin],
	filters: {
		changeSpace (value) {
			return value.split(' ').join(', ')
		}
	}, 
	data () {
		return {
			prhase: 'Minha frase está aqui...',
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
