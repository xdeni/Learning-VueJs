<template>
	<v-app>
		<Nav />
		<Toolbar />
		<Carousel />
		<Footer />
	</v-app>
</template>

<script>
import Carousel from './components/widgets/Carousel'
import Toolbar 	from './components/template/Toolbar'
import Footer 	from './components/template/Footer'
import Nav 		from './components/template/Nav'

export default {
	components: { Toolbar, Carousel, Footer, Nav }
}
</script>
