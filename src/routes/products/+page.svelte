<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import Shop_Products from "$lib/Pages/Shop_Products.svelte";
    import Cust_Products from "$lib/Pages/Cust_Products.svelte";
    import Layout from "../+layout.svelte";

    
    let user = JSON.parse(localStorage["user"] ?? "[]");
    let isCustomer = user.isCustomer;

    let reloaded = sessionStorage["productsPage_reloaded"]

    if (!isCustomer && !reloaded) {
        window.location.reload();
        sessionStorage["productsPage_reloaded"] = "true"
    }

</script>



{#if isCustomer}
    <Cust_Products/>
{:else}
    <Shop_Products/>
{/if}



<style lang="scss">
    
</style>