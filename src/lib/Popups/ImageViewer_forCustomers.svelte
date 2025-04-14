<script>
    import {open_popup, close_popup, save_popup, initial_sizing, resize_image} from "$lib/Scripts/popup.js";
    import { onMount } from "svelte";
    import '$lib/Styles/imageViewer.scss';
    import { image_forCustomers } from '@/stores/global.js';
    import { writable } from 'svelte/store';

    $: image = $image_forCustomers;


    onMount(()=>{
        initial_sizing()
        
    })

</script>

<dialog id="imageViewer_forCustomers" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <button on:click={() => close_popup("imageViewer_forCustomers")} id="imageViewer_forCustomers-backButton" class="topButton">
                    <img src="IMG/Global/back.png" alt="">
                    <p>Vissza</p>
                </button>
                <button on:click={() => close_popup("imageViewer_forCustomers")} id="popup-closeButton" class="topButton">
                    <img src="IMG/Global/close.png" alt="">
                </button>
            </div>

            <div id="popup-div">
                <!--h3>Mi következik most?</h3>
                <ul>
                    <li>A product-popup image szekciójára on:clicket tenni, ami vagy a windows Megnyitás ablakot, vagy a képnézegetőt nyitja meg</li>
                    <li></li>
                    <li>
                        A product popupnál, ha a no-image képre kattintasz rá, akkor egyből a Megnyitás ablak jelenik meg, hogy feltölthesd a képet. <br>
                        Ha már van ott kép, akkor az imageViewer_forCustomers jelenik meg. <br>
                    </li>
                </ul-->

                {#if $image}
                    <img id="popup-img" class="imageViewer-image" src="data:image/png;base64,{image}" alt="Megjelenített kép">
                {:else}
                    <img id="popup-img" class="imageViewer-image" src="IMG/Global/no-image.png" alt="Megjelenített kép">
                {/if}



            </div>

            <div id="bottomRow">
                <div id="br-section2" class="br-section">
                    <button on:click={()=>resize_image(1 / 1.20)} id="minusButton" class="bottomButton thin">
                        <img src="IMG/Global/minus.png" alt="" id="minusImg">
                        <p id="minusText">Kicsinyítés</p>
                    </button>
                    <button on:click={()=>resize_image(1.20)} id="plusButton" class="bottomButton thin">
                        <img src="IMG/Global/plus.png" alt="" id="plusImg">
                        <p id="plusText">Nagyítás</p>
                    </button>
                </div>

            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    
    @media (min-width: 0px) {
        

    }
    @media (min-width: 300px) {


    }
    @media (min-width: 340px) {


    }
    @media (min-width: 404px) {

        #br-section2 {
            .bottomButton {
                width: 175px !important;

                img {
                    margin-left: 0px !important;
                    margin-right: 0px !important;
                }

                p {
                    display: block !important;
                    overflow: hidden !important;
                    width: unset;
                    text-align: center;
                }

            }


        }
        
    }
    @media (min-width: 468px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {


    }
    @media (min-width: 768px) {

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {
        
        
    }


    
</style>