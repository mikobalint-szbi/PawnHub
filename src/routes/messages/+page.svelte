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

    function toggle_message(id){

        let body = document.getElementById("mBody" + id)
        let footer = document.getElementById("mFooter" + id)

        if (body.style.display == "" || body.style.display == "none"){

            let l = document.querySelectorAll(".mBody, .mFooter")
            l.forEach((e)=>{
                e.style.display = "none"
            })


            body.style.display = "block"
            footer.style.display = "flex"
        }
        else {
            body.style.display = "none"
            footer.style.display = "none"
        }


    }

    onMount(() =>{

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
                    <img src="IMG/Global/add.png" alt="Levélírás" title="Levélírás">
                </div>
                <div id="add-col2">
                    <p>Levélírás</p>
                </div>
            </button>
        </div>
        
    
    </div>

    <div id="main-container">
        

        {#each {length: 27} as _, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="message {i % 3 == 0 ? 'incoming' : ''}" id="message{i}" on:click={()=>toggle_message(i)}>
            <div class="mHeader">
                <div class="col1 mhCol">
                    <img src="IMG/Messages/out.png" alt="">
                </div>
                <div class="col2 mhCol" alt="Feladó" title="Feladó">FeladóNeve</div>
                <div class="col3 mhCol" alt="Tárgy" title="Tárgy">Tárgy</div>
                <div class="col4 mhCol" alt="Dátum" title="Dátum">2025.02.07.</div>
            </div>
            <div class="mBody" id="mBody{i}">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis ipsum! Harum aperiam ipsam aliquam ipsum voluptas dolorem blanditiis iusto quaerat! Quasi explicabo officiis quisquam, impedit dolor id iusto adipisci.<br>   
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis ipsum! Harum aperiam ipsam aliquam ipsum voluptas dolorem blanditiis iusto quaerat! Quasi explicabo officiis quisquam, impedit dolor id iusto adipisci.  <br>  
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis ipsum! Harum aperiam ipsam aliquam ipsum voluptas dolorem blanditiis iusto quaerat! Quasi explicabo officiis quisquam, impedit dolor id iusto adipisci.    
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis ipsum! Harum aperiam ipsam aliquam ipsum voluptas dolorem blanditiis iusto quaerat! Quasi explicabo officiis quisquam, impedit dolor id iusto adipisci. <br>   
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis ipsum! Harum aperiam ipsam aliquam ipsum voluptas dolorem blanditiis iusto quaerat! Quasi explicabo officiis quisquam, impedit dolor id iusto adipisci.   <br> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis ipsum! Harum aperiam ipsam aliquam ipsum voluptas dolorem blanditiis iusto quaerat! Quasi explicabo officiis quisquam, impedit dolor id iusto adipisci.    
                </p>
            </div>
            <div class="mFooter" id="mFooter{i}">
                <button>
                    <img src="IMG/Messages/mail.png" alt="">
                    <p>Válasz</p>
                </button>
                <button>
                    <img src="IMG/Home/customers.png" alt="">
                    <p>Felvétel az ügyfelek közé</p>
                </button>
                <button>
                    <img src="IMG/Global/delete.png" alt="">
                    <p>Üzenet törlése</p>
                </button>
            </div>
        </div>
        {/each}


    </div>

    <Pages currentPage={3} numOfPages={3}/>

</section>

<style lang="scss">

    #headDiv-lower {
        width: 70%;
        max-width: 1000px;
    }
    
    #main-container {
        margin-top: 0px;
        margin-bottom: 30px;
        width: 70%;
        max-width: 1000px;

        .message.incoming{
            background-color: rgb(154, 209, 173);
        }

        .message {
            display: flex;
            flex-direction: column;
            box-shadow: 1px 1px 1px black;
            border: 1px solid black;
            margin: 5px 0;

            .mHeader {
                display: flex;
                cursor: pointer;
                height: 40px;

                .mhCol {
                    padding-left: 6px;
                    padding-right: 6px;
                    display: flex;
                    align-items: center;
                }
                
                .col1{
                    width: 45px;
                    border-right: 1px solid black;
                    padding: 8px;
                    display: flex;
                    justify-content: center;

                    img {
                        height: 100%;
                    }
                }
                .col2{
                    width: 20%;
                    border-right: 1px solid black;

                }
                .col3{
                    width: 80%;
                    border-right: 1px solid black;
                }
                .col4{
                    width: 130px;
                    display: flex;
                    justify-content: center;
                }
                
            }

            .mBody {
                padding: 25px;
                padding-bottom: 5px;
                display: none;
                border-top: 1px solid black;
                p {
                    margin: 0;
                }
            }

            .mFooter {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 6px;
                padding: 20px;
                flex-wrap: wrap;
                display: none;

                button {
                    border-radius: 4px;
                    display: flex;
                    align-items: center;

                    img {
                        height: 30px;
                        margin: 3px;
                    }

                    p {
                        margin: 0;
                        padding: 7px;
                        padding-left: 5px;
                        font-size: 16px;
                    }
                }
            }
        }
    }



</style>