<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {onMount} from 'svelte';

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("loanPopup_new_forCustomers"); open_popup("imageViewer")} )
    });


</script>

<dialog id="loanPopup_new_forCustomers" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("loanPopup_new_forCustomers")} id="loanPopup_new_forCustomers-backButton" class="topButton popup-backButton">
                        <img src="IMG/Global/back.png" alt="">
                        <p>Vissza</p>
                    </button>
                </div>
                <div id="topRow-col2">
                    <div class="popupTitle-container">
                        <h2 class="popup-title">Új adósság</h2>
                    </div>
                </div>
                <div id="topRow-col3">
                    <button on:click={() => close_popup("loanPopup_new_forCustomers")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>

            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="popup-grid">

                <div id="message" class="popupGrid-element">
                    <p>Kölcsönfelvétel céljából kérjük, vegye fel a kapcsolatot egy zálogházzal. Ehhez javasoljuk Zálogházkereső oldalunkat, amelyet a főmenüben ér el.</p>
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
        
        #message {
            padding: 10px;

            p {
                font-size: 16px;
            }
        }

    }
    @media (min-width: 340px) {



    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #message {
            padding: 20px;

            p {
                font-size: 25px;
            }
        }

    }
    @media (min-width: 768px) {


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
            grid-template-rows: 1fr;


            #message{
                grid-row: 1 / -1;
                grid-column: 1 / -1;

            }

        }
    
    }

    #shop {
        cursor: pointer;
    }

    #bottomRow {
        height: 0px;
    }



</style>