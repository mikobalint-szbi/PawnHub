<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
    import { onMount } from "svelte";
  

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

    onMount(() =>{

        let col7 = document.querySelectorAll("td.col7")
        
        for (let i = 0; i < col7.length; i++) {

            if (col7.item(i).querySelector(".productField-flex").childElementCount > 1){

                col7.item(i).querySelector("p.productField-more").style.display = "block"
            
            }
        }

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
            <h1>Adósságok</h1>


        </div>
        <div id="h-col3">
        </div>

    </div>

    <div id="headDiv-lower">

        <div id="hl-col1">

        </div>
        <div id="hl-col2">

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
                    <p>Archivált</p>
                </div>
            </div>

        </div>
        <div id="hl-col3">
            <button id="add-button" on:click={() => open_popup("loanPopup",true,false)}>
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
        <table id="main">
            <tr class="thead">
                <th class="col1" title="Kölcsönadott összeg"><span class="moneyLent">Kölcsönadott</span><span class="moneyBack-inner"><span title="Kölcsönadott összeg">Kölcs. </span>| <span title="Visszakérendő összeg" class="green">Vissz.</span></span></th>
                <th class="col2" title="Visszakérendő összeg">Visszakérendő</th>
                <th class="col3"><span class="concDate">Megköttetett</span><span class="expDate-inner"><span title="Megköttetett">Megk. </span>| Lejár</span></th>
                <th class="col4">Lejár</th>
                <th class="col5">Kamat</th>
                <th class="col6">Ügyfél</th>
                <th class="col7">Zálogtermékek</th>
                <th class="col8">Megjegyzés</th>
            </tr>
                {#each {length: 17} as _, i}
                <div class="row" href="">
                    <td class="col1" href="" tabindex="0" on:click={() => open_popup("loanPopup",false,false)}>
                        <p title="Kölcsönadott összeg">1 300 000 Ft</p>
                        <p class="moneyBack-inner green" title="Visszakérendő összeg">1 500 000 Ft</p>
                    </td>
                    <td class="col2 green" href="" tabindex="0" on:click={() => open_popup("loanPopup",false,false)}>1 500 000 Ft</td>
                    <td class="col3"  on:click={() => open_popup("loanPopup",false,false)}>
                        <p title="Megköttetett">2024.03.10.</p>
                        <p class="expDate-inner" title="Lejár">2025.01.20.</p>
                    </td>
                    <td class="col4"  on:click={() => open_popup("loanPopup",false,false)}>2025.01.20.</td>
                    <td class="col5" on:click={() => open_popup("loanPopup",false,false)}>100%</td>
                    <td class="col6">

                        <div class="customerField-flex" tabindex="0" on:click={() => open_popup("customerPopup",false,false)}>
                            <img src="IMG/Global/no-profile-image.png" alt="">
                            <p>Péld Aladár</p>
                        </div>
                    </td>
                    <td class="col7">
                        <div class="productField-flex">
                            <div class="productButton"  tabindex="0" on:click={() => open_popup("productPopup",false,false)}>
                                <img src="IMG/Global/no-image.png" alt="">
                                <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                            </div>
                            <div class="productButton"  tabindex="0" on:click={() => open_popup("productPopup",false,false)}>
                                <img src="IMG/Global/no-image.png" alt="">
                                <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                            </div>
                            <p class="productField-more">...és további X db termék.</p>
                        </div>
                    </td>
                    <td class="col8" on:click={() => open_popup("loanPopup",false,false)}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque numquam sit, minima cupiditate quisquam consequatur, aspernatur repellendus quos esse laudantium quia veniam...
                    </td>
                </div>
                {/each}

                

        </table>
    </div>

</section>

<style lang="scss">
    
    @media (min-width: 0px) {

        .col7{ display: none;}
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
            flex-direction: column;
            border: 1px solid black;
        }
        td{
            display: flex;
            width: 90vw;
            border: none !important;
            justify-content: center;
        }
        th, .thead{
            display: none;
        }
        .customerField-flex{
            img{
                display: none;
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

        .col7{ display: none;}
        .col8{ display: none;}

        // hol tartottam:
        // - Az 596 pixeles nézetetben a lejárat és a megköttetés dátumát egy cellába kellene sűrítenem.
        // - Nevetségesnek hat, ha egy kisebb nézeten több adat látszik, mint az eggyel nagyobbon (A 468-ason rajta van a megkötés dátuma)

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

        .col1{ width: 161px; max-width: 161px;}
        .col2{ width: 161px; max-width: 161px;}
        .col3{ width: 130px; max-width: 130px;}
        .col4{ display: none;}
        .col5{ width: 77px; max-width: 77px; display: table-cell;}
        .col6{ width: 193px; max-width: 193px;}
        .col7{ display: none;}
        .col8{ display: none;}

        #headDiv-lower{
            width: 561px;
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
        }
        .thead{
            display: table-row;
        }
        .customerField-flex{
            img{
                display: block;
            }
        }


        .expDate-inner, .moneyBack-inner{
            display: inline !important;

        }
        .concDate, .moneyLent{
            display: none;
        }
        

    }
    @media (min-width: 768px) {

        .col1{ width: 135px; max-width: 135px;}
        .col2{ display: none;}
        .col3{ width: 114px; max-width: 114px;}
        .col4{ display: none;}
        .col5{ width: 60px; max-width: 60px;}
        .col6{ width: 150px; max-width: 150px;}
        .col7{ width: 251px; max-width: 251px; display: table-cell;}
        .col8{ display: none;}
        //10 13 12
        #headDiv-lower{
            width: 741px;
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

        .customerField-flex{
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
                }

                td.col1, td.col2 {

                    font-size: 20px;
                }

                .green{
                    color: rgb(26, 110, 60);
                    
                }

                td.col3, td.col4, td.col5 {

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
                
            }
        }

    }

</style>