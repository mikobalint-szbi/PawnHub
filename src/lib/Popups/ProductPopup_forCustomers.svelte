<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import { formatNum, timeToDate, dateDisplay } from "$lib/Scripts/functions.js";
    import { onMount } from 'svelte';
    import { product_forCustomers, loan_forCustomers, image_forCustomers } from '@/stores/global.js';
    import { condition } from "$lib/Scripts/variables.js";
    import { writable } from 'svelte/store';

    
    $: product = $product_forCustomers;
    $: loan = $loan_forCustomers;

    function productImage_clicked () {

        image_forCustomers.set(product.img)

        open_popup("imageViewer_forCustomers")
    }

    function resize() {

        const grid = document.getElementById("popup-grid");

        const tr = document.querySelectorAll(".pValue")

        if (grid != null && tr.length > 0){

            let w = parseFloat(getComputedStyle(grid).width) - 6*2 - 5 - 12 - 5

            tr.forEach((e)=> {
                e.style.maxWidth = w + "px"
            })



        }
    }



    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("productPopup_forCustomers"); open_popup("imageViewer")} )

        resize()
        console.log(product)

        window.addEventListener("resize", ()=> {
            resize()

        })
    });


</script>

<dialog id="productPopup_forCustomers" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("productPopup_forCustomers")} id="productPopup_forCustomers-backButton" class="topButton popup-backButton">
                        <img src="IMG/Global/back.png" alt="">
                        <p>Vissza</p>
                    </button>
                </div>
                <div id="topRow-col2">
                    <div class="popupTitle-container">
                        <h2 class="popup-title">Termék</h2>
                    </div>
                </div>
                <div id="topRow-col3">
                    <button on:click={() => close_popup("productPopup_forCustomers")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>
            </div>

            <div id="popup-grid">
                <div id="image" class="popupGrid-element">
                    {#if product.img}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <img src="data:image/png;base64,{product.img}" alt="A termék fényképe" on:click={productImage_clicked}>
                    {:else}
                        <img src="IMG/Global/no-image.png" alt="A termék fényképe">
                    {/if}
                </div>
                <div id="product-name" class="popupGrid-element">
                    <label for="p-name" class="popup-label">Zálogtárgy neve:</label>
                    <p class="pValue left toResize" id="p-name">{product.name}</p>
                </div>
                <div id="status" class="popupGrid-element">
                    <label for="p-status" class="popup-label">Státusz:</label>
                    <p id="p-status" class="popup-input pValue ofHidden left property">🔒 Zálog</p>
                </div>
                <div id="category" class="popupGrid-element">
                    <label for="p-category" class="popup-label">Kategória:</label>
                    <p id="p-category" class="popup-input pValue ofHidden left property">{product.type.name}</p>
                </div>
                <div id="condition" class="popupGrid-element">
                    <label for="p-condition" class="popup-label">Állapot:</label>
                    <p id="p-condition" class="popup-input pValue left property">{condition[product.condition]}</p>
                </div>
                <div id="payed-value" class="popupGrid-element">
                    <label for="p-payedValue" class="popup-label">Kifizetett érték:</label>
                    <div class="pv-row">
                        <p class="popup-input money pValue" id="p-payedValue">{formatNum(product.payedValue)} Ft</p>

                    </div>
                </div>
                <div id="estimated-value" class="popupGrid-element">
                    <label for="p-estimatedValue" class="popup-label">Becsült érték:</label>
                    <div class="pv-row">
                        <p class="popup-input money pValue" id="p-estimatedValue">{formatNum(product.estimatedValue)} Ft</p>
                    </div>
                </div>
                <div id="description" class="popupGrid-element">
                    <label for="p-description" class="popup-label">Leírás:</label>
                    <textarea type="text" class="popup-input" id="p-description" readonly>{product.description}</textarea>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="loan" class="popupGrid-element" on:click={()=>open_popup("loanPopup_forCustomers")}>
                    <label for="loanBox" class="popup-label">Adósság:</label>
                    <div id="loanBox">
                        <div id="lb-part1">
                            <h5 title="Visszatérítendő">Visszatér<span class="lb-mobile">.</span><span class="lb-desktop">ítendő</span>:</h5>
                            <p>{formatNum(loan.givenAmount)} Ft</p>
                            <h5>Megköttetett:</h5>
                            <p>{timeToDate(loan.created_at)}</p>
                        </div>
                        <div id="lb-part2">
                            <h5>Lejár:</h5>
                            <p>{dateDisplay(loan.expDate)}</p>
                            <h5>Kamat:</h5>
                            <p>{loan.interest}%</p>
                        </div>


                    </div>
                </div>
                <div id="shop" class="popupGrid-element">
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div id="shop-row1"  on:click={()=>location.assign(`/shop/?id=${loan.shop.id}`)}>
                        {#if loan.shop.img}
                            <img src="data:image/png;base64,{loan.shop.img}" alt="">
                        {:else}
                            <img src="IMG/Global/no-shop-image.png" alt="">
                        {/if}
                    </div>
                    <div id="shop-row2">
                        <p>{loan.shop.name}</p>
                    </div>
                </div>

            </div>

            <div id="bottomRow">

            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {

        #popup-grid {
            grid-template-rows: repeat(4, 65px)  78px repeat(16, 65px);
        }
        
        #image{
            grid-row: 1 / 5;

        }

        #description{
            grid-row: 11 / 15;
        }

        #loan{
            grid-row: 15 / 18;

            #loanBox{
                #lb-part1{
                    width: 60%;
                }
                #lb-part2{
                    width: 40%;
                }

                .lb-mobile {
                    display: inline;
                }
                .lb-desktop {
                    display: none;
                }
            }

        }

        #shop{
            grid-row: 18 / 22;
        }

        .money{
            width: 93%;
        }

    }
    @media (min-width: 340px) {

        #popup-grid {
            grid-template-rows: repeat(5, 65px)  78px repeat(15, 65px);
        }

        #image{
            grid-row: 1 / 6;
        }

        
        #description{
            grid-row: 12 / 17;
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

        #shop{
            grid-row: 20 / 24;
        }

        #submitButton{
            font-size: 19.5px;
        }


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #popup-grid {
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

        #loan{
            grid-row: 8 / 11;
            grid-column: 1 / 7;

            #loanBox{
                #lb-part1{
                    width: 100%;
                }
                #lb-part2{
                    width: 100%;
                }

                .lb-mobile {
                    display: none;
                }
                .lb-desktop {
                    display: inline;
                }
            }

        }

        #shop{
            grid-row: 5 / 11;
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

        #popup-grid {
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
            grid-row: 4 / 9;
            grid-column: 1 / 10;
        }

        #loan{
            grid-row: 2 / 6;
            grid-column: 10 / 13;

            #loanBox{
                flex-direction: column;
            }
        }

        #shop{
            grid-row: 6 / 9 ;
            grid-column: 10 / -1;
            
        }





    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {


    }


    .popupDialog{

        #bottomRow {
            height: 0px;
        }

        #popup-grid{



            .pValue {
                font-size: 17px !important;
                margin-top: 4px !important;
                margin-right: 12px !important;
                text-align: right !important;
                width: 98% !important;
                overflow-x: auto;
                overflow-y: hidden;
                text-wrap: nowrap;
                margin-bottom: 0px !important;
                color: rgb(91, 114, 99);
                font-weight: 400;
                scrollbar-width: thin;
                // A p-name mező tartalma hosszabb, mint a popup szélessége. Ezért lóg ki minden.
                
            }
            .pValue.left {
                text-align: left !important;
                margin-left: 5px !important;
            }
            .pValue.center {
                text-align: center !important;
            }
            .pValue.ofHidden {
                overflow: hidden;
            }
            .pValue.money {
                font-size: 21px !important;
            }
            .pValue.property {
                font-size: 18px !important;

            }

            .pValue#p-name {

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
            #product-name{

                p {

                }
            }
            #description{
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
                    cursor: pointer;

                    * {
                        cursor: pointer;
                    }

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
            #shop{
                cursor: pointer;

                #shop-row1{
                    display: flex;
                        
                    align-items: end;
                    justify-content: center;
                    width: 100%;
                    padding-bottom: 5px;


                    img{
                        background-color: rgb(160, 206, 180);
                        max-width: 94%;
                        max-height: 94%;
                        border: 1px solid black;
                        border-radius: 4px;
                        box-shadow: 0.3px 0.3px 1px black;
                    }
                }

                #shop-row2{
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

    #p-payedValue, #p-estimatedValue{
        text-align: right; 
        font-size: 22px;
    }
    .p-current{
        font-size: 22px;
    }




</style>