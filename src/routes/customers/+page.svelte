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

        let col6 = document.querySelectorAll("td.col6")
        
        for (let i = 0; i < col6.length; i++) {

            if (col6.item(i).querySelector(".col6-flex").childElementCount <= 1){

                col6.item(i).querySelector("p.loanField-sum").style.display = "none"
            
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
            <h1>Ügyfelek</h1>


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
                    <p>Inaktív</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option3" class="ps-option"  on:click={psOption3_clicked} tabindex="0" role="button">
                    <p>Összes</p>
                </div>
            </div>

        </div>
        <div id="hl-col3">
            <button id="add-button" on:click={() => open_popup("customerPopup",true,false)}>
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
                <th class="col3">E-mail</th>
                <th class="col4">Telefon</th>
                <th class="col5">Lakcím</th>
                <th class="col6">Adósságok</th>
                <th class="col7">Termékek</th>
            </thead>
            <tbody>

                {#each {length: 17} as _, i}
                <div class="row" href="">
                    <td class="col1" href="" tabindex="0" on:click={() => open_popup("customerPopup",false,false)}>
                        <img src="IMG/Global/no-profile-image.png" alt="">
                    </td>
                    <td class="col2"  on:click={() => open_popup("customerPopup",false,false)}>Teszt Elek</td>
                    <td class="col3"  on:click={() => open_popup("customerPopup",false,false)}>szoftvert.tesztelek@mail.org</td>
                    <td class="col4" on:click={() => open_popup("customerPopup",false,false)}>+36 12 345 6789</td>
                    <td class="col5">2750 Nagykőrös. Szent Benedek u. 8.</td>
                    <td class="col6">
                        <div class="col6-flex">
                            <button>
                                <img src="IMG/Home/loans.png" alt="Kölcsön">
                                <p title="Pénzösszeg" class="col6-money">1 300 000 Ft</p>
                                <p title="Megköttetett" class="col6-concludion">2024.03.22.</p>
                                <p title="Lejár" class="col6-expiration">2025.01.30.</p>
                                <p title="Kamat" class="col6-interest">5%</p>
                            </button>
                            <button>
                                <img src="IMG/Home/loans.png" alt="Kölcsön">
                                <p title="Pénzösszeg" class="col6-money">1 300 000 Ft</p>
                                <p title="Megköttetett" class="col6-concludion">2024.03.22.</p>
                                <p title="Lejár" class="col6-expiration">2025.01.30.</p>
                                <p title="Kamat" class="col6-interest">5%</p>
                            </button>

                        </div>
                        <p class="loanField-sum" title="Összesen">Össz.: 1 300 000 Ft</p>
                    </td>
                    <td class="col7" on:click={() => open_popup("customerPopup",false,false)}></td>
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
        .col3{ display: none; }
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;} 

    }
    @media (min-width: 300px) {
        .col1{ width: 100px; max-width: 100px;}
        .col2{ width: 160px; max-width: 160px;}
        .col3{ display: none; }
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;} 
    
    }
    @media (min-width: 340px) {

        .col1{ width: 100px; max-width: 100px;}
        .col2{ width: 200px; max-width: 200px;}
        .col3{ display: none; }
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;} 

        #headDiv-lower{
            width: 300px;
        }


    }

    @media (min-width: 404px) {

        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 140px; max-width: 140px;}
        .col3{ display: none; }
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col6{ width: 130px; max-width: 130px; display: table-cell;}
        .col8{ display: none;} 

        #headDiv-lower{
            width: 360px;
        }


    }

    @media (min-width: 468px) {

        .col1{ width: 115px; max-width: 115px;}
        .col2{ width: 187px; max-width: 187px;}
        .col3{ display: none; }
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col6{ width: 130px; max-width: 130px; display: table-cell;}
        .col8{ display: none;} 

        #headDiv-lower{
            width: 432px;
        }

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 156px; max-width: 156px;}
        .col3{ display: none; }
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ width: 130px; max-width: 130px; display: table-cell;}
        .col7{ width: 165px; max-width: 165px; display: table-cell;}

        #headDiv-lower{
            width: 561px;
        }

    }
    @media (min-width: 768px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 156px; max-width: 156px;}
        .col3{ display: none;}
        .col4{ width: 135px; max-width: 135px; display: table-cell;}
        .col5{ display: none;}
        .col6{ width: 130px; max-width: 130px; display: table-cell;}
        .col7{ width: 210px; max-width: 210px; display: table-cell;}


        #headDiv-lower{
            width: 741px;
        }
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 145px; max-width: 145px;}
        .col3{ width: 140px; max-width: 140px; display: table-cell;}
        .col4{ width: 135px; max-width: 135px;}
        .col5{ width: 130px; max-width: 130px; display: table-cell;}
        .col6{ width: 130px; max-width: 130px; }
        .col7{ width: 178px; max-width: 178px; }

        #headDiv-lower{
            width: 968px;
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 130px; max-width: 130px;}
        .col2{ width: 180px; max-width: 180px;}
        .col3{ width: 263px; max-width: 263px;}
        .col4{ width: 135px; max-width: 135px;}
        .col5{ width: 150px; max-width: 150px;}
        .col6{ width: 130px; max-width: 130px;}
        .col7{ width: 210px; max-width: 210px;}

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

                td.col3{
                    padding-left: 5px;
                    padding-right: 5px;
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
                .col6{
                    .loanField-sum{
                        font-size: 13px;
                        margin: 2px 0;
                        text-align: center;
                    }

                    .col6-flex{
                        width: 100%;
                        height: 100% !important;
                        max-width: 100% !important;
                        max-height: 100% !important;
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        flex-wrap: wrap;
                        padding: 4px;
                        flex-direction: column;
                        gap: 6px;

                        button{
                            box-sizing: border-box;
                            z-index: 100;
                            width: 98%;

                            img{
                                width: 30%;
                                display: none;
                            }

                            p{
                                margin: 0;
                                font-size: 15px;
                                color: rgb(89, 129, 103);
                            }
                            .col6-money{
                                color: black;
                                font-size: 17px;
                                margin-bottom: 3px;
                                margin-top: 1px;
                            }
                        }
                    }

                }
                
            }
        }

    }

</style>