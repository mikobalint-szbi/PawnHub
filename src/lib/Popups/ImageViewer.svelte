<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";

</script>

<dialog id="imagePopup" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <button on:click={() => close_popup("imagePopup")}>
                    <img src="IMG/Global/close.png" alt="">
                </button>
            </div>

            <div id="popup-div">
                <!--h3>Mi következik most?</h3>
                <ul>
                    <li>functions.js-ben a függvények átalakítása, hogy argumentumként lehessen megadni, melyik popup-boxot nyissák meg</li>
                    <li>Talán: Mentés gomb átalakítása Vissza gombbá itt a képmegjelenítőben (vagy inkább fentre tenném, a táblázatos Product page vissza gombjának mintájára)</li>
                    <li>Az imageViewer görgethető is lehetne és lenne a lent a jelenlegi Mentés gomb helyett egy nagyítás és egy kicsinyítés gomb</li>
                    <li>A product-popup image szekciójára on:clicket tenni, ami vagy a windows Megnyitás ablakot, vagy a képnézegetőt nyitja meg</li>
                    <li></li>
                    <li>
                        A product popupnál, ha a no-image képre kattintasz rá, akkor egyből a Megnyitás ablak jelenik meg, hogy feltölthesd a képet. <br>
                        Ha már van ott kép, akkor az imageViewer jelenik meg. <br>
                    </li>
                    <li>↓</li>
                    <li>Az imageViewer-ben van kép kicserélése és kép törlése gomb</li>
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
        }

        #popup-div{
            width: 520px !important;

        }

        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;


        }

    }
    @media (min-width: 768px) {
        #popup-div{
            width: 620px !important;
        }

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

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

    #marginner{
        background-color: rgb(161, 213, 179);
        border: solid 1px black;
        box-shadow: 0.1px 0.1px 5px black;
    }



    .popupDialog{
        border: none;
        width: fit-content;
        height: fit-content;
        background-color: rgba($color: #000000, $alpha: 0.0);
        padding: 0;
        transform: translateX(-50%);
        margin: 0;
        left: 50%;
        top: 6vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        #topRow{
            display: flex;
            width: 100%;
            height: 44px;
            justify-content: end;
            padding: 9px;

            margin-bottom: 4px;
            button{
                width: 30px;
                height: 29px;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    height: 100%;
                }
            }
        }

        #bottomRow{
            display: flex;
            width: 100%;
            height: 79px;
            justify-content: center;
            padding: 14px;
            column-gap: 12px;

            .bottomButton{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;

                img{
                    height: 70%;
                    margin-left: 3px;
                    margin-right: 8px;
                }
                p{
                    margin: 0;
                }

            }
        }


        #popup-div{
            margin: 0 18px;
            display: flex;
            border: 0.5px rgb(106, 137, 116) solid;

            align-items: center;
            justify-content: center;

        
            #popup-img{
                background-color: rgb(160, 206, 180);
                scale: 1.5;
                max-width: 64% !important;
                max-height: 62% !important;
                border: 1px solid black;
                border-radius: 4px;
                box-shadow: 0.3px 0.3px 1px black;
            }

        }
    }




</style>