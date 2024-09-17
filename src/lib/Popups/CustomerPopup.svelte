<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
    import {onMount} from 'svelte';

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("customerPopup"); open_popup("imageViewer")} )
    });


</script>

<dialog id="customerPopup" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <button on:click={() => close_popup("customerPopup")} id="popup-backButton" class="topButton">
                    <img src="IMG/Global/back.png" alt="">
                    <p>Vissza</p>
                </button>
                <div class="popupTitle-container">
                    <h2 class="popup-title">Ügyfél adatai</h2>
                </div>


                <button on:click={() => close_popup("customerPopup")} id="popup-closeButton" class="topButton">
                    <img src="IMG/Global/close.png" alt="">
                </button>
            </div>

            <div id="popup-grid">
                <div id="image" class="popupGrid-element">
                    <img src="IMG/Global/no-profile-image.png" alt="profile">
                </div>
                <div id="customer-name" class="popupGrid-element">
                    <label for="c-name" class="popup-label">Név:</label>
                    <input type="text" class="popup-input" id="c-name">
                </div>
                <div id="address" class="popupGrid-element">
                    <label for="c-address" class="popup-label">Lakcím:</label>
                    <input type="text" class="popup-input" id="c-address">
                </div>
                <div id="phone" class="popupGrid-element">
                    <label for="c-phone" class="popup-label">Telefonszám:</label>
                    <input type="text" class="popup-input" id="c-phone">
                </div>
                <div id="email" class="popupGrid-element">
                    <label for="c-email" class="popup-label">E-mail-cím::</label>
                    <input type="text" class="popup-input" id="c-email">
                </div>

                <div id="note" class="popupGrid-element">
                    <label for="c-note" class="popup-label">Jegyzetek:</label>
                    <textarea type="text" class="popup-input" id="c-note" value="Megoldás a 'nem Nyílik Meg a képmegjelenítő' és a 'kéretlen visszagomb' problémákra: a product popupban és a customer popupban használt azonosítók ne egyezzenek. Mindegyik elé oda kell írnom a productP- és a customerP- előtagot"></textarea>
                </div>

                <div id="debt" class="popupGrid-element">
                    <p class="popup-label">Tartozás összesen:</p>
                    <p id="debtOutput">1 112 000 Ft</p>
                </div>


                <div id="loans" class="popupGrid-element">
                    <p class="popup-label">Adósságok</p>
                    <div class="loanField-flex">
                        <button>
                            <img src="IMG/Home/loans.png" alt="Kölcsön">
                            <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                            <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                            <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                            <p title="Kamat" class="loanField-interest">5%</p>
                        </button>
                        <button>
                            <img src="IMG/Home/loans.png" alt="Kölcsön">
                            <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                            <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                            <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                            <p title="Kamat" class="loanField-interest">5%</p>
                        </button>
                        <button>
                            <img src="IMG/Home/loans.png" alt="Kölcsön">
                            <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                            <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                            <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                            <p title="Kamat" class="loanField-interest">5%</p>
                        </button>
                        <button>
                            <img src="IMG/Home/loans.png" alt="Kölcsön">
                            <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                            <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                            <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                            <p title="Kamat" class="loanField-interest">5%</p>
                        </button>
                        <!--button>
                            <img src="IMG/Home/loans.png" alt="Kölcsön">
                            <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                            <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                            <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                            <p title="Kamat" class="loanField-interest">5%</p>
                        </button>
                        <button>
                            <img src="IMG/Home/loans.png" alt="Kölcsön">
                            <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                            <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                            <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                            <p title="Kamat" class="loanField-interest">5%</p>
                        </button-->

                    </div>

                </div>
                <div id="products" class="popupGrid-element">
                    <p class="popup-label">Termékek</p>
                    <div class="productField-flex">
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                    </div>

                </div>

            </div>

            <div id="bottomRow">
                <button on:click={() => save_popup("customerPopup")} id="submitButton" class="bottomButton">
                    <img src="IMG/Global/save.png" alt="" id="submitImg">
                    <p id="submitText">Módosítások mentése</p>
                </button>
            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {
        
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

        .money{
            width: 93%;
        }

    }
    @media (min-width: 340px) {

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

        
        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;

        }
        #customer-name{
            grid-row: 1 / 2;
            grid-column:  4 / 10;

        }
        #address{
            grid-row: 2 / 3;
            grid-column:  4 / 10;
        }
        #phone{
            grid-row: 4 / 5;
            grid-column: 1 / 6;
        }
        #email{
            grid-row: 5 / 6;
            grid-column: 1 / 6;
        }

        #debt{
            grid-row: 3 / 4;
            grid-column: 4 / 6;
        }

        #note{
            grid-row: 6 / 9;
            grid-column: 1 / 6;
        }
        #loans{
            grid-row: 9 / 11;
            grid-column: 1 / 10;

            #loanBox{
                flex-direction: column;
            }
        }

        #products{
            grid-row: 3 / 9;
            grid-column: 6 / 11;
            
        }

        

    }
    @media (min-width: 768px) {

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

        #image{
            grid-row: 1 / 4;
            grid-column: 1 / 4;

        }
        #customer-name{
            grid-row: 1 / 2;
            grid-column:  4 / -1;

        }
        #address{
            grid-row: 2 / 3;
            grid-column:  4 / -1;
        }
        #phone{
            grid-row: 4 / 5;
            grid-column: 1 / 7;
        }
        #email{
            grid-row: 5 / 6;
            grid-column: 1 / 7;
        }

        #debt{
            grid-row: 3 / 4;
            grid-column: 4 / 7;
        }

        #note{
            grid-row: 6 / 9;
            grid-column: 1 / 7;
        }
        #loans{
            grid-row: 3 / 9;
            grid-column: 7 / 9;

            #loanBox{
                flex-direction: column;
            }

            .loanField-flex button:first-child:last-child {
                height: 99%;
                display: flex;
                align-self: center;
                flex-direction: column;
                align-items: center;
                gap: 5px;


                img{
                    display: block;
                    width: 100%;
                    margin: 12px 0 15px 0;

                }

            }

            .loanField-flex button:first-child:nth-last-child(2),
            .loanField-flex button:first-child:nth-last-child(2) ~ button {
                height: 49%;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    display: block;
                    width: 72%;
                    margin: 7px 0 7px 0;

                }

            }

            .loanField-flex button:first-child:nth-last-child(3),
            .loanField-flex button:first-child:nth-last-child(3) ~ button {
                height: 32%;
                display: flex;
                align-self: center;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .loanField-flex button:first-child:nth-last-child(4),
            .loanField-flex button:first-child:nth-last-child(4) ~ button {
                align-self: center;
                margin-top: 1px;
            }
        }

        #products{
            grid-row: 3 / 9;
            grid-column: 9 / -1;
            
        }

        #popup-grid, #popup-div{
            width: 840px;
        }



    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {


    }


    .popupDialog{

        .popupTitle-container{
            display: flex;
            align-items: center;

            .popup-title{
                margin: 0;
                font-weight: 600;
                font-size: 20px;
                line-height: 100%;

            }

        }


        #popup-grid{
            display: grid;

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
                cursor: pointer;

                img{
                    background-color: rgb(160, 206, 180);
                    max-width: 94%;
                    max-height: 94%;
                    border: 1px solid black;
                    border-radius: 4px;
                    box-shadow: 0.3px 0.3px 1px black;
                }

            }
            #customer-name{

                input{
                    width: 100%;
                }
            }
            #note{
                padding: 8px;

            }

            

            #debt{
                #debtOutput{
                    margin: 0;
                    font-size: 26px;
                    font-weight: 500;
                    text-align: end;
                    width: 100%;
                    padding-right: 3px;
                }
            }

            #loans{
                .popup-label{
                    margin-bottom: 2px;
                }
                .loanField-flex{
                    padding: 2px;
                    justify-content: start;
                    overflow-y: auto;
                    flex-wrap: nowrap;
                }

            }

            .productField-flex::-webkit-scrollbar, .loanField-flex::-webkit-scrollbar {
                    width: 7px;
                    height: 8px;
                }

            #products{



                .productField-flex{
                    justify-content: start;
                    overflow-y:auto;
                    height: auto;
                    flex-wrap: nowrap;
                    
                    ::-webkit-scrollbar {
                        width: 8px;
                        height: 12px;
                    }

                    .productButton{
                        background-color: rgb(156, 205, 177);
                        p{
                            margin: 0 0 0 4px;
                        }
                    }
                }

                .productButton:first-child:last-child {
                    align-self: center;
                    img{
                        width: 100%;
                    }
                    
                }

            }

        }
    
    }




</style>