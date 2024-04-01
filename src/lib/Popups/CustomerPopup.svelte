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
                    <textarea type="text" class="popup-input" id="c-note"></textarea>
                </div>

                <div id="debt" class="popupGrid-element">
                    <label for="" class="popup-label">Tartozás:</label>
                </div>


                <div id="loans" class="popupGrid-element">
                    <p>Adósságok</p>
                </div>
                <div id="products" class="popupGrid-element">
                    <p>Termékek</p>

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


    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

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
            grid-column: 7 / 10;

            #loanBox{
                flex-direction: column;
            }
        }

        #products{
            grid-row: 1 / 9;
            grid-column: 10 / -1;
            
        }





    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {


    }


    .popupDialog{

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
    
    }




</style>