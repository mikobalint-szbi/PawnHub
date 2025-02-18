<script>
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
    import PageSelector from '$lib/PageSelector.svelte';
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

            if (col6.item(i).querySelector(".loanField-flex").childElementCount > 1){

                col6.item(i).querySelector("p.loanField-sum").style.display = "block"
            
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

            <div id="searchBox">
                <select name="" id="">
                    <option value="name">Név</option>
                    <option value="email">E-mail</option>
                    <option value="phone">Telefon</option>
                    <option value="address">Lakcím</option>
                    <option value="products">Zálogtárgy</option>
                </select>
                <input type="text">
                <button>Keresés</button>
            </div>

            <div id="product-status">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option1" class="ps-option active" on:click={psOption1_clicked} tabindex="0" role="button">
                    <p>Fiókkal rendelkező</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option2" class="ps-option"  on:click={psOption2_clicked} tabindex="0" role="button">
                    <p>Fiók nélküli</p>
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
                <th class="col7">Zálogtárgyak</th>
            </thead>
            <tbody>

                {#each {length: 17} as _, i}
                <div class="row" href="">
                    <td class="col1" href="" tabindex="0" on:click={() => open_popup("customerPopup",false,false)}>
                        <img src="IMG/Global/no-profile-image.png" alt="">
                    </td>
                    <td class="col2" on:click={() => open_popup("customerPopup",false,false)}>Teszt Elek</td>
                    <td class="col3" on:click={() => open_popup("customerPopup",false,false)}>szoftvert.tesztelek@mail.org</td>
                    <td class="col4" on:click={() => open_popup("customerPopup",false,false)}>+36 12 345 6789</td>
                    <td class="col5" on:click={() => open_popup("customerPopup",false,false)}>2750 Nagykőrös. Szent Benedek u. 8.</td>
                    <td class="col6">
                        <div class="loanField-flex">
                            <button>
                                <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                                <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                                <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                                <p title="Kamat" class="loanField-interest">5%</p>
                            </button>
                            <button>
                                <img src="IMG/Home/loans.png" alt="Kölcsön">
                                <p title="Pénzösszeg" class="loanField-money">1 300 000 Ft</p>
                                <p title="Megköttetett" class="loanField-concludion">2024.03.22.</p>
                                <p title="Lejár" class="loanField-expiration">2025.01.30.</p>
                                <p title="Kamat" class="loanField-interest">5%</p>
                            </button>

                        </div>
                        <p class="loanField-sum" title="Összesen">Össz.: 1 300 000 Ft</p>
                    </td>
                    <td class="col7">
                        <div class="productField-flex">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="productButton"  on:click={() => open_popup("productPopup",false,false)} role="button" tabindex="0">
                                <img src="IMG/Global/no-image.png" alt="">
                                <p>SamsungSamsungSamsungSamsungSamsungSamsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                            </div>
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="productButton" on:click={() => open_popup("productPopup",false,false)} role="button" tabindex="0">
                                <img src="IMG/Global/no-image.png" alt="">
                                <p>Samsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                            </div>
                            <p class="productField-more">...és további X db zálogtárgy</p>
                        </div>
                    </td>
                </div>
                {/each}

                
            </tbody>
        </table>
    </div>

    <PageSelector currentPage={3} numOfPages={3}/>

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

        #headDiv-lower {
            height: 125px !important;
        }

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
            height: 85px !important;
        }

        .productButton p{
            max-width: 78px !important;
            max-height: 60px;
            overflow: hidden;
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

        .productButton p{
            max-width: 121px !important;
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

        .productButton p{
            max-width: 92px !important;
        }


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 130px; max-width: 130px;}
        .col2{ width: 180px; max-width: 180px;}
        .col3{ width: 223px; max-width: 223px;}
        .col4{ width: 135px; max-width: 135px;}
        .col5{ width: 150px; max-width: 150px;}
        .col6{ width: 130px; max-width: 130px;}
        .col7{ width: 250px; max-width: 250px;}

        #headDiv-lower{
            width: 1198px;
        }

        .productButton p{
            max-width: 165px !important;
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
                        display: none;
                    }


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

    table#main{

        //background-color: rgb(170, 216, 184);
        box-shadow: 1px 1px 4px black;
    }

    #product-status {
        height: 50px !important;
    }




</style>