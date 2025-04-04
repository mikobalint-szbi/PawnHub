<script>

    import { onMount } from "svelte";
    import '$lib/Styles/productCard.scss';
    import '$lib/Styles/settlInput.scss';
    import CategorySelector from "$lib/CategorySelector.svelte";
    import {
        toggle_settlDropdown, init_settlInput, getAllQueryParams, setAllQueryParams, setQueryParam, getQueryParam, 
        removeAllQueryParams, add_firstSettlement, add_settlement, api
    } from "$lib/Scripts/functions.js";
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    

    async function search () {
        removeAllQueryParams()
        
        if (document.getElementById("searchBar").value) {
            setTimeout(() => {
                setQueryParam("searchKey", document.getElementById("searchBar").value)
            }, 100);
        }
        if (document.getElementById("selectCategory").value != "0") {
            setTimeout(() => {
                setQueryParam("category", document.getElementById("selectCategory").value)
            }, 100);
        }
        if (document.getElementById("minPrice").value) {
            setTimeout(() => {
                setQueryParam("minPrice", document.getElementById("minPrice").value)
            }, 100);
        }
        if (document.getElementById("maxPrice").value) {
            setTimeout(() => {
                setQueryParam("maxPrice", document.getElementById("maxPrice").value)
            }, 100);
        }
        if (document.getElementById("selectCounty").value != "0") {
            setTimeout(() => {
                setQueryParam("holding", document.getElementById("selectCounty").value)
            }, 100);
        }




        

    }

    function get_items () {

        let params = {
            searchKey: getQueryParam("searchKey"),
            hold: getQueryParam("holding"),
            searchIn: getQueryParam("searchIn"),
            category: getQueryParam("category"),
            page: getQueryParam("page"),
            orderBy: getQueryParam("orderBy"),
            min: getQueryParam("minPrice"),
            max: getQueryParam("maxPrice")
        }

        console.log(params)

    }

    function fill_inputs() {
        if (getQueryParam("searchKey"))
            document.getElementById("searchBar").value = getQueryParam("searchKey")
        /*document.getElementById("").value = getQueryParam("holding")
        document.getElementById("").value = getQueryParam("searchIn")
        document.getElementById("").value = getQueryParam("categoryGroup")
        document.getElementById("").value = getQueryParam("page")
        document.getElementById("").value = getQueryParam("orderBy")*/
        if (getQueryParam("category"))
            document.getElementById("selectCategory").value = getQueryParam("category")
        if (getQueryParam("holding"))
            document.getElementById("selectCounty").value = getQueryParam("holding")
        
        document.getElementById("minPrice").value = getQueryParam("minPrice")
        document.getElementById("maxPrice").value = getQueryParam("maxPrice")

        // Settlements:

        fill_settlementTags()

    }

    async function fill_settlementTags(){
        
        let settlCodes;

        if (getQueryParam("settlements")) {
            settlCodes = getQueryParam("settlements").split("_")

            localStorage["chosenSettlements"] = "{}"

            settlCodes.forEach(async (code) => {
                let id;

                if (code.includes("-")) {
                    id = code.split("-")[0]
                }
                else {
                    id = code
                }

                let reply = await api('GET', `/settlement/${id}`);

                if (reply && reply.name) {
                
                    add_settlement(reply.name, code, true)
                
                }

            });

        }
        else {
            // Fill from LocalStorage:

            let cs = JSON.parse(localStorage["chosenSettlements"])

            Object.keys(cs).forEach(key=>{
                
                setTimeout(() => {
                    add_settlement(key, cs[key], false, true)

                }, 50);

            })

        
        }



    }


    onMount(()=> {

        fill_inputs()
        get_items()
        
        init_settlInput(true)



    })


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
                    <CategorySelector/>
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
                <div class="row3" id="row3">

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

                    <div class="settlInput-box">
                        <div class="settlDropdown">
                            <input type="text" id="settlInput" placeholder="Írja be a település nevét!">
                            <div id="dropdownContent">

                                {#each {length: 37} as _, i}
                                <!-- svelte-ignore a11y-missing-attribute -->
                                <a >Link 1</a>
                                {/each}
                              </div>
                        </div>
                        <button on:click={add_firstSettlement}>Hozzáadás</button>
                    </div>

                </div>
                <div class="row4">
                    <div id="selectedSettlements">

                        <!--div class="settlTag" title="Kattintson a törléshez!">
                            <p class="name">A</p>
                            <button class="delButton">
                                <img src="IMG/Global/close.png" alt="">
                            </button>
                        </div-->

                    </div>
                </div>
            </fieldset>

            <div class="row5">
                <button id="searchButton" on:click={search}>
                    <img src="IMG/Global/search.png" alt="">
                    <p>Keresés</p>
                </button>
            </div>

        </div>

    </div>

    <div id="main-container">
        

        {#each {length: 17} as _, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="productCard" on:click={()=>location.assign('product')}>
            <div class="row1">
                <div class="col1">
                    <img src="IMG/Global/no-image.png" class="productImage" alt="Termék fotója">
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

        #main-container, #searchBox {
            width: 90%;
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

                select, .settlInput-box {
                    width: 100%;
                }
            }
        }

        .settlInput-box {
            .settlDropdown {
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

        .settlInput-box {
            .settlDropdown {
                width: 60% !important;
            }
            button {
                width: 40% !important;
            }
        }


    }
    @media (min-width: 404px) {



        .settlInput-box {
            .settlDropdown {
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


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #main-container, #searchBox {
            width: 87%;
            max-width: 1000px;
        }

        .settlInput-box {
            .settlDropdown {
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
        .settlInput-box {
            .settlDropdown {
                width: 65% !important;
            }
            button {
                width: 35% !important;
            }
        }
        
        #searchBox {
            .row3 {
                flex-direction: row;

                select, .settlInput-box {
                    width: 50%;
                }
            }
        }

    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

        .settlInput-box {
            .settlDropdown {
                width: 72% !important;
            }
            button {
                width: 28% !important;
            }
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {



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
                        display: none;

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

        }

    }

    :global(.settlTag) {
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

        :global(.name) {
            margin: 0;
        }
        :global(.delButton) {
            height: 16px !important;
            width: 16px !important;
            border-radius: 100% !important;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgb(101, 145, 109);
            background-color: rgb(110, 153, 125);

            :global(img) {
                width: 100% !important;
            }
        }
    }

    :global(a#empty) {
        color: rgb(109, 128, 115) !important;
    }





</style>