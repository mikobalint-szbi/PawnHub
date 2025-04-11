<script>
    import { onMount } from "svelte";
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import Shop_Loans from "$lib/Pages/Shop_Loans.svelte";
    import Cust_Loans from "$lib/Pages/Cust_Loans.svelte";
    import Layout from "../+layout.svelte";


    let user;
    let isCustomer;

    if (localStorage["auth_token"]) {
        user = JSON.parse(localStorage["user"]);
        isCustomer = user.isCustomer;
    }
    else {
        location.assign("/")
    }

    onMount(()=>{

    })


</script>




{#if isCustomer}
    <Cust_Loans/>
{:else}
    <Shop_Loans/>
{/if}



<style lang="scss">
    
</style>