<script>
	import Header from '$lib/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header/>

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
</style>
