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
            <h1>Üzenetek</h1>


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
                    <option value="name">Feladó</option>
                    <option value="email">Tárgy</option>
                    <option value="phone">Tartalom</option>
                </select>
                <input type="text">
                <button>Keresés</button>
            </div>

            <div id="product-status">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option1" class="ps-option active" on:click={psOption1_clicked} tabindex="0" role="button">
                    <p>Bejövő</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option2" class="ps-option"  on:click={psOption2_clicked} tabindex="0" role="button">
                    <p>Kimenő</p>
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
        
        <div class="message">
            <div class="mHeader">
                <div class="col1 mhCol">FeladóNeve</div>
                <div class="col2 mhCol">Tárgy</div>
                <div class="col3 mhCol">2025.02.07.</div>
            </div>
            <div class="mBody">

            </div>
        </div>

    </div>

    <Pages currentPage={3} numOfPages={3}/>

</section>

<style lang="scss">
    
    #main-container {
        margin-top: 30px;
        margin-bottom: 30px;
        width: 70%;
        max-width: 1000px;
        border: 1px solid black;

        .message {
            display: flex;
            flex-direction: column;

            .mHeader {
                display: flex;
                
                .col1{
                    width: 20%;
                }
                .col2{
                    width: 60%;
                }
                .col1{
                    width: 20%;
                }
                
            }
        }
    }



</style>