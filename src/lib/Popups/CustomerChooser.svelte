<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import { api } from "$lib/Scripts/functions.js";
    import { customers_toChoose, customer_forNewLoan } from '@/stores/global.js';
    import {onMount} from 'svelte';

    $: allCustomers = $customers_toChoose;

    let searchKey = ''

    function toggle_customer(i) {

        for (let j = 0; j < allCustomers.length; j++){

            if (allCustomers[j].selected) {
                allCustomers[j].selected = false
            }
        }

        if (allCustomers[i].selected) {
            allCustomers[i].selected = false
        }
        else {
            allCustomers[i].selected = true
        }
    }

    function submit () {

        let found = false

        for (let i = 0; i < allCustomers.length; i++){
            if (allCustomers[i].selected) {
                customer_forNewLoan.set(allCustomers[i])
                found = true
                break
            }
        }

        if (found){
            close_popup("customerChooser")
        }
        else {
            open_popup("messageOK","Kérjük, válasszon ki egy ügyfélt.")
        }


    }

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("customerChooser"); open_popup("imageViewer")} )
    });


</script>

<dialog id="customerChooser" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("customerChooser")} id="customerChooser-backButton" class="topButton popup-backButton">
                        <img src="IMG/Global/back.png" alt="">
                        <p>Vissza</p>
                    </button>
                </div>
                <div id="topRow-col2">
                    <div class="popupTitle-container">
                        <h2 class="popup-title">Ügyfélválasztó</h2>
                    </div>
                </div>
                <div id="topRow-col3">
                    <button on:click={() => close_popup("customerChooser")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>
            </div>

            <div id="popup-grid">

                <div id="popupSearchBox-container" class="">
                    <div id="popupSearchBox">
                        <label for="searchInput1" class="popup-label">Szűrés:</label>
                        <input type="text" class="searchInput" id="searchInput1">
                    </div>
                </div>

                <div id="customerResults">

                    <!--div class="customerResult selected">
                        <img src="IMG/Global/no-profile-image.png" alt="">
                        <p>Péld Aladárné Teszt Ilona unokahúga</p>
                    </div-->

                    {#if allCustomers.length == 0}

                        <p id="ccMessage">Adatok lekérése folyamantban...</p>

                    {:else}

                        {#each allCustomers as customer, i}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class="customerResult {customer.selected? 'selected' : ''}" on:click={()=>toggle_customer(i)} style="display: {customer.name.toLowerCase().includes(searchKey.toLowerCase())? 'flex' : 'none'}">
                                {#if customer.img}
                                    <img src="data:image/png;base64,{customer.img}" alt="Az ügyfél fényképe">
                                {:else}
                                    <img src="IMG/Global/no-profile-image.png" alt="Az ügyfél fényképe">
                                {/if}
                                <p>{customer.name}</p>
                            </div>
                        {/each}

                    {/if}

                </div>

            </div>

            <div id="bottomRow">
                <button on:click={() => open_popup("customer Popup",true,true)} id="addButton" class="bottomButton">
                    <img src="IMG/Global/add.png" alt="" id="addImg">
                    <p id="addText">Új ügyfél</p>
                </button>
                <button on:click={submit} id="submitButton" class="bottomButton">
                    <img src="IMG/Global/select.png" alt="" id="submitImg">
                    <p id="submitText">OK</p>
                </button>
            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {
        
        #popupSearchBox-container{
            grid-row: 1 / 2;
            grid-column: 1 / -1;
        }

        #popupSearchBox {
            width: 80%;
        }

        #customerResults {
            grid-row: 2 / -1;
            grid-column: 1 / -1;
        }


    }
    @media (min-width: 340px) {

        

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #popupSearchBox {
            width: 70%;
        }


    }
    @media (min-width: 768px) {

        #popupSearchBox {
            width: 60%;
        }

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {



    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {


    }


    .popupDialog{

        #popup-grid{

            grid-template-columns: 1fr;
            grid-template-rows: 80px 1fr;

            #popupSearchBox-container{

                display: flex;
                justify-content: center;

                #popupSearchBox{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .searchInput{
                        width: 100%;
                        height: 34px;
                        font-size: 22px;
                    }
                }



            }

        }

        #customerResults {

            overflow-y: scroll;
            border-top: 1px solid black;

            #ccMessage {
                color: rgb(64, 108, 78);
                font-size: 20px;
                text-align: center;
                margin-top: 160px;
            }

            .customerResult {

                background-color: rgb(161, 213, 179);
                display: flex;

                align-items: center;
                justify-content: left;
                padding: 5px;
                height: 70px;
                border-bottom: 1px solid black;
                width: 100%;
                cursor: pointer;
                overflow: hidden;

                img{
                    background-color: rgb(160, 206, 180);
                    height: 100%;
                    border: 1px solid black;
                    border-radius: 4px;
                    box-shadow: 0.3px 0.3px 1px black;
                }
                p{
                    margin: 0 0 0 10px;
                    font-size: 18px;
                    font-weight: 400;
                }
            }

            .customerResult.selected{
                background-color: rgb(124, 190, 147);
            }
        }
    }
    
    





</style>