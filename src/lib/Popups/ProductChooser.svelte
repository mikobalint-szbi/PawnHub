<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import { api } from "$lib/Scripts/functions.js";
    import { products_toChoose, productList_forNewLoan } from '@/stores/global.js';
    import {onMount} from 'svelte';

    $: allProducts = $products_toChoose;

    let searchKey = ''

    function toggle_product(i) {
        if (allProducts[i].selected) {
            allProducts[i].selected = false
        }
        else {
            allProducts[i].selected = true
        }
    }

    function submit () {
        let l = []
        allProducts.forEach(e => {
            if (e.selected) {
                l.push(e)
            }
        });

        productList_forNewLoan.set(l)

        close_popup("productChooser")
    }


    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("productChooser"); open_popup("imageViewer")} )

    });


</script>

<dialog id="productChooser" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("productChooser")} id="productChooser-backButton" class="topButton popup-backButton">
                        <img src="IMG/Global/back.png" alt="">
                        <p>Vissza</p>
                    </button>
                </div>
                <div id="topRow-col2">
                    <div class="popupTitle-container">
                        <h2 class="popup-title">Termékválasztó</h2>
                    </div>
                </div>
                <div id="topRow-col3">
                    <button on:click={() => close_popup("productChooser")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>
            </div>

            <div id="popup-grid">

                <div id="popupSearchBox-container" class="">
                    <div id="popupSearchBox">
                        <label for="searchInput2" class="popup-label">Szűrés:</label>
                        <input type="text" class="searchInput" id="searchInput2" bind:value={searchKey}>
                    </div>
                </div>

                <div id="productResults">

                    <!--div class="productResult newItem">
                        <img src="IMG/Global/add.png" alt="">
                        <p>Új termék létrehozása</p>
                    </div-->

                    <!--div class="productResult selected">
                        <img src="IMG/Global/no-image.png" alt="">
                        <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual (alapból hozzá van már kapcsolva az adóssághoz)</p>
                    </div-->
                    {#if allProducts.length == 0}

                        <p id="pcMessage">Adatok lekérése folyamantban...</p>

                    {:else}

                        {#each allProducts as product, i}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class="productResult {product.selected? 'selected' : ''}" on:click={()=>toggle_product(i)} style="display: {product.name.toLowerCase().includes(searchKey.toLowerCase())? 'flex' : 'none'}">
                                {#if product.img}
                                    <img src="data:image/png;base64,{product.img}" alt="A termék fényképe">
                                {:else}
                                    <img src="IMG/Global/no-image.png" alt="A termék fényképe">
                                {/if}
                                <p>{product.name}</p>
                            </div>
                        {/each}

                    {/if}


                </div>

            </div>

            <div id="bottomRow">
                <button on:click={() => open_popup("productPopup",true,true)} id="addButton" class="bottomButton">
                    <img src="IMG/Global/add.png" alt="" id="addImg">
                    <p id="addText">Új termék</p>
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

        #productResults {
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

        #productResults {

            overflow-y: scroll;
            border-top: 1px solid black;

            #pcMessage {
                color: rgb(64, 108, 78);
                font-size: 20px;
                text-align: center;
                margin-top: 160px;

            }

            .productResult {

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

            .productResult.selected{
                background-color: rgb(124, 190, 147);
            }

            /*.productResult.newItem {
                img {
                    padding: 5px;
                }
                p {
                    color: rgb(18, 70, 38);
                    font-weight: 500 !important;
                    font-size: 22px;
                }
            }*/
        }
    }
    
    





</style>