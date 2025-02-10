<script>
	import Header from '$lib/Header.svelte';
	import './style.scss';
	import './popup.scss';
	import './tablePages.scss';
	import ProductPopup from '$lib/Popups/ProductPopup.svelte';
	import ImageViewer from '$lib/Popups/ImageViewer.svelte';
	import CustomerPopup from '$lib/Popups/CustomerPopup.svelte';
	import LoanPopup from '$lib/Popups/LoanPopup.svelte';
	import ProductChooser from '$lib/Popups/ProductChooser.svelte';
	import CustomerChooser from '$lib/Popups/CustomerChooser.svelte';


</script>

<div class="app">
	<header>
		<Header/>
	</header>
		<section id="popupBody">
			<ProductPopup/>
			<CustomerPopup/>
			<ImageViewer/>
			<LoanPopup/>
			<ProductChooser/>
			<CustomerChooser/>
		</section>

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
