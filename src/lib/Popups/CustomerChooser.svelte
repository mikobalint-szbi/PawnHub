<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {onMount} from 'svelte';

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

                    {#each {length: 4} as _, i}
                    <div class="customerResult">
                        <img src="IMG/Global/no-profile-image.png" alt="">
                        <p>Péld Aladárné Teszt Ilona unokahúga</p>
                    </div>
                    {/each}

                    <div class="customerResult selected">
                        <img src="IMG/Global/no-profile-image.png" alt="">
                        <p>Péld Aladárné Teszt Ilona unokahúga</p>
                    </div>

                    {#each {length: 14} as _, i}
                    <div class="customerResult">
                        <img src="IMG/Global/no-profile-image.png" alt="">
                        <p>Péld Aladárné Teszt Ilona unokahúga</p>
                    </div>
                    {/each}

                </div>

            </div>

            <div id="bottomRow">
                <button on:click={() => open_popup("productPopup",true,true)} id="addButton" class="bottomButton">
                    <img src="IMG/Global/add.png" alt="" id="addImg">
                    <p id="addText">Új ügyfél</p>
                </button>
                <button on:click={() => save_popup("customerChooser")} id="submitButton" class="bottomButton">
                    <img src="IMG/Global/select.png" alt="" id="submitImg">
                    <p id="submitText">Kiválasztás</p>
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