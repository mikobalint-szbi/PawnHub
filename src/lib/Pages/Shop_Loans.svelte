<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {api, formatNum, timeToDate, dateDisplay, roundForint, isExpired} from "$lib/Scripts/functions.js";
    import { onMount } from "svelte";
    import { loan_forShops, product_forShops, loan_empty, isNewEntry } from '@/stores/global.js';
    import '$lib/Styles/loans.scss';


    let searchResults = []
    let active = []
    let expired = []

    sessionStorage["loanSwitch"] = "1"

    function psOption1_clicked(){
        document.getElementById("ps-option1").classList.add("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.remove("active")

        sessionStorage["loanSwitch"] = "1"
        switch_results()
    }
    function psOption2_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.add("active")
        document.getElementById("ps-option3").classList.remove("active")

        sessionStorage["loanSwitch"] = "2"
        switch_results()
    }
    function psOption3_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.add("active")

        sessionStorage["loanSwitch"] = "3"
        switch_results()
    }


    function switch_results () {

        if (document.getElementById("searchError"))
            document.getElementById("searchError").style.display = "none"

        let switchStatus = sessionStorage["loanSwitch"]
        let searchIn = document.getElementById("searchIn").value
        let searchKey = document.getElementById("searchKey").value.toLowerCase()
        let displayList =  []
        searchResults =  []

        if (!switchStatus || switchStatus == "1"){
            displayList = active.slice()
        }
        else if (switchStatus == "2") {
            displayList = expired.slice()
        }
        else if (switchStatus == "3"){
            displayList = expired.slice()
            displayList.push(...active)
        }
        else {
            console.log("switch_results(): error")
        }

        if (searchKey) {                
            if (searchIn == "customer") {
                displayList.forEach(e => {
                    if (e.customer.name.toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
            else if (searchIn == "item") {
                displayList.forEach(e => {
                    var BreakException = {};

                    try {
                        e.items.forEach(item => {
                            if (item.name.toLowerCase().includes(searchKey)){
                                searchResults.push(e)
                                throw BreakException;
                            }
                        })
                    } catch (e) {
                        if (e !== BreakException) throw e;
                    }
                })
            }
            else { // description
                displayList.forEach(e => {
                    if (e.description.toLowerCase().includes(searchKey)){
                        searchResults.push(e)
                    }
                })
            }
            /*displayList.forEach(e => {
                
            })*/
        }
        else {
            searchResults = displayList
        }

        if (searchResults.length == 0) {
            searchError("Nincs találat.", true, "big")
        }

    }

    function loanRow_clicked (i) {

        loan_forShops.set(searchResults[i])
        isNewEntry.set(false)
    
        open_popup("loanPopup")
    }

    function productButton_clicked (i, j) {

        product_forShops.set(searchResults[i].items[j])
        loan_forShops.set(searchResults[i])

        open_popup("productPopup")
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



    async function get_loans () {
        
        searchError("Adatok lekérése folyamantban...", true)
        let reply = await api('GET', "/loans");

        if (document.getElementById("searchError"))
            document.getElementById("searchError").style.display = "none"

        if (reply) {

            if (reply.length > 0) {
                reply.forEach(e => {
                    if (isExpired(e.expDate)){
                        expired.push(e)
                    }
                    else {
                        active.push(e)
                    }
                });
            }

            switch_results()

            if (searchResults.length == 0) {
                searchError("Nincs találat.", true, "big")
                
            }

            console.log(searchResults)
            //return reply.items

        }
        else {
            searchError("Ismeretlen szerverhiba történt!", false, "big")

        }

    }

    function newLoan_clicked () {
        loan_forShops.set(loan_empty)
        isNewEntry.set(true)

        open_popup("loanPopup",true,false)
    }

    onMount(() =>{

        document.getElementById('searchKey').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                switch_results()
            }
        });

        let col7 = document.querySelectorAll("td.col7")
        
        for (let i = 0; i < col7.length; i++) {

            if (col7.item(i).querySelector(".productField-flex").childElementCount > 1){

                col7.item(i).querySelector("p.productField-more").style.display = "block"
            
            }
        }

        get_loans()

    })


</script>
{#if localStorage["auth_token"]}
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
            <h1>Adósságok</h1>
            
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
                    <option value="customer">Ügyfél</option>
                    <option value="item">Zálogtárgy</option>
                    <option value="notes">Leírás</option>
                </select>
                <input type="text" id="searchKey">
                <button on:click={switch_results}>Keresés</button>
            </div>

            <div id="product-status">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option1" class="ps-option active" on:click={psOption1_clicked} tabindex="0" role="button">
                    <p>Aktív</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option2" class="ps-option"  on:click={psOption2_clicked} tabindex="0" role="button">
                    <p>Lejárt</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option3" class="ps-option"  on:click={psOption3_clicked} tabindex="0" role="button">
                    <p>Összes</p>
                </div>
            </div>

        </div>
        <div id="hl-col3">
            <button id="add-button" on:click={newLoan_clicked}>
                <div id="add-col1">
                    <img src="IMG/Global/add.png" alt="Hozzáadás" title="Hozzáadás">
                </div>
                <div id="add-col2">
                    <p>Hozzáadás</p>
                </div>
            </button>
        </div>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id="main-container">

        {#if searchResults.length != 0}

        <table id="main">
            <tr class="thead">
                <th class="col1" title="Kölcsönadott összeg"><span class="moneyLent">Kölcsönadott</span><span class="moneyBack-inner"><span title="Kölcsönadott összeg">Kölcs. </span>| <span title="Visszatérítendő összeg" class="green">Vissz.</span><span class="interest-inner">| </span><span title="Kamatszázalék" class="interest-inner">Kam.</span></span></th>
                <th class="col2" title="Visszatérítendő összeg">Visszatérítendő</th>
                <th class="col3"><span class="concDate">Megköttetett</span><span class="expDate-inner"><span title="Megköttetett">Megk. </span>| Lejár</span></th>
                <th class="col4">Lejár</th>
                <th class="col5" title="Kamatszázalék">Kamat</th>
                <th class="col6">Ügyfél</th>
                <th class="col7">Zálogtárgyak</th>
                <th class="col8">Leírás</th>
            </tr>
            {#each searchResults as loan, i}
            <div class="row" >
                <td class="col1" href="" tabindex="0" on:click={() => loanRow_clicked(i)}>
                    <p title="Kölcsönadott összeg">{formatNum(loan.givenAmount)} Ft</p>
                    <p class="moneyBack-inner green" title="Visszatérítendő összeg">{formatNum(roundForint(loan.givenAmount * (1 + loan.interest / 100)))} Ft</p>
                    <p class="interest-inner" title="Kamat">{loan.interest}%</p>
                </td>
                <td class="col2 green" href="" tabindex="-1" on:click={() => loanRow_clicked(i)}>{formatNum(roundForint(loan.givenAmount * (1 + loan.interest / 100)))} Ft</td>
                <td class="col3"  on:click={() => loanRow_clicked(i)}>
                    <p title="Megköttetett">{timeToDate(loan.created_at)}</p>
                    <p class="expDate-inner" title="Lejár">{dateDisplay(loan.expDate)}</p>
                </td>
                <td class="col4" on:click={() => loanRow_clicked(i)}>{dateDisplay(loan.expDate)}</td>
                <td class="col5" on:click={() => loanRow_clicked(i)}>{loan.interest}%</td>
                <td class="col6">

                    <div class="shopField-flex" tabindex="0" on:click={() => open_popup("customerPopup",false,false)}>
                        {#if loan.customer.img}
                            <img src="data:image/png;base64,{loan.customer.img}" alt="Az ügyfél fényképe">
                        {:else}
                            <img src="IMG/Global/no-profile-image.png" alt="Az ügyfél fényképe">
                        {/if}
                        <p>{loan.customer.name}</p>
                    </div>
                </td>
                <td class="col7">
                    <div class="productField-flex">
                        {#if loan.items.length == 0}
                            <p class="noItems">Nem tartozik  zálogtárgy ehhez az adóssághoz.</p>
                        {:else}

                            {#each loan.items.slice(0, 2) as item, j}
                                <div class="productButton"  tabindex="0" on:click={() => productButton_clicked(i, j)}>

                                    {#if item.img}
                                        <img src="data:image/png;base64,{item.img}" alt="A termék fényképe">
                                    {:else}
                                        <img src="IMG/Global/no-image.png" alt="A termék fényképe">
                                    {/if}

                                    <p>{item.name}</p>
                                </div>
                            {/each}
                        {/if}
                        {#if loan.items.length > 2}
                            <p class="productField-more">...és további {loan.items.length-2} db zálogtárgy.</p>
                        {/if}
                    </div>
                </td>
                <td class="col8" on:click={() => loanRow_clicked(i)}>
                    {#if loan.description}
                        {#if loan.description.length > 180}
                            {loan.description.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>").substring(0,180)}...
                        {:else}
                            {loan.description.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>")}
                        {/if}
                    {/if}
                </td>
            </div>
            {/each}

                

        </table>
        {/if}
    </div>

</section>
{/if}

<style lang="scss">
   
</style>