<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
  

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
            <button id="add-button" on:click={() => open_popup("productPopup",true,false)}>
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
                <th class="col8">Tartozás</th>
            </thead>
            <tbody>

                {#each {length: 17} as _, i}
                <div class="row" href="">
                    <td class="col1" href="" tabindex="0" on:click={() => open_popup("productPopup",false,false)}>
                        <img src="IMG/Global/no-profile-image.png" alt="">
                    </td>
                    <td class="col2"  on:click={() => open_popup("productPopup",false,false)}>Teszt Elek</td>
                    <td class="col3"  on:click={() => open_popup("productPopup",false,false)}>szoftvert.tesztelek@mail.org</td>
                    <td class="col4" on:click={() => open_popup("productPopup",false,false)}>+36 12 345 6789</td>
                    <td class="col5">2750 Nagykőrös. Szent Benedek u. 8.<td class="col6">
                        <div class="flex">
                            <button>
                                <img src="IMG/Home/loans.png" alt="Kölcsön">
                            </button>
                        </div>

                    </td>
                    <td class="col7" on:click={() => open_popup("productPopup",false,false)}></td>
                    <td class="col8" on:click={() => open_popup("productPopup",false,false)}>1 300 000 Ft</td>
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

        .col1{ width: 120px; max-width: 120px;}
        .col2{ width: 240px; max-width: 240px;}
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

    @media (min-width: 468px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 187px; max-width: 187px;}
        .col3{ display: none; }
        .col4{ width: 135px; max-width: 135px; display: table-cell;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;} 

        #headDiv-lower{
            width: 432px;
        }

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 200px; max-width: 200px;}
        .col3{ display: none; }
        .col4{ width: 135px; max-width: 135px; display: table-cell;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ width: 116px; max-width: 116px; display: table-cell;} 

        #headDiv-lower{
            width: 561px;
        }

    }
    @media (min-width: 768px) {

        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 138px; max-width: 138px;}
        .col3{ width: 140px; max-width: 140px; display: table-cell;}
        .col4{ width: 133px; max-width: 133px;}
        .col5{ width: 130px; max-width: 130px; display: table-cell;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ width: 110px; max-width: 110px;} 

        #headDiv-lower{
            width: 741px;
        }
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 145px; max-width: 145px;}
        .col3{ width: 140px; max-width: 140px;}
        .col4{ width: 133px; max-width: 133px;}
        .col5{ width: 130px; max-width: 130px;}
        .col6{ width: 100px; max-width: 100px; display: table-cell;}
        .col7{ width: 100px; max-width: 100px; display: table-cell;}
        .col8{ width: 110px; max-width: 110px;} 

        #headDiv-lower{
            width: 968px;
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 130px; max-width: 130px;}
        .col2{ width: 170px; max-width: 170px;}
        .col3{ width: 208px; max-width: 208px;}
        .col4{ width: 150px; max-width: 150px;}
        .col5{ width: 150px; max-width: 150px;}
        .col6{ width: 130px; max-width: 130px;}
        .col7{ width: 130px; max-width: 130px;}
        .col8{ width: 130px; max-width: 130px;} 

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
                    .flex{
                        width: 100%;
                        height: 100% !important;
                        display: flex;
                        align-content: center;
                        justify-content: center;

                        button{
                            width: 80%;
                            height: 90% !important;
                            z-index: 100;
                            img{
                                width: 100%;
                            }
                        }
                    }

                }
                td.col5{
                    .flex{
                        width: 100%;
                        height: 100% !important;
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        flex-direction: column;

                        img{
                            width: 60%;
                            align-self: center;
                            margin: 4px;
                            background-color: rgb(161, 213, 179);
                            border: 1px solid black;
                            border-radius: 4px;
                            box-shadow: 0.3px 0.3px 1px black;
                        


                            
                        }
                        p{
                            font-size: 14px;
                            margin: 2px 2px;
                            text-align: center;
                        }

                    }
                }
                
            }
        }

    }

</style>