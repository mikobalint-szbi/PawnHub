<script>


</script>

<section id="body">


    <div id="head-div">
        <div id="h-col1">
            <a href="/home" id="back">
                <button>
                    <div id="b-col1">
                        <img src="IMG/Global/back.png" alt="Vissza" title="Vissza">
                    </div>
                    <div id="b-col2">
                        <p id="back-p">Vissza</p>
                    </div>
                </button>
            </a>
        </div>
        <div id="h-col2">
            <h1>Termékek</h1>


        </div>
        <div id="h-col3">
        </div>

    </div>

    <div id="headDiv-lower">

        <div id="searchBox">
            <div class="row1">
                <input type="text" id="searchBar" placeholder="Termék neve...">
            </div>
            <div class="row2">
                <div class="col1">
                    <label for="selectCategory">Kategória:</label>
                    <select name="selectCategory" id="selectCategory">
                        <option value="">Az összes kategória</option>
                    </select>
                </div>
                <div class="col2">
                    <label for="">Ár: </label>
                    <input type="number" name="minPrice" id="minPrice" placeholder="Min.">
                    <label for="">&ndash;</label>
                    <input type="number" name="maxPrice" id="maxPrice" placeholder="Max.">
                </div>
            </div>
            <!--div class="row3">
                <h4>Keresés helye:</h4>
            </div-->

            <fieldset>
                <legend>Keresés helye</legend>
                <div class="row3">

                    <select name="selectCounty" id="selectCounty">
                        <optgroup label="Nagyvárosok">
                            <option value="1">Budapest</option>
                        </optgroup>
                        <optgroup label="Vármegyék">
                            <option value="0" selected>Az összes vármegye</option>
                            <option value="13">Bács-Kiskun vármegye</option>
                            <option value="4">Baranya vármegye</option>
                            <option value="16">Békés vármegye</option>
                            <option value="6">Borsod-Abaúj-Zemplén vármegye</option>
                            <option value="14">Csongrád vármegye</option>
                            <option value="2">Fejér vármegye</option>
                            <option value="7">Győr-Moson-Sopron vármegye</option>
                            <option value="20">Hajdú-Bihar vármegye</option>
                            <option value="5">Heves vármegye</option>
                            <option value="3">Jász-Nagykun-Szolnok vármegye</option>
                            <option value="12">Komárom-Esztergom vármegye</option>
                            <option value="19">Nógrád vármegye</option>
                            <option value="8">Pest vármegye</option>
                            <option value="17">Somogy vármegye</option>
                            <option value="11">Szabolcs-Szatmár-Bereg vármegye</option>
                            <option value="18">Tolna vármegye</option>
                            <option value="9">Vas vármegye</option>
                            <option value="10">Veszprém vármegye</option>
                            <option value="15">Zala vármegye</option>
                        </optgroup>
                    </select>

                    <input type="text" placeholder="Írja be a város(rész) nevét!">
                </div>
                <div class="row4">
                    <div id="selectedSettlements">                
                    
                    </div>
                </div>
            </fieldset>

            <div class="row5">
                <button id="searchButton">
                    <img src="IMG/Products/search.png" alt="">
                    <p>Keresés</p>
                </button>
            </div>

        </div>

    </div>

    <div id="main-container">
        
        {#each {length: 17} as _, i}
        <div class="productCard">
            <div class="row1">
                <div class="col1">
                    <img src="IMG/Global/no-image.png" alt="Termék fotója">
                </div>
                <div class="col2">
                    <h3 class="productTitle" title="Termék neve">Termék neve</h3>
                    <p class="productCategory">Karóra</p>
                    <p class="productDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum exercitationem iste voluptate aperiam dolor qui animi quis fugiat magnam assumenda distinctio, consequuntur corrupti expedita sit autem iusto provident! Dicta?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                    </p>
                    <div class="innerRow">
                        <div class="productLocation">
                            <p class="productShop">Tóth Pista Zálogház és Ékszerüzlet</p>
                            <p class="productSettlement">Nagykőrös</p>
                        </div>
                        <div class="productPrice">
                            <p >30 000 000 Ft</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        {/each}

    </div>

</section>

<style lang="scss">
    
    @media (min-width: 0px) {

    }
    @media (min-width: 300px) {

    
    }
    @media (min-width: 340px) {

    }
    @media (min-width: 404px) {

    
    }
    @media (min-width: 468px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

    }
    @media (min-width: 768px) {


    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

    }


    #body{

        #headDiv-lower {

            height: auto !important;
            display: flex;
            justify-content: center;

            #searchBox {
                border: 1px solid black;
                padding: 10px;
                height: fit-content;
                border-radius: 7px;
                box-shadow: 1px 1px 2px black;
                width: 80%;
                max-width: 1000px;
                margin-bottom: 20px;

                fieldset {
                    border: 1px solid rgb(106, 137, 116);
                }

                .row1 {
                    #searchBar {
                        width: 100%;
                    }
                }
                .row2 {
                    display: flex;
                    padding: 10px 0;
                    gap: 10px;
                    
                    .col1 {
                        width: 50%;
                        display: flex;
                        padding-right: 4px;
                        gap: 4px;
                        align-items: baseline;

                        p {
                            width: 50%;
                        }
                        select {
                            width: 100%;
                            border-radius: 0 !important;
                        }

                    }
                    .col2 {
                        width: 50%;
                        display: flex;
                        justify-content: end;
                        align-items: baseline;
                        gap: 5px;


                        input {
                            width: 40%;
                            text-align: end;
                        }
                    }
                }

                .row3 {
                    display: flex;
                    gap: 4px;
                    padding-bottom: 8px;

                    select {
                        border-radius: 0;
                        width: 50%;
                    }
                    input {
                        width: 50%;
                    }


                }

                .row4 {
                    #selectedSettlements {
                        min-height: 32px;
                        display: flex;
                        background-color: rgb(199, 238, 217);
                        border: 1px solid black;
                    }
                }

                .row5 {
                    display: flex;
                    justify-content: center;
                    padding-top: 10px;
                    width: 100%;
                    
                    #searchButton {
                        width: 100% !important;
                        height: 47px;
                        border-radius: 5px;
                        display: flex;
                        width: fit-content;
                        padding: 5px 10px;
                        align-items: center;
                        gap: 5px;
                        justify-content: center;

                        img {
                            height: 100%;
                        }
                        p {
                            margin: 0;
                            font-size: 20px;
                        }
                    }
                }

            }



        }


        #main-container {
            width: 80%;
            max-width: 1000px;
            margin-bottom: 30px;


            .productCard {
                width: 100%;
                padding: 10px;
                border: 1px solid black;
                margin-bottom: 10px;
                border-radius: 7px;
                box-shadow: 1px 1px 2px black;

                .row1 {
                    width: 100%;
                    display: flex;
                    gap: 15px;

                    .col1 {
                        width: 25%;


                        img {
                            width: 100%;
                            border: 1px solid black;
                        }
                    }
                    .col2 {
                        width: 75%;
                        padding-right: 10px;
                        display: flex;
                        flex-direction: column;

                        .productTitle {
                            margin-top: 5px;
                            margin-bottom: 0px;
                        }
                        .productCategory {
                            margin-top: -4px;
                            margin-bottom: 3px;
                        }
                        .productDescription {
                            max-height: 125px;
                            overflow: hidden;
                            margin: 0;
                            margin-bottom: 20px;
                        }

                        .innerRow {
                            display: flex;
                            width: 100%;
                            border: 1px solid blue;
                            margin-top: auto;


                            .productLocation {
                                width: 50%;

                                p {
                                    margin: 0;
                                }
                            }
                            .productPrice {
                                display: flex;
                                justify-content: end;

                                width: 50%;

                                p {
                                    font-size: 36px;
                                    margin: 0;
                                }
                            }
                        }
                    }
                }
            }
        }

    }


</style>