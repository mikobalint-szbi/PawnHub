<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";

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
                <select name="" id="">
                    <option value="name">Név</option>
                    <option value="category">Kategória</option>
                    <option value="customer">Ügyfél</option>
                    <option value="condition">Állapot</option>
                    <option value="notes">Leírás</option>
                    <option value="location">Hely</option>
                </select>
                <input type="text">
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
            <button id="add-button" on:click={() => open_popup("productPopup",true,true)}>
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

                {#each {length: 17} as _, i}
                <div class="row" href="">
                    <td class="col1" href="" tabindex="0" on:click={() => open_popup("productPopup",false,false)}>
                        <img src="IMG/Global/no-image.png" alt="">
                    </td>
                    <td class="col2"  on:click={() => open_popup("productPopup",false,false)}>Tárgy neve</td>
                    <td class="col3"  on:click={() => open_popup("productPopup",false,false)}>Karórák</td>
                    <td class="col4">
                        <div class="loanField-flex">
                            <button>
                                <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                                <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                                <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                                <p title="Kamat" class="loanField-interest">5%</p>
                            </button>
                        </div>

                    </td>
                    <td class="col5" on:click={() => open_popup("customerPopup",false,false)}>
                        <div class="customerField-flex">
                            <img src="IMG/Global/no-profile-image.png" alt="">
                            <p>Péld Aladár</p>
                        </div>

                    </td>
                    <td class="col6" on:click={() => open_popup("productPopup",false,false)}>20 000 Ft</td>
                    <td class="col7" on:click={() => open_popup("productPopup",false,false)}>150 000 Ft</td>
                    <td class="col8" on:click={() => open_popup("productPopup",false,false)}>Kifogástalan</td>
                    <td class="col9" on:click={() => open_popup("productPopup",false,false)}>Kirakat alsó polc</td>
                </div>
                {/each}

                
            </tbody>
        </table>
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
                
            }
        }

    }

    table#main{

        //background-color: rgb(170, 216, 184);
        box-shadow: 1px 1px 4px black;
    }

</style>