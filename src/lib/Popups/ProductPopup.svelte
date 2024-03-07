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
                <div id="image" class="popupGrid-element">
                    <img src="IMG/no-image.png" alt="">
                </div>
                <div id="product-name" class="popupGrid-element">
                    <label for="p-name" class="p-label">Termék neve:</label>
                    <input type="text" class="p-input" id="p-name">
                </div>
                <div id="status" class="popupGrid-element">
                    <label for="p-status" class="p-label">Státusz:</label>
                    <select id="p-status" class="p-input">
                        <option value="" id="p-status-opt1">🔒 Zálog</option>
                        <option value="">💰 Eladó</option>
                        <option value="">🗃️ Archivált</option>
                    </select>
                </div>
                <div id="category" class="popupGrid-element">
                    <label for="p-category" class="p-label">Kategória:</label>
                    <select id="p-category" class="p-input">
                        <optgroup label="Elektronika">
                            <option value="">Mobiltelefon</option>
                            <option value="">Karóra</option>
                            <option value="">Játékkonzol</option>
                        </optgroup>
                        <optgroup label="Ékszerek">
                            <option value="">Gyűrű</option>
                            <option value="">Nyaklánc</option>
                            <option value="">Fülbevaló</option>
                        </optgroup>

                    </select>
                </div>
                <div id="condition" class="popupGrid-element">
                    <label for="p-condition" class="p-label">Állapot:</label>
                    <select id="p-condition" class="p-input">
                        <option value="">🔵 Használatlan</option>
                        <option value="">🟢 Kiváló</option>
                        <option value="">🟠 Jó</option>
                        <option value="">🟡 Kielégítő</option>
                        <option value="">🔴 Lehasznált</option>
                    </select>
                </div>
                <div id="payed-value" class="popupGrid-element">
                    <label for="p-payedValue" class="p-label">Kifizetett érték:</label>
                    <div class="pv-row">
                        <input type="number" class="p-input money" id="p-payedValue">
                        <p>Ft</p>
                    </div>

                </div>
                <div id="estimated-value" class="popupGrid-element">
                    <label for="p-estimatedValue" class="p-label">Becsült érték:</label>
                    <div class="pv-row">
                        <input type="number" class="p-input money" id="p-estimatedValue">
                        <p>Ft</p>
                    </div>
                </div>
                <div id="description" class="popupGrid-element">
                    <label for="p-description" class="p-label">Leírás:</label>
                    <textarea type="text" class="p-input" id="p-description"></textarea>
                </div>
                <div id="location" class="popupGrid-element">
                    <label for="p-location" class="p-label">Hely:</label>
                    <textarea type="" class="p-input" id="p-location"></textarea>
                </div>
                <div id="loan" class="popupGrid-element">
                    <label for="loanBox" class="p-label">Adósság:</label>
                    <div id="loanBox">
                        <div id="lb-part1">
                            <h5>Pénzösszeg:</h5>
                            <p>30 000 Ft</p>
                            <h5>Megköttetett:</h5>
                            <p>2024.03.06.</p>
                        </div>
                        <div id="lb-part2">
                            <h5>Lejár:</h5>
                            <p>2025.03.06.</p>
                            <h5>Kamat:</h5>
                            <p>4%</p>
                        </div>


                    </div>
                </div>
                <div id="customer" class="popupGrid-element">
                    <div id="customer-row1">
                        <img src="IMG/no-profile-image.png" alt="">
                    </div>
                    <div id="customer-row2">
                        <p>Péld Aladárné Teszt Ilona unokahúga</p>
                    </div>

                </div>

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
            height: fit-content;
            grid-template-rows: repeat(22, 65px);

        }

        #image{
            grid-row: 1 / 5;
        }

        #description{
            grid-row: 11 / 14;
        }

        #location{
            grid-row: 14 / 16;
        }

        #loan{
            grid-row: 16 / 19;

            #loanBox{
                #lb-part1{
                    width: 60%;
                }
                #lb-part2{
                    width: 40%;
                }
            }

        }

        #customer{
            grid-row: 19 / 23;
        }

        #submitButton{
            width: 97.6%;
        }

        .money{
            width: 93%;
        }

    }
    @media (min-width: 340px) {

        #popup-grid{
            grid-template-rows: repeat(23, 65px);
        }

        #image{
            grid-row: 1 / 6;
        }

        
        #description{
            grid-row: 12 / 15;
        }

        #location{
            grid-row: 15 / 17;
        }

        #loan{
            grid-row: 17 / 20;

            #lb-part1{
                    width: 55%;
                }
                #lb-part2{
                    width: 45%;
                }
        }

        #customer{
            grid-row: 20 / 24;
        }

        #submitButton{
            font-size: 19.5px;
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
            height: calc(800px * 0.8) !important;
            grid-template-rows: repeat(10, 1fr);
            grid-template-columns: repeat(9, 1fr);
        }

        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;


        }
        #product-name{
            grid-row: 1 / 2;
            grid-column:  4 / 10;

        }
        #status{
            grid-row: 4;
            grid-column: 7 / 10;

        }
        #category{
            grid-row: 2;
            grid-column: 4 / 7;

        }
        #condition{
            grid-row: 2;
            grid-column: 7 / 10;
        }
        #payed-value{
            grid-row: 3;
            grid-column: 4 / 7;

        }
        #estimated-value{
            grid-row: 3;
            grid-column: 7 / 10;
        }
        #description{
            grid-row: 4 / 8;
            grid-column: 1 / 7;
    
        }
        #location{
            grid-row: 5 / 7;
            grid-column: 7 / 10;

        }
        #loan{
            grid-row: 8 / 11;
            grid-column: 1 / 7;

            #loanBox{
                #lb-part1{
                    width: 50%;
                }
                #lb-part2{
                    width: 50%;
                }
            }

        }

        #customer{
            grid-row: 7 / 11;
            grid-column: 7 / 10;
            
        }

        .money{
            width: 87.5%;
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
            height: calc(800px * 0.69) !important;
            grid-template-rows: repeat(8, 1fr);
            grid-template-columns: repeat(12, 1fr);

        }
        
        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;

        }
        #product-name{
            grid-row: 1 / 2;
            grid-column:  4 / 10;

        }
        #status{
            grid-row: 1;
            grid-column: 10 / 13;

        }
        #category{
            grid-row: 2;
            grid-column: 4 / 7;

        }
        #condition{
            grid-row: 2;
            grid-column: 7 / 10;
        }
        #payed-value{
            grid-row: 3;
            grid-column: 4 / 7;

        }
        #estimated-value{
            grid-row: 3;
            grid-column: 7 / 10;
        }
        #description{
            grid-row: 4 / 7;
            grid-column: 1 / 10;
        }
        #location{
            grid-row: 7 / 9;
            grid-column: 1 / 10;

        }
        #loan{
            grid-row: 2 / 6;
            grid-column: 10 / 13;

            #loanBox{
                flex-direction: column;
            }
        }

        #customer{
            grid-row: 6 / 9 ;
            grid-column: 10 / -1;
            
        }





    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {


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
            #product-name{

                input{
                    width: 100%;
                }
            }
            #description{
                padding: 8px;

            }
            #location{
                padding: 8px;

            }
            #loan{
                padding: 10px;
                padding-top: 6px;

                #loanBox{
                    background-color: rgb(130, 203, 156);
                    width: 100%;
                    height: 92%;
                    border: 1px solid black;
                    box-shadow: 0px 0px 1px black;
                    border-radius: 4px;
                    padding: 8px;
                    display: flex;

                    justify-content: center;


                    h5{
                        font-weight: 500;
                        margin: 0;
                        font-size: 16px;
                    }
                    p{
                        margin: 0;
                        margin-bottom: 13px;
                        font-size: 16px;
                    }
                }

            }
            #customer{

                #customer-row1{
                    display: flex;
                    height: 75%;
                    align-items: center;
                    justify-content: center;
                    width: 100%;

                    img{
                        background-color: rgb(160, 206, 180);
                        max-width: 94%;
                        max-height: 94%;
                        border: 1px solid black;
                        border-radius: 4px;
                        box-shadow: 0.3px 0.3px 1px black;
                    }
                }

                #customer-row2{
                    height: 25%;
                    display: flex;
                    padding-top: 3px;
                    align-items: baseline;
                    width: 100%;

                    p{
                        margin: 0;
                        text-align: center;
                        width: 100%;
                    }
                }
            }

            

        }
    
        
        .p-input{
            height: 32px;
            font-size: 18px;
            width: 100%;
        }
        select.p-input{
            font-size: 16px;

        }
        textarea.p-input{
            height: 100%;
            resize: none;
        }

        .p-label{
            font-size: 14px;
        }

        .pv-row{
            display: flex;
            align-content: flex-end;
            gap: 4px;
            width: 100%;


            p{
                margin: 0;
                margin-top: auto;
                font-size: 20px;
            }
        }
    }




</style>