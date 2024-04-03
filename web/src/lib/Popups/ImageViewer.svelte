<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";

</script>

<dialog id="imageViewer" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <button on:click={() => close_popup("imageViewer")} id="popup-backButton" class="topButton">
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
                    <img src="IMG/Global/replace.png" alt="" id="submitImg">
                    <p id="submitText">Csere</p>
                </button>
                <button on:click={() => {}} id="deleteButton" class="bottomButton">
                    <img src="IMG/Global/delete.png" alt="" id="submitImg">
                    <p id="submitText">Törlés</p>
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
            width: 180px;
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


        #popup-div{
            display: flex;

            align-items: center;
            justify-content: center;

        
            #popup-img{
                background-color: rgb(160, 206, 180);
                scale: 1.5;
                max-width: 63% !important;
                max-height: 62% !important;
                border: 1px solid black;
                border-radius: 4px;
                box-shadow: 0.3px 0.3px 1px black;
            }

        }
    




</style>