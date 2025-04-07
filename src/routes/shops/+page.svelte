<script>

    import { onMount } from "svelte";
    import '$lib/Styles/shopCard.scss';
    import '$lib/Styles/settlInput.scss';
    import {toggle_settlDropdown, init_settlInput} from "$lib/Scripts/functions.js";

    
    onMount(()=> {
    
        init_settlInput()


    
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
                <h1>Zálogházak</h1>
    
    
            </div>
            <div id="h-col3">
            </div>
        </div>
    
        <div id="headDiv-lower">
    
            <div id="searchBox">
                <div class="row1">
                    <input type="text" id="searchBar" placeholder="Zálogház neve...">
                </div>
    
                <fieldset>
                    <legend>Keresés helye</legend>
                    <div class="row3">
    
                        <select name="selectCounty" id="selectCounty">
                            <optgroup label="Nagyvárosok">
                                <option value="1">Budapest</option>
                            </optgroup>
                            <optgroup label="Vármegyék">
                                <option value="0" selected>Az összes vármegye</option>
                                <option value="13">Bács-Kiskun vármegye</option>
                                <option value="4">Baranya vármegye</option>
                                <option value="16">Békés vármegye</option>
                                <option value="6">Borsod-Abaúj-Zemplén vármegye</option>
                                <option value="14">Csongrád vármegye</option>
                                <option value="2">Fejér vármegye</option>
                                <option value="7">Győr-Moson-Sopron vármegye</option>
                                <option value="20">Hajdú-Bihar vármegye</option>
                                <option value="5">Heves vármegye</option>
                                <option value="3">Jász-Nagykun-Szolnok vármegye</option>
                                <option value="12">Komárom-Esztergom vármegye</option>
                                <option value="19">Nógrád vármegye</option>
                                <option value="8">Pest vármegye</option>
                                <option value="17">Somogy vármegye</option>
                                <option value="11">Szabolcs-Szatmár-Bereg vármegye</option>
                                <option value="18">Tolna vármegye</option>
                                <option value="9">Vas vármegye</option>
                                <option value="10">Veszprém vármegye</option>
                                <option value="15">Zala vármegye</option>
                            </optgroup>
                        </select>
    
                        <div class="settlInput-box">
                            <div class="settlDropdown">
                                <input type="text" id="settlInput" placeholder="Írja be a település nevét!">
                                <div id="dropdownContent">
    
                                    {#each {length: 37} as _, i}
                                    <!-- svelte-ignore a11y-missing-attribute -->
                                    <a >Link 1</a>
                                    {/each}
                                  </div>
                            </div>
    
                            <button>Hozzáadás</button>
                        </div>
    
                    </div>
                    <div class="row4">
                        <div id="selectedSettlements">                
                            {#each {length: 17} as _, i}
                            <div class="settlTag" title="Kattintson a törléshez!">
                                <p class="name">
                                    {Array("Nagykőrös","Jászfelsőszentgyörgy", "Kiskunfélegyháza", "Szob", "Kocsér", "Tiszakécske")[Math.floor(Math.random() * 6)]}
                                </p>
                                <button class="delButton">
                                    <img src="IMG/Global/close.png" alt="">
                                </button>
                            </div>
                            {/each}
                        </div>
                    </div>
                </fieldset>
    
                <div class="row5">
                    <button id="searchButton">
                        <img src="IMG/Global/search.png" alt="">
                        <p>Keresés</p>
                    </button>
                </div>
    
            </div>
    
        </div>
    
        <div id="main-container">
            
            {#each {length: 17} as _, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="shopCard" on:click={()=>location.assign('shop')}>
                <div class="row1">
                    <div class="col1">
                        <img src="IMG/Global/no-shop-image.png" alt="A zálogház fotója">
                    </div>
                    <div class="col2">
                        <h3 class="shopTitle" title="Zálogház neve">Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve </h3>
                        <p class="shopDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum exercitationem iste voluptate aperiam dolor qui animi quis fugiat magnam assumenda distinctio, consequuntur corrupti expedita sit autem iusto provident! Dicta?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    
                        </p>
                        <div class="innerRow">
                            <div class="shopLocation">
                                <p class="shopSettlement">Nagykőrös</p>
                                <p class="shopAddress">Nursiai Hosszúnevű Szent Szent Szent Szent Szent Benedek u. 337.</p>

                            </div>
    
                        </div>
    
                    </div>
                </div>
            </div>
            {/each}
    
        </div>
    
    </section>
    
    <style lang="scss">
        
        @media (min-width: 0px) {
    

    
            #main-container, #searchBox {
                width: 90%;
            }

            #searchBox {
                .row3 {
                    flex-direction: column;
    
                    select, .settlInput-box {
                        width: 100%;
                    }
                }
            }
    
            .settlInput-box {
                .settlDropdown {
                    width: 55% !important;
                }
                button {
                    width: 45% !important;
                }
            }


        }
        @media (min-width: 300px) {
    
    
    
        
        }
        @media (min-width: 340px) {
    
            .settlInput-box {
                .settlDropdown {
                    width: 60% !important;
                }
                button {
                    width: 40% !important;
                }
            }
    
    
        }
        @media (min-width: 404px) {
    

    
            .settlInput-box {
                .settlDropdown {
                    width: 70% !important;
                }
                button {
                    width: 30% !important;
                }
            }
        
        }
        @media (min-width: 468px) {
    
            #searchBox {

            }
    


    
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media (min-width: 596px) {
    

    
            #main-container, #searchBox {
                width: 87%;
                max-width: 1000px;
            }
    
            .settlInput-box {
                .settlDropdown {
                    width: 78% !important;
                }
                button {
                    width: 22% !important;
                }
            }


    
    
        }
        @media (min-width: 768px) {
    
            #main-container, #searchBox {
                width: 80%;
                max-width: 1000px;
            }
    
            .settlInput-box {
                .settlDropdown {
                    width: 65% !important;
                }
                button {
                    width: 35% !important;
                }
            }
            
            #searchBox {
                .row3 {
                    flex-direction: row;
    
                    select, .settlInput-box {
                        width: 50%;
                    }
                }
            }
    
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media (min-width: 992px) {


            .settlInput-box {
                .settlDropdown {
                    width: 72% !important;
                }
                button {
                    width: 28% !important;
                }
            }


    
        }
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media (min-width: 1230px) {
    

    
        }
    
    
        #body{
    
            #head-div {
                margin-bottom: 8px;
                #h-col2 {
                    h1 {
                        margin: 0 !important;
                    }
                }
            }
    
            #headDiv-lower {
    
                height: auto !important;
                display: flex;
                justify-content: center;
    
                #searchBox {
                    border: 1px solid black;
                    padding: 10px;
                    height: fit-content;
                    border-radius: 7px;
                    box-shadow: 1px 1px 2px black;
                    margin-bottom: 20px;
    
                    fieldset {
                        border: 1px solid rgb(106, 137, 116);
                    }
    
                    .row1 {
                        margin-bottom: 8px;

                        #searchBar {
                            width: 100%;
                            border-radius: 4px 4px 0 0;
                            height: 40px;
                            font-size: 22px;
                            padding: 0 8px;
                        }
                    }
                    
    
                    .row3 {
                        display: flex;
                        gap: 4px;
                        padding-bottom: 8px;
    
                        select {
                            border-radius: 0;
                            font-size: 16px;
                        }

    
    
                    }
    
                    .row4 {
                        #selectedSettlements {
                            min-height: 32px;
                            display: flex;
                            background-color: rgb(199, 238, 217);
                            border: 1px solid black;
                            flex-wrap: wrap;
                            row-gap: 6px;
                            column-gap: 4px;
                            padding: 6px;
                            overflow: hidden;
    
                            .settlTag {
                                display: flex;
                                background-color: rgb(128, 204, 154);
                                padding: 3px;
                                padding-left: 12px;
                                padding-right: 8px;
                                gap: 6px;
                                align-items: center;
                                border-radius: 20px;
                                border: 1px solid rgb(106, 137, 116);
                                cursor: pointer;
    
                                .name {
                                    margin: 0;
                                }
                                .delButton {
                                    height: 16px;
                                    width: 16px;
                                    border-radius: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    border: 1px solid rgb(101, 145, 109);
                                    background-color: rgb(110, 153, 125);
    
                                    img {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
    
                    .row5 {
                        display: flex;
                        justify-content: center;
                        padding-top: 10px;
                        width: 100%;
                        
                        #searchButton {
                            width: 100% !important;
                            height: 47px;
                            border-radius: 5px;
                            display: flex;
                            width: fit-content;
                            padding: 5px 10px;
                            align-items: center;
                            gap: 5px;
                            justify-content: center;
    
                            img {
                                height: 100%;
                            }
                            p {
                                margin: 0;
                                font-size: 20px;
                            }
                        }
                    }
    
                }
    
    
    
            }
    
    
            #main-container {
    
                margin-bottom: 30px;
    
            }
    
        }
    
    
    </style>