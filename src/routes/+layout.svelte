<script>
	import Header from '$lib/Header.svelte';
	import '$lib/Styles/style.scss';
	import '$lib/Styles/popup.scss';
	import '$lib/Styles/tablePages.scss';
	import '$lib/Styles/productCard.scss';
	import '$lib/Styles/messages.scss';
	import ProductPopup from '$lib/Popups/ProductPopup.svelte';
	import ImageViewer from '$lib/Popups/ImageViewer.svelte';
	import CustomerPopup from '$lib/Popups/CustomerPopup.svelte';
	import LoanPopup from '$lib/Popups/LoanPopup.svelte';
	import ProductChooser from '$lib/Popups/ProductChooser.svelte';
	import CustomerChooser from '$lib/Popups/CustomerChooser.svelte';
	import LoanPopup_forCustomers from '$lib/Popups/LoanPopup_forCustomers.svelte';
	import ProductPopup_forCustomers from '$lib/Popups/ProductPopup_forCustomers.svelte';

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
			<LoanPopup_forCustomers/>
			<ProductPopup_forCustomers/>
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
