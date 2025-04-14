<script>
    import {open_popup, close_popup, save_popup, resize_image, initial_sizing} from "$lib/Scripts/popup.js";
    import { onMount } from "svelte";
    import '$lib/Styles/imageViewer.scss';



    onMount(()=>{
        initial_sizing()
    })

</script>

<dialog id="imageViewer" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <button on:click={() => close_popup("imageViewer")} id="imageViewer-backButton" class="topButton">
                    <img src="IMG/Global/back.png" alt="">
                    <p>Vissza</p>
                </button>
                <button on:click={() => close_popup("imageViewer")} id="popup-closeButton" class="topButton">
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
                        Ha már van ott kép, akkor az imageViewer jelenik meg. <br>
                    </li>
                </ul-->

                <img id="popup-img" class="imageViewer-image" src="IMG/sample.jpg" alt="">


            </div>

            <div id="bottomRow">
                <div id="br-section1" class="br-section">
                    <button on:click={() => {}} id="replaceButton" class="bottomButton">
                        <img src="IMG/Global/upload.png" alt="" id="replaceImg">
                        <p id="submitText">{Math.random() > 0.5 ? "Képfeltöltés" : "Csere"}</p>
                    </button>
                    <button on:click={() => open_popup("confirmDelete","productPic")} id="deleteButton" class="bottomButton">
                        <img src="IMG/Global/delete.png" alt="" id="deleteImg">
                        <p id="submitText">Törlés</p>
                    </button>
                </div>
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

</style>