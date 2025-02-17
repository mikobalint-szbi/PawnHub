<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
    import Shop_Products from "$lib/Pages/Shop_Products.svelte";
    import Cust_Products from "$lib/Pages/Cust_Products.svelte";
    import Layout from "../+layout.svelte";

    let isCustomer = false

</script>



{#if isCustomer}
    <Cust_Products/>
{:else}
    <Shop_Products/>
{/if}



<style lang="scss">
    
</style>