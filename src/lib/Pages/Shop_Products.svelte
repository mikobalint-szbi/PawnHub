<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {api, formatNum, timeToDate, dateDisplay, roundForint, isExpired, get_categories} from "$lib/Scripts/functions.js";
    import { loan_forShops, product_forShops, isNewEntry } from '@/stores/global.js';
    import { condition } from "$lib/Scripts/variables.js";
    import { onMount } from "svelte";

    let categories = {}
    let searchResults = []
    let pawned = []
    let sale = []

    sessionStorage["productSwitch"] = "1"

    function psOption1_clicked(){
        document.getElementById("ps-option1").classList.add("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.remove("active")

        sessionStorage["productSwitch"] = "1"
        switch_results()
    }
    function psOption2_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.add("active")
        document.getElementById("ps-option3").classList.remove("active")

        sessionStorage["productSwitch"] = "2"
        switch_results()
    }
    function psOption3_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.add("active")

        sessionStorage["productSwitch"] = "3"
        switch_results()
    }

    
    export function searchError (text, ...args) {

        let mainContainer = document.getElementById("main-container")
        //mainContainer.innerHTML = ""

        let err = document.createElement('p');
        err.textContent = text;
        err.id = 'searchError';
        err.className = 'error';
        err.style.display = "block"
        mainContainer.prepend(err);

        err.style.fontSize = "17px"
        err.style.marginTop = "20px"

        if (args[0] && args[0] == true) {
            err.style.color = "rgb(64, 108, 78)"
        }
        else {
            err.style.color = "rgb(156, 30, 30)"
        }
        if (args[1]) {
            if (args[1] == "top") {
                err.style.marginTop = "-15px"
            }
            else if (args[1] == "big") {
                err.style.fontSize = "25px"
            }
            
        }
        else {

        }
        if (args[2] && args[2] == false) {
            err.style.fontSize = "25px"
        }
    }
    
    function productRow_clicked (i) {

        product_forShops.set(searchResults[i])
        isNewEntry.set(false)
    
        open_popup("productPopup")
    }

    function newProduct_clicked () {
        product_forShops.set(product_empty)
        isNewEntry.set(true)

        open_popup("loanPopup",true,false)
    }
    
    function switch_results () {

        if (document.getElementById("searchError"))
            document.getElementById("searchError").style.display = "none"

        let switchStatus = sessionStorage["productSwitch"]
        let searchIn = document.getElementById("searchIn").value
        let searchKey = document.getElementById("searchKey").value.toLowerCase()
        let displayList =  []
        searchResults =  []

        if (!switchStatus || switchStatus == "1"){
            displayList = pawned.slice()
        }
        else if (switchStatus == "2") {
            displayList = sale.slice()
        }
        else if (switchStatus == "3"){
            displayList = pawned.slice()
            displayList.push(...sale)
        }
        else {
            console.log("switch_results(): error")
        }

        if (searchKey) {                
            if (searchIn == "name") {
                displayList.forEach(e => {
                    if (e.name.toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
            else if (searchIn == "category") {
                displayList.forEach(e => {
                    if (categories[e.type_id].toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
            else if (searchIn == "customer") {
                displayList.forEach(e => {
                    if (e.customer && e.customer.name.toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
            else if (searchIn == "condition") {
                displayList.forEach(e => {
                    if (condition[e.condition].toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
            else if (searchIn == "description") {
                displayList.forEach(e => {
                    if (e.description && e.description.toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
            else if (searchIn == "location") {
                displayList.forEach(e => {
                    if (e.location && e.location.toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
  
        }
        else {
            searchResults = displayList
            console.log("results:", searchResults)
        }

        if (searchResults.length == 0) {
            //searchError("Nincs találat.", true, "big")
        }

    }

    async function get_products () {

        categories = await get_categories()
        
        searchError("Adatok lekérése folyamantban...", true)
        let reply = await api('GET', "/shopAllItems");

        if (document.getElementById("searchError"))
            document.getElementById("searchError").style.display = "none"

        if (reply) {

            if (reply.length > 0) {
                reply.forEach(e => {
                    if (e.loan){
                        pawned.push(e)
                    }
                    else {
                        sale.push(e)
                    }
                });
            }

            switch_results()

            if (searchResults.length == 0) {
                searchError("Nincs találat.", true, "big")
                
            }

            //console.log(searchResults)
            //return reply.items

        }
        else {
            searchError("Ismeretlen szerverhiba történt!", false, "big")

        }

    }

    onMount(() =>{

        document.getElementById('searchKey').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                switch_results()
            }
        });


        setTimeout(() => {
            sessionStorage.removeItem("productsPage_reloaded")
        }, 1000);


        get_products()

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
            <h1>Zálogtárgyak</h1>


        </div>
        <div id="h-col3">
        </div>

    </div>

    <div id="headDiv-lower">

        <div id="hl-col1">

        </div>
        <div id="hl-col2">

            <div id="searchBox">
                <select name="" id="searchIn">
                    <option value="name">Név</option>
                    <option value="category">Kategória</option>
                    <option value="customer">Ügyfél</option>
                    <option value="condition">Állapot</option>
                    <option value="description">Leírás</option>
                    <option value="location">Hely</option>
                </select>
                <input type="text" id="searchKey">
                <button>Keresés</button>
            </div>

            <div id="product-status">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option1" class="ps-option active" on:click={psOption1_clicked} tabindex="0" role="button">
                    <p>Zálog</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option2" class="ps-option"  on:click={psOption2_clicked} tabindex="0" role="button">
                    <p>Eladó</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option3" class="ps-option"  on:click={psOption3_clicked} tabindex="0" role="button">
                    <p>Összes</p>
                </div>
            </div>

        </div>
        <div id="hl-col3">
            <button id="add-button" on:click={newProduct_clicked}>
                <div id="add-col1">
                    <img src="IMG/Global/add.png" alt="Hozzáadás" title="Hozzáadás">
                </div>
                <div id="add-col2">
                    <p>Hozzáadás</p>
                </div>
            </button>
        </div>
        
    
    </div>

    <div id="main-container">
        {#if searchResults.length != 0}
        <table id="main">
            <thead>
                <th class="col1">Kép</th>
                <th class="col2">Név</th>
                <th class="col3">Kategória</th>
                <th class="col4">Kölcsön</th>
                <th class="col5">Ügyfél</th>
                <th class="col6" title="Kifizetett érték">Kifizetett</th>
                <th class="col7" title="Becsült érték">Becsült</th>
                <th class="col8">Állapot</th>
                <th class="col9">Hely</th>
            </thead>
            <tbody>

                {#each searchResults as product, i}
                <div class="row" href="">
                    <td class="col1" href="" tabindex="0" on:click={() => productRow_clicked(i)}>
                        {#if product.img}
                            <img src="data:image/png;base64,{product.img}" alt="A termék fényképe">
                        {:else}
                            <img src="IMG/Global/no-image.png" alt="A termék fényképe">
                        {/if}
                    </td>
                    <td class="col2"  on:click={() => productRow_clicked(i)}>{product.name}</td>
                    <td class="col3"  on:click={() => productRow_clicked(i)}>{categories[product.type_id]}</td>
                    <td class="col4">

                        {#if product.loan}
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="loanField-flex" on:click={() => open_popup("loanPopup",false,false)}>
                                <button>
                                    <p title="Pénzösszeg" class="loanField-money">{formatNum(roundForint(product.loan.givenAmount * (1 + product.loan.interest / 100)))} Ft</p>
                                    <p title="Megköttetett" class="loanField-concludion">{timeToDate(product.loan.created_at)}</p>
                                    <p title="Lejár" class="loanField-expiration">{dateDisplay(product.loan.expDate)}</p>
                                    <p title="Kamat" class="loanField-interest">{product.loan.interest}%</p>
                                </button>
                            </div>
                        {/if}
                    </td>
                    <td class="col5" >
                        {#if product.customer}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div class="customerField-flex" on:click={() => open_popup("customerPopup",false,false)}>
                                {#if product.customer.img}
                                    <img src="data:image/png;base64,{product.customer.img}" alt="Az ügyfél fényképe">
                                {:else}
                                    <img src="IMG/Global/no-profile-image.png" alt="Az ügyfél fényképe">
                                {/if}

                                <p>{product.customer.name}</p>
                            </div>
                        {/if}
                    </td>
                    <td class="col6" on:click={() => productRow_clicked(i)}>{formatNum(product.payedValue)} Ft</td>
                    <td class="col7" on:click={() => productRow_clicked(i)}>{formatNum(product.estimatedValue)} Ft</td>
                    <td class="col8" on:click={() => productRow_clicked(i)}>{condition[product.condition]}</td>
                    <td class="col9" on:click={() => productRow_clicked(i)}>
                        {#if product.location}
                        {#if product.location.length > 70}
                            {product.location.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>").substring(0,70)}...
                        {:else}
                            {product.location.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>")}
                        {/if}
                    {/if}
                    </td>
                </div>
                {/each}

                
            </tbody>
        </table>
        {/if}
    </div>

</section>

<style lang="scss">
    
    @media (min-width: 0px) {
        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 140px; max-width: 140px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}



    }
    @media (min-width: 300px) {
        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 170px; max-width: 170px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}
    
    }
    @media (min-width: 340px) {
        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 185px; max-width: 185px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 280.5px;
        }
    }
    @media (min-width: 404px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 160px; max-width: 160px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ width: 90px; max-width: 90px; display: table-cell;}
        .col8{ display: none;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 300px;
        }
    
    }
    @media (min-width: 468px) {
        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 132px; max-width: 132px;}
        .col3{ display: none;}
        .col4{ width: 130px; max-width: 130px; display: table-cell;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ width: 90px; max-width: 90px;}
        .col8{ display: none;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 432px;
        }

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {
        .col1{ width: 90px;}
        .col2{ width: 150px; max-width: 150px;}
        .col3{ width: 100px; max-width: 100px; display: table-cell;}
        .col4{ width: 130px;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ width: 90px; max-width: 90px;}
        .col8{ display: none;}
        .col9{ display: none;}

        
        #headDiv-lower{
            width: 561px;
        }
    }
    @media (min-width: 768px) {

        .col1{ width: 90px;}
        .col2{ width: 130px; max-width: 130px;}
        .col3{ width: 100px;}
        .col4{ width: 130px;}
        .col5{ width: 110px; max-width: 110px; display: table-cell;}
        .col6{ width: 90px;  max-width: 90px; display: table-cell;}
        .col7{ width: 90px;}
        .col8{ display: none;}
        .col9{ display: none;}


        #headDiv-lower{
            width: 741px;
        }

    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {
        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 170px; max-width: 170px;}
        .col3{ width: 100px;}
        .col4{ width: 130px;}
        .col5{ width: 140px; max-width: 140px;}
        .col6{ width: 100px; max-width: 100px;}
        .col7{ width: 100px; max-width: 100px;}
        .col8{ width: 100px; max-width: 100px; display: table-cell;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 951px;
            
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 130px; max-width: 130px;}
        .col2{ width: 170px; max-width: 170px;}
        .col3{ width: 138px; max-width: 138px;}
        .col4{ width: 130px;}
        .col5{ width: 150px; max-width: 150px;}
        .col6{ width: 110px; max-width: 130px;}
        .col7{ width: 110px; max-width: 130px;}
        .col8{ width: 120px; max-width: 130px;} 
        .col9{ width: 140px; max-width: 140px; display: table-cell;}

        #headDiv-lower{
            width: 1198px;
        }
    }


    #body{

        #main-container{

            #main{

                td.col2{
                    font-weight: 400;
                }


                td.col1{
                    display: table-cell;
                    text-align: center;
                    vertical-align: middle !important;
                    padding-top: 7px;
                    img{
                        background-color: rgb(161, 213, 179);
                        width: 90%;
                        border: 1px solid black;
                        border-radius: 4px;
                        box-shadow: 0.3px 0.3px 1px black;
                    }
                }
                .col4{
                    
                }
                td.col5{

                }

                td.col8 {
                    overflow: hidden;
                    white-space: nowrap;
                }
                
            }
        }

    }

    table#main{

        //background-color: rgb(170, 216, 184);
        box-shadow: 1px 1px 4px black;
    }

</style>