<script>
	import Header from '$lib/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<header>
		<Header id="header"/>
	</header>


		<slot />

	<footer>
		
	</footer>
</div>

<style>
	.app{
		height: 100vh;
		display: flex;
		flex-direction: column;
		
	}

	header{
		z-index: 100;
	}
</style>
