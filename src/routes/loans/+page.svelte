<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
    import Shop_Loans from "$lib/Pages/Shop_Loans.svelte";
    import Cust_Loans from "$lib/Pages/Cust_Loans.svelte";
    import Layout from "../+layout.svelte";

    let isCustomer = true

</script>



{#if isCustomer}
    <Cust_Loans/>
{:else}
    <Shop_Loans/>
{/if}



<style lang="scss">
    
</style>