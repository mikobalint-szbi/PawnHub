<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {formatNum, roundForint, dateDisplay, timeToDateValue, dateTodayValue} from "$lib/Scripts/functions.js";
    import {onMount} from 'svelte';
    import { loan_forShops, product_forShops, isNewEntry, productList_forNewLoan, customer_forNewLoan } from '@/stores/global.js';

    $: loan = $loan_forShops;
    $: product = $product_forShops;
    $: products = $productList_forNewLoan;
    $: customer = $customer_forNewLoan;

    let moneyBack = 0

    function productButton_clicked(j) {
        product_forShops.set(loan.items[j])
        open_popup("productPopup")
    }

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("loanPopup"); open_popup("imageViewer")} )
    });


</script>

<dialog id="loanPopup" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("loanPopup")} id="loanPopup-backButton" class="topButton popup-backButton">
                        <img src="IMG/Global/back.png" alt="">
                        <p>Vissza</p>
                    </button>
                </div>
                <div id="topRow-col2">
                    <div class="popupTitle-container">
                        <h2 class="popup-title">Adósság</h2>
                    </div>
                </div>
                <div id="topRow-col3">
                    <button on:click={() => close_popup("loanPopup")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>

            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="popup-grid">

                <div id="money-lent" class="popupGrid-element">
                    <label for="p-moneyLent" class="popup-label">Kölcsönadott összeg:</label>
                    <div class="pv-row">
                        {#if $isNewEntry}
                            <input type="number" class="popup-input money" id="p-moneyLent" value="">
                        {:else}
                            <input type="number" class="popup-input money" id="p-moneyLent" value="{loan.givenAmount}" disabled>
                        {/if}
                        <p class="p-current">Ft</p>
                    </div>
                </div>

                <div id="money-back" class="popupGrid-element">
                    <label for="p-moneyBack" class="popup-label">Visszatérítendő összeg:</label>
                    <div class="pv-row">
                        {#if $isNewEntry}
                            <p id="p-moneyBack"> {moneyBack} Ft</p>
                        {:else}
                            <p id="p-moneyBack"> {formatNum(roundForint(loan.givenAmount * (1 + loan.interest / 100)))} Ft</p>
                        {/if}
                    </div>
                </div>

                <div id="interest" class="popupGrid-element">
                    <label for="p-interest" class="popup-label">Kamatszázalék:</label>
                    <div class="pv-row">
                        {#if $isNewEntry}
                            <input type="number" min="0" class="popup-input money" id="p-interest" value="0">
                        {:else}
                            <input type="number" min="0" class="popup-input money" id="p-interest" value="{loan.interest}">
                        {/if}
                        <p class="p-current">%</p>
                    </div>
                </div>
                
                <div id="start-date" class="popupGrid-element">
                    <label for="p-startDate" class="popup-label">Megkötés dátuma:</label>
                    <div class="pv-row">
                        {#if $isNewEntry}
                            <input type="date" class="popup-input money" id="p-startDate" value="{dateTodayValue()}">
                        {:else}
                            <input type="date" class="popup-input money" id="p-startDate" value="{timeToDateValue(loan.created_at)}" disabled>
                        {/if}
                    </div>
                </div>

                <div id="exp-date" class="popupGrid-element">
                    <label for="p-expDate" class="popup-label">Lejárat dátuma:</label>
                    <div class="pv-row">
                        {#if $isNewEntry}
                            <input type="date" class="popup-input money" id="p-expDate" value="">
                        {:else}
                            <input type="date" class="popup-input money" id="p-expDate" value="{loan.expDate}">
                        {/if}
                    </div>
                </div>



                <div id="description" class="popupGrid-element">
                    <label for="p-description" class="popup-label">Leírás:</label>
                    {#if $isNewEntry}
                        <textarea type="text" class="popup-input" id="p-description"></textarea>
                    {:else}
                        <textarea type="text" class="popup-input" id="p-description">{loan.description}</textarea>
                    {/if}

                </div>

                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div id="customer" class="popupGrid-element" on:click={()=>open_popup("customerChooser",false, false)}>

                    {#if $isNewEntry}
                        {#if customer}
                            <div id="customer-row1">
                                {#if customer.img}
                                    <img src="data:image/png;base64,{loan.customer.img}" alt="Az ügyfél fényképe">
                                {:else}
                                    <img src="IMG/Global/no-profile-image.png" alt="Az ügyfél fényképe">
                                {/if}
                            </div>
                            <div id="customer-row2" >
                                <p>{customer.name}</p>
                            </div>
                        {:else}
                            <div id="customer-row1" class="addCustomer">
                                <img src="IMG/Global/add.png" alt="Ügyfél hozzáadása">
                            </div>
                            <div id="customer-row2" class="addCustomer">
                                <p>Ügyfél hozzárendelése</p>
                            </div>
                        {/if}
                    {:else}
                        <div id="customer-row1">
                            {#if loan.customer.img}
                                <img src="data:image/png;base64,{loan.customer.img}" alt="Az ügyfél fényképe">
                            {:else}
                                <img src="IMG/Global/no-profile-image.png" alt="Az ügyfél fényképe">
                            {/if}
                        </div>
                        <div id="customer-row2">
                            <p>{loan.customer.name}</p>
                        </div>
                    {/if}
                </div>


                <div id="products" class="popupGrid-element">
                    <p class="popup-label">Zálogtárgyak</p>
                    <div class="productField-flex">
                        {#if $isNewEntry}
                            {#if products.length == 0}
                                <!-- svelte-ignore missing-declaration -->
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <div class="productButton newItem" on:click={()=> open_popup("productChooser",false, false)}>
                                    <img src="IMG/Global/add.png" alt="">
                                    <p class="">Termék hozzáadása</p>
                                </div>
                            {:else}
                                <!-- svelte-ignore missing-declaration -->
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <div class="productButton newItem" on:click={()=> open_popup("productChooser",false, false)}>
                                    <img src="IMG/Global/edit.png" alt="">
                                    <p class="">Terméklista módosítása</p>
                                </div>
                            {/if}
                        {:else}
                            {#if loan.items.length == 0}
                                <p class="noItems">Nem tartozik  zálogtárgy ehhez az adóssághoz.</p>
                            {:else}

                                {#each loan.items as item, j}
                                    <!-- svelte-ignore missing-declaration -->
                                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                                    <div class="productButton" on:click={() => productButton_clicked(j)}>
                                        {#if item.img}
                                            <img src="data:image/png;base64,{item.img}" alt="">
                                        {:else}
                                            <img src="IMG/Global/no-image.png" alt="">
                                        {/if}

                                        <p>{item.name}</p>
                                    </div>
                                {/each}
    
                            {/if}
                        {/if}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->

                    </div>
                </div>



                    
                <!--div class="loanField-flex">
                    <button>

                        <label for="" class="popup-label" style="margin-top: 60px;">Pénzösszeg</label>
                        <input type="text">
                        <label for="" class="popup-label">Megkötés</label>
                        <input type="date">
                        <label for="" class="popup-label">Lejárat</label>
                        <input type="date">
                        <label for="" class="popup-label">Kamat</label>
                        <input type="number">
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
                    </button>

                </div-->

                
            </div>

            <div id="bottomRow">
                <button on:click={() => save_popup("loanPopup")} id="submitButton" class="bottomButton">
                    <img src="IMG/Global/save.png" alt="" id="submitImg">
                    <p id="loanPopup-submitText" class="submitText">Módosítások mentése</p>
                </button>
                <button on:click={() => open_popup("confirmDelete", false, false)} id="deleteButton" class="bottomButton">
                    <img src="IMG/Global/delete.png" alt="" id="deleteImg">
                    <p id="customerPopup-deleteText" class="deleteText">Adósság törlése</p>
                </button>
            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {
        
        #popup-grid {
            grid-template-rows: repeat(16, 65px);
        }
 
        #money-lent{
            grid-row: 1 / 2;
            grid-column: 1 / 1;
        }
        #money-back{
            grid-row: 3 / 4;
            grid-column: 1 / 1;

        }
        #start-date{
            grid-row: 4 / 5;
            grid-column: 1 / 1;

        }
        #exp-date{
            grid-row: 5 / 6;
            grid-column: 1 / 1;

        }
        #interest{
            grid-row: 2 / 3;
            grid-column: 1 / 1;
        }
        #description{
            grid-row: 13 / 17;
            grid-column: 1 / 1;

        }
        #customer{
            grid-row: 6 / 9;
            grid-column: 1 / 1;

        }
        #products{
            grid-row: 9 / 13;
            grid-column: 1 / 1;

        }



        .money{
            width: 93%;
        }

    }
    @media (min-width: 340px) {



    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #popup-grid {
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(10, 1fr);
        }

        #money-lent{
            grid-row: 1 / 2;
            grid-column: 1 / 9;
        }
        #money-back{
            grid-row: 2 / 3;
            grid-column: 3 / 9;
        }
        #start-date{
            grid-row: 3 / 4;
            grid-column: 1 / 5;
        }
        #exp-date{
            grid-row: 3 / 4;
            grid-column: 5 / 9;
        }
        #interest{
            grid-row: 2 / 3;
            grid-column: 1 / 3;
        }
        #description{
            grid-row: 8 / 11;
            grid-column: 1 / 9;

        }
        #customer{
            grid-row: 4 / 8;
            grid-column: 1 / 4;
        }
        #products{
            grid-row: 4 / 8;
            grid-column: 4 / 10;

        }
        

    }
    @media (min-width: 768px) {


    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

        #popup-grid, #popup-div{
            width: 800px !important;
            height: calc(800px * 0.69) !important;
            grid-template-rows: repeat(7, 1fr);
            grid-template-columns: repeat(12, 1fr);

        }

        #money-lent{
            grid-row: 1 / 2;
            grid-column: 1 / 9;
        }
        #money-back{
            grid-row: 2 / 3;
            grid-column: 3 / 9;
        }
        #start-date{
            grid-row: 3 / 4;
            grid-column: 1 / 9;
        }
        #exp-date{
            grid-row: 4 / 5;
            grid-column: 1 / 9;
        }
        #interest{
            grid-row: 2 / 3;
            grid-column: 1 / 3;
        }
        #description{
            grid-row: 5 / 8;
            grid-column: 1 / 9;
        }
        #customer{
            grid-row: 5 / 8;
            grid-column: 9 / 14;
        }
        #products{
            grid-row: 1 / 5;
            grid-column: 9 / 14;
        }


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {


    }


    .popupDialog{

        #popup-grid{

            #money-back{
                #p-moneyBack{
                    font-weight: 500;
                    color: rgb(26, 110, 60);
                    font-size: 25px;
                    margin-top: -4px;
                    margin-right: 12px;
                    text-align: right;
                    width: 100%;
                    
                }
            }

            #p-interest, #p-moneyLent{
                font-size: 24px;
                text-align: right; 

            }

            .p-current{
                font-size: 24px;
            }

    

        }
    
    }

    #customer {
        cursor: pointer;
    }



</style>