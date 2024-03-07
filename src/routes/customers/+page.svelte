<script>
    import ImageViewer from "$lib/Popups/ImageViewer.svelte";
    import {open_product, close_product, save_product} from "$lib/Popups/functions.js";
    import {onMount} from 'svelte';

    onMount(()=>{
        open_product(true)
    });

</script>
<section id="popupBody">
    <ImageViewer/>
</section>
<section id="body">
    
    <h1 style="text-align: center; margin-top:100px;width:100%;">A Products oldalról lemásolt több oldalon is előforduló komponensek css-ét ne másoljam át a többi oldalra. Tegyem inkább a globális style.css-be, ahonnan az összes oldal eléri.</h1>




</section>
<style lang="scss">

</style>