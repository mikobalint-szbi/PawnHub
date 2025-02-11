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

                    <div class="settlInput">
                        <input type="text" placeholder="Írja be a város nevét!">
                        <button>Hozzáadás</button>
                    </div>

                </div>
                <div class="row4">
                    <div id="selectedSettlements">                
                        {#each {length: 17} as _, i}
                        <div class="settlTag" title="Kattintson a törléshez!">
                            <p class="name">
                                {Array("Nagykőrös","Jászfelsőszentgyörgy", "Kiskunfélegyháza", "Szob", "Kocsér", "Tiszakécske")[Math.floor(Math.random() * 6)]}
                            </p>
                            <button class="delButton">
                                <img src="IMG/Global/close.png" alt="">
                            </button>
                        </div>
                        {/each}
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
                    <h3 class="productTitle" title="Termék neve">Termék neve Termék neve Termék neve Termék neve Termék neve Termék neve Termék neve Termék neve </h3>
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

        .productDescription {
            display: none;
        }

        .innerRow {
            flex-direction: column;
        }

        #main-container, #searchBox {
            width: 90%;
        }

        .productCard .row1 {
            flex-direction: column;
        }

        .productTitle {
            max-height: 46px;
            font-size: 16px;
        }

        .productLocation {
            margin-bottom: 8px;
        }

        .productPrice {
            width: 100%;
            p {
                font-size: 30px;
            }
        
        }

        #searchBox {
            .row2{
                flex-direction: column;

                .col1, .col2 {
                    width: 100%;
                }
                .col2 {
                    input {
                        width: 45%;
                    }
                }
            }
        }

        #searchBox {
            .row3 {
                flex-direction: column;

                select, .settlInput {
                    width: 100%;
                }
            }
        }

        .settlInput {
            input {
                width: 55% !important;
            }
            button {
                width: 45% !important;
            }
        }

    }
    @media (min-width: 300px) {



    
    }
    @media (min-width: 340px) {

        .settlInput {
            input {
                width: 60% !important;
            }
            button {
                width: 40% !important;
            }
        }


    }
    @media (min-width: 404px) {

        .productPrice {
            p {
                font-size: 24px;
            }
        
        }

        .productCard .row1 {
            flex-direction: row;
        }

        .settlInput {
            input {
                width: 70% !important;
            }
            button {
                width: 30% !important;
            }
        }
    
    }
    @media (min-width: 468px) {

        #searchBox {
            .row2{
                flex-direction: row;
                
                .col1, .col2 {
                    width: 50%;
                }
                .col2 {
                    input {
                        width: 40%;
                    }

                }
                .col1 {
                    padding-right: 4px;
                }
            }
        }

        .productLocation {
            margin-bottom: 0;
        }


        .productCard .row1 .col1 {
            width: 35%;
        }
        .productCard .row1 .col2 {
            width: 65%;
        }


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        .productTitle {
            max-height: 46px;
            font-size: 16px;
        }

        #main-container, #searchBox {
            width: 87%;
            max-width: 1000px;
        }

        .settlInput {
            input {
                width: 78% !important;
            }
            button {
                width: 22% !important;
            }
        }


    }
    @media (min-width: 768px) {

        #main-container, #searchBox {
            width: 80%;
            max-width: 1000px;
        }

        .productTitle {
            max-height: 52px;
            font-size: 18px;
        }

        .productPrice {
            width: 40%;
            p {
                font-size: 26px;
            }
        }
        .productLocation {
            width: 60%;
        }

        .innerRow {
            flex-direction: row;
        }

        .productCard .row1 .col1 {
            width: 25%;
        }
        .productCard .row1 .col2 {
            width: 75%;
        }

        .settlInput {
            input {
                width: 65% !important;
            }
            button {
                width: 35% !important;
            }
        }
        
        #searchBox {
            .row3 {
                flex-direction: row;

                select, .settlInput {
                    width: 50%;
                }
            }
        }

    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {
        .productDescription {
            max-height: 85px;
            display: block;
        }

        .productPrice {
            p {
                font-size: 38px;
            }
        }

        .productPrice, .productLocation {
            width: 50%;
        }

        .settlInput {
            input {
                width: 72% !important;
            }
            button {
                width: 28% !important;
            }
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .productDescription {
            max-height: 105px;
        }

    }


    #body{

        #head-div {
            margin-bottom: 8px;
            #h-col2 {
                h1 {
                    margin: 0 !important;
                }
            }
        }

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
                margin-bottom: 20px;

                fieldset {
                    border: 1px solid rgb(106, 137, 116);
                }

                .row1 {
                    #searchBar {
                        width: 100%;
                        border-radius: 4px 4px 0 0;
                        height: 40px;
                        font-size: 22px;
                        padding: 0 8px;
                    }
                }
                .row2 {
                    display: flex;
                    padding: 10px 0;
                    gap: 10px;
                    
                    .col1 {

                        display: flex;
                        gap: 4px;
                        align-items: baseline;

                        p {
                            width: 50%;
                        }
                        select {
                            width: 100%;
                            border-radius: 0 !important;
                            font-size: 16px;
                        }

                    }
                    .col2 {
                        display: flex;
                        justify-content: end;
                        align-items: baseline;
                        gap: 5px;


                        input {
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
                        font-size: 16px;
                    }
                    .settlInput {
                        display: flex;
                        gap: 3px;

                        input {

                            border-radius: 5px 0 0 5px;
                            padding-left: 4px;
                        }
                        button {
                            border-radius: 0 5px 5px 0;


                        }
                    }


                }

                .row4 {
                    #selectedSettlements {
                        min-height: 32px;
                        display: flex;
                        background-color: rgb(199, 238, 217);
                        border: 1px solid black;
                        flex-wrap: wrap;
                        row-gap: 6px;
                        column-gap: 4px;
                        padding: 6px;
                        overflow: hidden;

                        .settlTag {
                            display: flex;
                            background-color: rgb(128, 204, 154);
                            padding: 3px;
                            padding-left: 12px;
                            padding-right: 8px;
                            gap: 6px;
                            align-items: center;
                            border-radius: 20px;
                            border: 1px solid rgb(106, 137, 116);
                            cursor: pointer;

                            .name {
                                margin: 0;
                            }
                            .delButton {
                                height: 16px;
                                width: 16px;
                                border-radius: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border: 1px solid rgb(101, 145, 109);
                                background-color: rgb(110, 153, 125);

                                img {
                                    width: 100%;
                                }
                            }
                        }
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

            margin-bottom: 30px;


            .productCard {
                width: 100%;
                padding: 10px;
                border: 1px solid black;
                margin-bottom: 10px;
                border-radius: 7px;
                box-shadow: 1px 1px 2px black;
                cursor: pointer;

                .row1 {
                    width: 100%;
                    display: flex;
                    gap: 15px;

                    .col1 {
                        img {
                            width: 100%;
                            border: 1px solid black;
                            border-radius: 4px;
                        }
                    }
                    .col2 {
                        padding-right: 10px;
                        display: flex;
                        flex-direction: column;

                        .productTitle {
                            margin-top: 5px;
                            margin-bottom: 0px;
                            font-weight: 500;
                            overflow: hidden;
                        }
                        .productCategory {
                            margin-top: -3px;
                            margin-bottom: 3px;
                            font-size: 14px;
                            color: rgb(87, 104, 92);
                        }
                        .productDescription {
                            overflow: hidden;
                            margin: 0;
                            margin-bottom: 20px;
                            font-size: 15px;
                            color: rgb(28, 31, 29);

                        }

                        .innerRow {
                            display: flex;
                            width: 100%;
                            margin-top: auto;


                            .productLocation {

                                p {
                                    margin: 0;
                                    font-size: 15px;
                                    color: rgb(35, 61, 46);

                                }

                                .productShop {

                                }
                                .productSettlement {
                                    font-weight: 500;
                                }

                            }
                            .productPrice {
                                display: flex;
                                justify-content: end;
                                align-items: center;



                                p {
                                    color: rgb(26, 110, 60);
                                    font-weight: 400;
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