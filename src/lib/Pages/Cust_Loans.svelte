<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import {api, formatNum, timeToDate, dateDisplay, roundForint} from "$lib/Scripts/functions.js";
    import { onMount } from "svelte";
    import { loan_forCustomers, product_forCustomers } from '@/stores/global.js';

  
    let searchResults = []
    let active = []
    let expired = []

    function psOption1_clicked(){
        document.getElementById("ps-option1").classList.add("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.remove("active")
    }
    function psOption2_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.add("active")
        document.getElementById("ps-option3").classList.remove("active")
    }
    function psOption3_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.add("active")
    }

    function loanRow_clicked (i) {

        loan_forCustomers.set(searchResults[i])
    
        open_popup("loanPopup_forCustomers")
    }

    function productButton_clicked (i, j) {

        product_forCustomers.set(searchResults[i].items[j])
        loan_forCustomers.set(searchResults[i])

        open_popup("productPopup_forCustomers")
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

            searchResults = reply

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

    onMount(() =>{

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
                <select name="" id="">
                    <option value="shop">Zálogos</option>
                    <option value="item">Zálogtárgy</option>
                    <option value="notes">Leírás</option>
                </select>
                <input type="text">
                <button>Keresés</button>
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
            <button id="add-button" on:click={() => open_popup("messageOK","Kölcsönfelvétel céljából kérjük, vegye fel a kapcsolatot egy zálogházzal. <br> Ehhez javasoljuk Zálogházkereső oldalunkat, amelyet a főmenüben ér el.")}>
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
                <th class="col6">Zálogos</th>
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

                        <div class="shopField-flex" tabindex="0" on:click={()=>location.assign(`shop/?id=${loan.shop.id}`)}>
                            {#if loan.shop.img}
                                <img src="data:image/png;base64,{loan.shop.img}" alt="">
                            {:else}
                                <img src="IMG/Global/no-shop-image.png" alt="">
                            {/if}
                            <p>{loan.shop.name}</p>
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
                                            <img src="data:image/png;base64,{item.img}" alt="">
                                        {:else}
                                            <img src="IMG/Global/no-image.png" alt="">
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
    
    @media (min-width: 0px) {

        //.col7{ display: none;}
        .col8{ display: none;}


        .expDate-inner, .moneyBack-inner{
            display: none;
        }
        .concDate, .moneyLent{
            display: inline;
        }

        table{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            max-width: 432px;
            align-items: center;
            justify-content: center;
            gap: 5px;

        }
        .row{
            display: flex;
            border: 1px solid black;
            flex-direction: column;
            max-width: 80vw;
        }
        td{
            display: flex;
            border: none !important;
            justify-content: center;

        }
        th, .thead{
            display: none;
        }
        .shopField-flex{
            img{
                display: none;
            }
            p {
                font-size: 17px;
            }
        }
        
        td p {
            margin-bottom: 0 !important;
        }

        p.interest-inner{
            font-size: 18px;
            margin-top: 2px !important;
            display: none;
        }


        .productButton{
            max-width: 100% !important;
            width: 100% !important;
            

            p {

                max-height: 60px;
                overflow: hidden;
            }
        }



    }
    @media (min-width: 300px) {


    
    }
    @media (min-width: 340px) {



        #headDiv-lower{
            width: 300px;
        }


    }

    @media (min-width: 404px) {



        #headDiv-lower{
            width: 360px;
        }


    }

    @media (min-width: 468px) {

        //.col7{ display: none;}
        .col8{ display: none;}

        // hol tartottam:
        // - Az 596 pixeles nézetetben a lejárat és a megköttetés dátumát egy cellába kellene sűrítenem.
        // - Nevetségesnek hat, ha egy kisebb nézeten több adat látszik, mint az eggyel nagyobbon (A 468-ason rajta van a megkötés dátuma)

        .row {
            display: table-row;
        }

        .productButton p{
            max-width: 123px !important;
            max-height: 60px;
            overflow: hidden;
        }

        .col5{
            // padding-top: 5px !important;
        }

        td{
            width: 210px;
        }

        table{
            justify-content: left;
        }



        #headDiv-lower{
            width: 432px;
        }

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        .col1{ width: 148px; max-width: 148px;}
        .col2{ display: none;}
        .col3{ width: 114px; max-width: 114px;}
        .col4{ display: none;}
        .col5{ display: none; }
        .col6{ width: 100px; max-width: 100px;}
        .col7{ width: 196px; max-width: 196px; display: table-cell;}
        .col8{ display: none;}

        #headDiv-lower{
            width: 559px;
        }

        .productButton p{
            max-width: 110px !important;
            max-height: 60px;
            overflow: hidden;
        }

        p.interest-inner{
            display: block;
        }

        
        table, tbody{
            display: table;
            max-width: unset;
        }
        tr{
            display: table-row;
        }
        td{
            display: table-cell;
            width: 210px;
            border: 1px solid rgb(106, 137, 116) !important;
        }
        th{
            display: table-cell;
            font-size: 14px;
        }
        .thead{
            display: table-row;
        }
        .shopField-flex{
            img{
                display: block;
            }
        }

        .shopField-flex{
            img{
                width: 80%;
            }
            p{
                font-size: 14px;
            }
        }

        .expDate-inner, .moneyBack-inner{
            display: inline !important;

        }
        .concDate, .moneyLent{
            display: none;
        }

        td p {
            margin-bottom: 0 !important;
            margin-top: 0 !important;
        }

        table{
            justify-content: center;
        }
        

    }
    @media (min-width: 768px) {

        .col1{ width: 135px; max-width: 135px;}
        .col2{ display: none;}
        .col3{ width: 114px; max-width: 114px;}
        .col4{ display: none;}
        .col5{ width: 60px; max-width: 60px; display: table-cell;}
        .col6{ width: 130px; max-width: 130px;}
        .col7{ width: 299px; max-width: 299px; display: table-cell;}
        .col8{ display: none;}

        #headDiv-lower{
            width: 741px;
        }

        .productButton p{
            max-width: 210px !important;
        }

        .shopField-flex{
            img{
                width: 80%;
            }
        }

        .interest-inner{
            display: none !important;
        }

        th{
            font-size: 16px;
        }
    

    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

        .col1{ width: 135px; max-width: 135px;}
        .col2{ width: 135px; max-width: 135px; display: table-cell;}
        .col3{ width: 112px; max-width: 112px;}
        .col4{ width: 112px; max-width: 112px; display: table-cell;}
        .col5{ width: 60px; max-width: 60px;}
        .col6{ width: 130px; max-width: 130px;}
        .col7{ width: 283px; max-width: 283px; display: table-cell;}
        .col8{ display: none;}

        #headDiv-lower{
            width: 968px;
        }

        .productButton p{
            max-width: 194px !important;
        }



        .shopField-flex{
            img{
                width: 90%;
            }
        }


        .expDate-inner, .moneyBack-inner{
            display: none !important;
        }
        .concDate, .moneyLent{
            display: inline;
            text-align: justify;
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 135px; max-width: 135px;}
        .col2{ width: 135px; max-width: 135px;}
        .col3{ width: 112px; max-width: 112px;}
        .col4{ width: 112px; max-width: 112px;}
        .col5{ width: 60px; max-width: 60px;}
        .col6{ width: 130px; max-width: 130px;}
        .col7{ width: 270px; max-width: 270px;}
        .col8{ width: 244px; max-width: 244px; display: table-cell;}

        #headDiv-lower{
            width: 1198px;
        }

        .productButton p{
            max-width: 181px !important;
        }



    }


    #body{

        #main-container{

            #main{

                td.col1, td.col2, td.col3, td.col4, td.col5{
                    text-align: right !important;
                    padding: 0 6px;

                    p{
                        margin: 6px 0;
                    }

                    p.interest-inner{
                        font-weight: 200;
                    }
                }



                td.col1, td.col2 {

                    font-size: 19px;
                }

                .green{
                    color: rgb(26, 110, 60);
                    
                }

                td.col3, td.col4, td.col5{

                    font-size: 18px;
                }



                td.col1, td.col2{
                    font-weight: 500;
                }


                .col7{
                    .productField-flex{
                        
                        .productField-more{
                            font-size: 13px;
                            margin: -5px 0 -4px 0;
                            text-align: center;
                        }

                    }
                }
                
                .productButton p {
                    align-self: self-start;
                    width: 100%;
                }
            }
        }

    }

    .noItems {
        color: rgb(64, 108, 78);
    }
</style>