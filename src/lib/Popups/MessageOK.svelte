<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {onMount} from 'svelte';

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("messageOK"); open_popup("imageViewer")} )
    });


</script>

<dialog id="messageOK" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("messageOK")} id="messageOK-backButton" class="topButton popup-backButton">
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
                    <button on:click={() => close_popup("messageOK")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>

            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="popup-div">

                <div id="okMessage" class="popupGrid-element">
                    <p></p>
                </div>


            </div>

            <div id="bottomRow">
                <button id="okButton" class="bottomButton">
                    <img src="IMG/Global/select.png" alt="" id="okImg">
                    <p id="loanPopup-okText" class="okText">Rendben</p>
                </button>

            </div>
        </div>
    </div>
    <div id="marginBottom"></div>
</dialog>

<style lang="scss">

    @media (min-width: 0px) {
        
        #okMessage {
            padding: 10px;

            p {
                font-size: 20px;
            }
        }

        .popupDialog {
            width: 90% !important;
        }

        .bottomButton {
            width: 70%;
        }

    }
    @media (min-width: 340px) {



    }
    @media (min-width: 404px) {

        #okMessage {

            p {
                font-size: 22px;
            }
        }
    
    }
    @media (min-width: 468px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #okMessage {
            padding: 20px;

            p {
                font-size: 21px;
            }
        }

        .popupDialog {
            width: 80% !important;
        }

        .bottomButton {
            width: 220px;
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

            #okMessage{
                text-align: center;
                width: 100% !important;

            }

        }
    
    }

    #shop {
        cursor: pointer;
    }

    #bottomRow {
        height: 79px;
        align-items: center;
    }

    .bottomButton {
        height: 100%;
        img {
            height: 100%;
        }
    }


</style>