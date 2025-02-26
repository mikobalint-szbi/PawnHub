<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {onMount} from 'svelte';

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("confirmDelete"); open_popup("imageViewer")} )
    });

    export let type;


</script>

<dialog id="confirmDelete" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("confirmDelete")} id="confirmDelete-backButton" class="topButton popup-backButton">
                        <img src="IMG/Global/back.png" alt="">
                        <p>Vissza</p>
                    </button>
                </div>
                <div id="topRow-col2">
                    <div class="popupTitle-container">
                        <h2 class="popup-title"></h2>
                    </div>
                </div>
                <div id="topRow-col3">
                    <button on:click={() => close_popup("confirmDelete")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>

            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="popup-div">

                <div id="message" class="popupGrid-element">
                    {#if type == "customer1"}
                        <p>Biztosan törölni szeretné a PawnHub-fiókkal nem rendelkező ügyfelet a zálogház adattárjából?</p>
                    {:else if type == "customer2"}
                        <p>Biztosan törölni szeretné a PawnHub-fiókkal rendelkező felhasználót az ügyfelei közül?</p>
                    {:else if type == "product1"}
                        <p>Biztosan törölni szeretné a terméket a zálogban tartott termékek közül?</p>
                    {:else if type == "product2"}
                        <p>Biztosan törölni szeretné a terméket a zálogház kínálatából?</p>
                    {:else if type == "loan"}
                        <p>Biztosan törölni szeretné az adósságot?</p>
                    {/if}

                </div>


            </div>

            <div id="bottomRow">
                <button on:click={() => {}} id="yesButton" class="bottomButton">
                    <img src="IMG/Global/select.png" alt="" id="yesImg">
                    <p id="loanPopup-yesText" class="yesText">Igen</p>
                </button>
                <button on:click={() => close_popup("confirmDelete")} id="noButton" class="bottomButton">
                    <img src="IMG/Global/no.png" alt="" id="noImg">
                    <p id="customerPopup-noText" class="noText">Nem</p>
                </button>
            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {
        
        #message {
            padding: 10px;

            p {
                font-size: 20px;
            }
        }

        .popupDialog {
            width: 90% !important;
        }

    }
    @media (min-width: 340px) {



    }
    @media (min-width: 404px) {

        #message {

            p {
                font-size: 22px;
            }
        }
    
    }
    @media (min-width: 468px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #message {
            padding: 20px;

            p {
                font-size: 25px;
            }
        }

        .popupDialog {
            width: 80% !important;
        }

    }
    @media (min-width: 768px) {

        .popupDialog {
            width: 520px !important;
        }

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {



    }


    .popupDialog{

        #popup-div{
            border: none !important;
            height: 200px !important;
            width: 100% !important;
            margin: 0;
            justify-content: center;
            align-items: center;
            display: flex;

            #message{
                text-align: center;
                width: 100% !important;

            }

        }
    
    }

    #shop {
        cursor: pointer;
    }

    #bottomRow {

    }



</style>