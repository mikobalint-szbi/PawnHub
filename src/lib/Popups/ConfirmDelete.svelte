<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {onMount} from 'svelte';

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("confirmDelete"); open_popup("imageViewer")} )
    });

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
                        <!-- svelte-ignore a11y-missing-content -->
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

                <div id="cdMessage" class="popupGrid-element">
                    <p></p>

                </div>


            </div>

            <div id="bottomRow">
                <button id="yesButton" class="bottomButton">
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
        
        #cdMessage {
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

        #cdMessage {

            p {
                font-size: 22px;
            }
        }
    
    }
    @media (min-width: 468px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #cdMessage {
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

        margin-top: 60px !important;

        #popup-div{
            border: none !important;
            height: 200px !important;
            width: 100% !important;
            margin: 0;
            justify-content: center;
            align-items: center;
            display: flex;

            #cdMessage{
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