<script>
	import Header from '$lib/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header/>

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>

</style>
