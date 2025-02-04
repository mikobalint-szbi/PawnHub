<!-- @migration-task Error while migrating Svelte code: `<th>` is invalid inside `<thead>` -->
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
                    <p>Archivált</p>
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

<style lang="scss">/*$$__STYLE_CONTENT__$$*/</style>