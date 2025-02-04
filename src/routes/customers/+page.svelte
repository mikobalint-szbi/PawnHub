<!-- @migration-task Error while migrating Svelte code: `<th>` is invalid inside `<thead>` -->
<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
    import Pages from '$lib/Pages.svelte';
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
                <tr>
                    <th class="col1">Kép</th>
                    <th class="col2">Név</th>
                    <th class="col3">E-mail</th>
                    <th class="col4">Telefon</th>
                    <th class="col5">Lakcím</th>
                    <th class="col6">Adósságok</th>
                    <th class="col7">Zálogtárgyak</th>
                </tr>
            </thead>
            <tbody>

                {#each {length: 17} as _, i}
                <div class="row" href="">
                    <a class="tdata col1" href="" tabindex="0" on:click={() => open_popup("customerPopup",false,false)}>
                        <img src="IMG/Global/no-profile-image.png" alt="">
                    </a>
                    <a class="tdata col2" on:click={() => open_popup("customerPopup",false,false)}>Teszt Elek</a>
                    <a class="tdata col3" on:click={() => open_popup("customerPopup",false,false)}>szoftvert.tesztelek@mail.org</a>
                    <a class="tdata col4" on:click={() => open_popup("customerPopup",false,false)}>+36 12 345 6789</a>
                    <a class="tdata col5" on:click={() => open_popup("customerPopup",false,false)}>2750 Nagykőrös. Szent Benedek u. 8.</a>
                    <a class="tdata col6">
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
                    </a>
                    <a class="tdata col7">
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
                    </a>
                </div>
                {/each}

                
            </tbody>
        </table>
    </div>

    <Pages currentPage="3" numOfPages="10"/>

</section>

<style lang="scss">/*$$__STYLE_CONTENT__$$*/</style>