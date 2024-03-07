<script>
    import {open_product, close_product, save_product} from "$lib/Popups/functions.js";

</script>

<dialog id="productPopup" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <button on:click={close_product}>
                    <img src="IMG/close.png" alt="">
                </button>
            </div>

            <div id="popup-grid">
                <h3>Mi következik most?</h3>
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
                </ul>


            </div>

            <div id="bottomRow">
                <button on:click={save_product} id="submitButton">
                    <img src="IMG/save.png" alt="" id="submitImg">
                    <p id="submitText">Módosítások mentése</p>
                </button>
            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {
        
        #popup-grid{
            width: 80vw !important;
            height: 70vh !important;
            height: fit-content;

        }

        #image{
            grid-row: 1 / 5;
        }


    }
    @media (min-width: 340px) {


        #image{
            grid-row: 1 / 6;
        }


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #submitButton{
            font-size: 25px;
            width: 310px;
        }

        #popup-grid{
            width: 520px !important;

        }

        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;


        }

    }
    @media (min-width: 768px) {
        #popup-grid{
            width: 620px !important;
        }

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

        #popup-grid{
            width: 800px !important;

        }
        
        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;

        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        #popup-grid{
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

            #submitButton{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;

                img{
                    height: 80%;
                    margin-left: 3px;
                    margin-right: 8px;
                }
                p{
                    margin: 0;
                }

            }
        }


        #popup-grid{
            margin: 0 18px;
            display: grid;
            border: 0.5px rgb(106, 137, 116) solid;

            .popupGrid-element{
                border: 0.5px solid rgb(106, 137, 116);
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
                padding: 6px;


            }

            
            #image{
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    background-color: rgb(160, 206, 180);
                    max-width: 94%;
                    max-height: 94%;
                    border: 1px solid black;
                    border-radius: 4px;
                    box-shadow: 0.3px 0.3px 1px black;
                }

            }

        }
    }




</style>