<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import { onMount } from "svelte";
    import { getNum } from "$lib/Scripts/functions.js"


    function initial_sizing() {
        let img = document.getElementById("popup-img")
        let styles = getComputedStyle(img)

        if (getNum(styles.height) > getNum(styles.width)) {

            img.style.setProperty("height", "95%", "important");
            img.style.setProperty("width", "unset", "important");

        }
        else {
            img.style.setProperty("height", "unset", "important");
            img.style.setProperty("width", "97%", "important");

        }
    }

    function resize_image(ratio){
        let img = document.getElementById("popup-img")
        let imgStyles = getComputedStyle(img)
        let h = getNum(imgStyles.height)
        let w = getNum(imgStyles.width)

        /*let container = document.getElementById("popup-div")
        let ch = container.clientHeight
        let cw = container.clientWidth*/

        img.style.setProperty("height", h*ratio + "px", "important");
        img.style.setProperty("width", w*ratio + "px", "important");

        /*if (ratio < 1) {

            if (h >= w && h < ch-170) {
                console.log(h < ch-170)
                img.style.setProperty("height", "95%", "important");
                img.style.setProperty("width", "unset", "important");
            }
            else if (w >= h && w < cw-170) {
                img.style.setProperty("height", "unset", "important");
                img.style.setProperty("width", "97%", "important");
            }
        }*/


    }

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

                <img id="popup-img" src="IMG/sample.jpg" alt="">


            </div>

            <div id="bottomRow">
                <button on:click={() => {}} id="replaceButton" class="bottomButton">
                    <img src="IMG/Global/upload.png" alt="" id="replaceImg">
                    <p id="submitText">{Math.random() > 0.5 ? "Képfeltöltés" : "Csere"}</p>
                </button>
                <button on:click={() => open_popup("confirmDelete", false, false)} id="deleteButton" class="bottomButton">
                    <img src="IMG/Global/delete.png" alt="" id="deleteImg">
                    <p id="submitText">Törlés</p>
                </button>
                <button on:click={()=>resize_image(1 / 1.20)} id="minusButton" class="bottomButton thin">
                    <img src="IMG/Global/minus.png" alt="" id="minusImg">
                </button>
                <button on:click={()=>resize_image(1.20)} id="plusButton" class="bottomButton thin">
                    <img src="IMG/Global/plus.png" alt="" id="plusImg">
                </button>
            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {
        
        #popup-div{
            width: 78vw !important;
            height: 70vh !important;
            max-width: 80vw !important;
            max-height: 70vh !important;
            height: fit-content;

        }

        .bottomButton{
            font-size: 19px;
            width: 110px;
        }


        #image{
            grid-row: 1 / 5;
        }


    }
    @media (min-width: 340px) {


        #image{
            grid-row: 1 / 6;
        }

        .bottomButton{
            font-size: 21px;
            width: 130px;
        }


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        .bottomButton{
            font-size: 23px;
            width: 195px;
            column-gap: 3px;
        }

        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;


        }

    }
    @media (min-width: 768px) {

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {


        #popup-div{
            width: 800px !important;

        }
        
        
        #popup-div{
            width: 800px !important;

        }
        
        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;

        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {
        #popup-div{
            width: 1100px !important;
        }

    }






    .bottomButton img{
        height: 70%;
    }

    .bottomButton.thin {
        width: 50px;
        display: flex;
        justify-content: center !important;

        img {
            margin: 0 !important;
            height: 70% !important;
        }
    }

    #deleteButton {
        margin-left: -5px
    }

    #minusButton {
        margin-left: 5px;
    }

    #plusButton {
        margin-left: -5px;
    }



    .popupDialog {
        #marginner {
            #popup-inner {

                #popup-div{

                    display: flex;

                    align-items: center;
                    justify-content: center;
                    overflow: auto;

                    #popup-img{
                        background-color: rgb(160, 206, 180);
                        height: 95% !important;
                        // ↑ 100 100-nak kellene lennie
                        border: 1px solid black;
                        border-radius: 4px;
                        box-shadow: 0.3px 0.3px 1px black;

                    }

                }

            }
        }
    }



    




</style>