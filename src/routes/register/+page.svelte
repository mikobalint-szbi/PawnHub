<script>
    import Settings from "$lib/Pages/Settings.svelte";
    import { page } from "$app/stores"

    let isCustomer;

    if ($page.url.searchParams.get("for") == null || $page.url.searchParams.get("for") == "customer"){
        
        isCustomer = true
    }
    else {
        isCustomer = false
    }
    
    
</script>
<Settings isRegistration={true} isCustomer={isCustomer}/>