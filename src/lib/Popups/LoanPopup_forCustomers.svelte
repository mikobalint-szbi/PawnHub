<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
    import {onMount} from 'svelte';

    onMount(()=>{
	    document.getElementById("image").addEventListener('click', () => {close_popup("loanPopup_forCustomers"); open_popup("imageViewer")} )
    });


</script>

<dialog id="loanPopup_forCustomers" class="popupDialog">
    <div id="marginner">
        <div id="popup-inner">
            <div id="topRow">
                <div id="topRow-col1">
                    <button on:click={() => close_popup("loanPopup_forCustomers")} id="loanPopup_forCustomers-backButton" class="topButton popup-backButton">
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
                    <button on:click={() => close_popup("loanPopup_forCustomers")} id="popup-closeButton" class="topButton">
                        <img src="IMG/Global/close.png" alt="">
                    </button>
                </div>

            </div>

            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="popup-grid">

                <div id="money-lent" class="popupGrid-element">
                    <label for="p-moneyLent" class="popup-label">Kölcsönadott összeg:</label>
                    <div class="pv-row">
                        <p class="popup-input money pValue" id="p-moneyLent">14 000 000 Ft</p>
                    </div>
                </div>

                <div id="money-back" class="popupGrid-element">
                    <label for="p-moneyBack" class="popup-label">Visszatérítendő összeg:</label>
                    <div class="pv-row">
                        <p id="p-moneyBack"> 15 000 000 Ft</p>
                    </div>
                </div>

                <div id="interest" class="popupGrid-element">
                    <label for="p-interest" class="popup-label">Kamatszázalék:</label>
                    <div class="pv-row">
                        <p class="popup-input money pValue" id="p-interest">100%</p>

                    </div>
                </div>
                
                <div id="start-date" class="popupGrid-element">
                    <label for="p-startDate" class="popup-label">Megkötés dátuma:</label>
                    <div class="pv-row">
                        <p class="popup-input money pValue" id="p-startDate">2025.02.13.</p>
                    </div>
                </div>

                <div id="exp-date" class="popupGrid-element">
                    <label for="p-expDate" class="popup-label">Lejárat dátuma:</label>
                    <div class="pv-row">
                        <p class="popup-input money pValue" id="p-expDate">2027.02.13.</p>
                    </div>
                </div>



                <div id="description" class="popupGrid-element">
                    <label for="p-description" class="popup-label">Leírás:</label>
                    <textarea type="text" class="popup-input" id="p-description" readonly>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea deserunt minus iure beatae quisquam necessitatibus iusto exercitationem, expedita doloribus, tenetur accusantium ipsum fuga, nemo maiores. Sapiente voluptas reiciendis deserunt sit!
                        Sed quos repudiandae est veniam reiciendis at laborum fugiat beatae tenetur aliquid, porro sint provident exercitationem nesciunt soluta. Aperiam quis consequatur illo quo voluptas ut! Enim cupiditate animi accusantium harum?
                        Neque provident quaerat vero facere, perferendis dicta esse earum iure unde sint, accusantium rerum necessitatibus reprehenderit sit fugit minus impedit at est consequuntur repellendus qui et. Laborum, consectetur magnam. Illum.
                        Magnam, veritatis? Laborum, voluptatum ducimus nam nesciunt vel unde veritatis dolore, iure quos, earum non nihil! Ullam tempora aspernatur aliquam molestias illum quia recusandae soluta aperiam. Rerum quos in quibusdam!
                    </textarea>
                </div>

                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div id="shop" class="popupGrid-element" on:click={()=>open_popup("shopChooser",false, false)}>
                    <div id="shop-row1">
                        <img src="IMG/Shops/no-shop-image.png" alt="">
                    </div>
                    <div id="shop-row2">
                        <p>Tóth Pista Zálogház és Ékszerüzlet</p>
                    </div>
                </div>


                <div id="products" class="popupGrid-element">
                    <p class="popup-label">Zálogtárgyak</p>
                    <div class="productField-flex">

                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
                        <div class="productButton">
                            <img src="IMG/Global/no-image.png" alt="">
                            <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                        </div>
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
        #shop{
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
        #shop{
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
        #shop{
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

            .pValue {
                font-size: 25px !important;
                margin-top: -2px !important;
                margin-right: 12px !important;
                text-align: right !important;
                width: 98% !important;
                overflow: hidden;
                margin-bottom: 0px !important;
            }

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

    #shop {
        cursor: pointer;
    }

    #bottomRow {
        height: 0px;
    }



</style>