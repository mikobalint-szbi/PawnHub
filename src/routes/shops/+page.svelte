<script>

    import { onMount } from "svelte";
    import '$lib/Styles/shopCard.scss';
    import '$lib/Styles/settlInput.scss';
    import '$lib/Styles/shopsAndProducts.scss';
    import CategorySelector from "$lib/CategorySelector.svelte";
    import {
        toggle_settlDropdown, init_settlInput, getAllQueryParams, setAllQueryParams, setQueryParam, getQueryParam, 
        removeAllQueryParams, add_firstSettlement, add_settlement, api, formatNum, show_pageSelector, hide_pageSelector,
        get_categories
    } from "$lib/Scripts/functions.js";
    import { 
        fill_queryParams_fromInputs, searchError, fill_settlementTags, fill_inputs 
    } from '$lib/Scripts/shopsAndProducts.js'
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import PageSelector from '$lib/PageSelector.svelte';


    let categories = {}
    let searchResults = [];
    let numOfPages = 5;
    let currentPage = sessionStorage["currentPage"];
    let currentUrl = window.location.href

    
    function searchButton_pressed () {
        sessionStorage["currentPage"] = "1"
        fill_queryParams_fromInputs(true)

        setTimeout(() => {
            window.location.reload();
        }, 50);
    }

    async function search () {
        hide_pageSelector()

        removeAllQueryParams(true)

        fill_queryParams_fromInputs(true)
        currentPage = sessionStorage["currentPage"]


        // Paraméterek összeállítása:

        let data = {
            searchKey: document.getElementById("searchBar").value,
            hold: document.getElementById("selectCounty").value,
            settlements: "",
            page: sessionStorage["currentPage"] ?? "1"

        }

        let cs = JSON.parse(localStorage["chosenSettlements"] ?? "{}") 

        if (data.hold == "0"){
            delete data.hold
        }

        Object.keys(cs).forEach(key=>{
            data.settlements += `${String(cs[key]).replaceAll("-","_")}_`
        })

        data.settlements = data.settlements.slice(0, -1)

        // Link összeállítása:

        let url = `/shops/?`

        Object.keys(data).forEach(key=> {
            if (data[key]){
                url += `${key}=${data[key]}&`

            }
        })

        url = url.slice(0, -1)
        console.log(url)
        // API-kérelem:

        searchError("Adatok lekérése folyamantban...", true, "top")

        categories = await get_categories()


        let reply = await api('GET', url);

        if (document.getElementById("searchError"))
            document.getElementById("searchError").style.display = "none"

            
        if (reply) {
            searchResults = reply.shops
            sessionStorage["numOfPages"] = Math.ceil(reply.length / 30)
            numOfPages = Math.ceil(reply.length / 30)
            currentPage = sessionStorage["currentPage"] ?? 1
            sessionStorage["numOfResults"] = reply.length

            if (searchResults.length == 0) {
                searchError("Nincs találat.", true, "big")

            }

            console.log(searchResults)
            //return reply.items

        }
        else {
            searchError("Ismeretlen szerverhiba történt!", false, "big")
            hide_pageSelector()
            //return [];
        }

        show_pageSelector()
    }
    
    onMount(()=> {

        document.getElementById("searchBar").addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchButton_pressed()
            }
        });

    
        hide_pageSelector()

        fill_inputs(true)
        
        init_settlInput(true)

        setTimeout(() => {
            search()
        }, 50);

        show_pageSelector()
    
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
            <h1>Zálogházak</h1>
        </div>
        <div id="h-col3">
        </div>
    </div>

    <div id="headDiv-lower" class="big">

        <div id="searchBox" class="big">
            <div class="row1">
                <input type="text" id="searchBar" placeholder="Zálogház neve...">
            </div>

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

                    <div class="settlInput-box">
                        <div class="settlDropdown">
                            <input type="text" id="settlInput" placeholder="Írja be a település nevét!">
                            <div id="dropdownContent">

                                <!-- svelte-ignore a11y-missing-attribute -->
                                <!--a >Link 1</a-->

                            </div>
                        </div>

                        <button>Hozzáadás</button>
                    </div>

                </div>
                <div class="row4">
                    <div id="selectedSettlements">                

                        <!--div class="settlTag" title="Kattintson a törléshez!">
                            <p class="name">
                                {Array("Nagykőrös","Jászfelsőszentgyörgy", "Kiskunfélegyháza", "Szob", "Kocsér", "Tiszakécske")[Math.floor(Math.random() * 6)]}
                            </p>
                            <button class="delButton">
                                <img src="IMG/Global/close.png" alt="">
                            </button>
                        </div-->
                        
                    </div>
                </div>
            </fieldset>

            <div class="row5">
                <button id="searchButton" on:click={searchButton_pressed}>
                    <img src="IMG/Global/search.png" alt="">
                    <p>Keresés</p>
                </button>
            </div>

        </div>

    </div>

    <div id="main-container" class="big">
        
        {#each searchResults as shop}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="shopCard" on:click={()=>location.assign(`shop/?id=${shop.id}`)}>
            <div class="row1">
                <div class="col1">
                    {#if shop.img}
                        <img src="data:image/png;base64,{shop.img}" class="shopImage" alt="A zálogház fotója">
                    {:else}
                        <img src="IMG/Global/no-shop-image.png" class="shopImage" alt="A zálogház fotója">
                    {/if}
                </div>
                <div class="col2">
                    <h3 class="shopTitle" title="Zálogház neve">{shop.name}</h3>
                    <p class="shopDescription">
                        {shop.intro.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>")}
                    </p>
                    <div class="innerRow">
                        <div class="shopLocation">
                            <p class="shopSettlement">{shop.settlement.name}</p>
                            <p class="shopAddress">{shop.address}</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        {/each}

    </div>

</section>

<PageSelector numOfPages={numOfPages} currentPage={currentPage} url={currentUrl}/>


<style lang="scss">
            
            
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

    #headDiv-lower {
        display: flex !important;
    }


</style>