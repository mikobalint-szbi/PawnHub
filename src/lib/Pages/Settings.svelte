<script>

    import { onMount } from "svelte";


    export let isRegistration;
    export let isCustomer;

    onMount(()=> {
    
        if (isRegistration) {

            document.querySelectorAll(".register-hide").forEach((e) => {
                e.style.display = "none"
            });
            document.querySelectorAll(".register-show.unset").forEach((e) => {
                e.setAttribute('style', 'display:unset !important');
            });
            document.querySelectorAll(".register-show.flex").forEach((e) => {
                e.setAttribute('style', 'display:flex !important');
            });


        }
        console.log(isRegistration)
    })


    </script>
    
    <section id="body">
    
        <div id="head-div">
            <div id="h-col1">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <a on:click={()=>window.history.go(-1)} id="back">
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
                <h1>{isRegistration ? "Regisztráció": "Beállítások"}</h1>
    
    
            </div>
            <div id="h-col3">
            </div>
        </div>
    
        <div id="main-container">
            
            <div class="cardGroup" id="cgProfile">
                <h3 class="cgTitle profile">{isCustomer ? "Profilkép" : "Zálogház fényképe"}</h3>
                <div class="cgBody profile">
                    <img src="IMG/Global/{isCustomer ? 'no-profile-image.png' : 'no-shop-image.png'}" alt="">
                </div>
                <div class="cgFoot profile">
                    <button>
                        <img src="IMG/Global/upload.png" alt="">
                        <p>Új {isCustomer ? "profilkép" : "fénykép"} feltöltése</p>
                    </button>
                    <button>
                        <img src="IMG/Global/delete.png" alt="">
                        <p>{isCustomer ? "Profilkép" : "Fénykép"} törlése</p>
                    </button>
                </div>
            </div>

            {#if isCustomer}
                <div class="cardGroup" id="cgCustData">
                    <h3 class="cgTitle">Személyes adatok</h3>
                    <div class="cgBody">
                        <div class="cgRow">
                            <label for="customerName" class="cgLabel">Teljes név:</label>
                            <input type="text" class="cgInput" id="customerName">
                        </div>
                        <div class="cgRow">
                            <label for="birthDate" class="cgLabel">Születési dátum:</label>
                            <input type="date" class="cgInput" id="birthDate">
                        </div>
                        <div class="cgRow">
                            <label for="idCardNum" class="cgLabel">Személyi igazolvány száma:</label>
                            <input type="text" class="cgInput" id="idCardNum">
                        </div>
                        <div class="cgRow">
                            <label for="idCardExp" class="cgLabel">Személyi igazolvány lejárati dátuma:</label>
                            <input type="date" class="cgInput" id="idCardExp">
                        </div>
                    </div>
                    <div class="cgFoot">
                        <button class="register-hide">
                            <img src="IMG/Global/save.png" alt="">
                            <p>Módosítások mentése</p>
                        </button>
                    </div>
                </div>
            {:else}
                <div class="cardGroup" id="cgShopData">
                    <h3 class="cgTitle">A zálogház adatai</h3>
                    <div class="cgBody">
                        <div class="cgRow">
                            <label for="shopName" class="cgLabel">Cégnév:</label>
                            <input type="text" class="cgInput" id="shopName">
                        </div>
                        <div class="cgRow">
                            <label for="taxId" class="cgLabel">Adószám:</label>
                            <input type="text" class="cgInput" id="taxId">
                        </div>
                        <div class="cgRow">
                            <label for="estYear" class="cgLabel">Alapítás éve:</label>
                            <input type="number" class="cgInput" id="estYear">
                        </div>
                        <div class="cgRow">
                            <label for="intro" class="cgLabel">Bemutatkozószöveg:</label>
                            <textarea name="inro" class="cgInput" id="intro"></textarea>
                        </div>
                    </div>
                    <div class="cgFoot">
                        <button class="register-hide">
                            <img src="IMG/Global/save.png" alt="">
                            <p>Módosítások mentése</p>
                        </button>
                    </div>
                </div>
            {/if}

            {#if isCustomer}
                <div class="cardGroup" id="cgCustContacts">
                    <h3 class="cgTitle">Elérhetőségek</h3>
                    <div class="cgBody">
                        <div class="cgRow">
                            <label for="cust-email" class="cgLabel">E-mail-cím:</label>
                            <input type="email" class="cgInput" id="cust-email">
                        </div>
                        <div class="cgRow">
                            <label for="cust-phone" class="cgLabel">Telefonszám:</label>
                            <input type="phone" class="cgInput" id="cust-phone">
                        </div>
                        <div class="cgRow">
                            <label for="cust-shippingAddress" class="cgLabel">Szállítási cím:</label>
                            <input type="text" class="cgInput" id="cust-shippingAddress">
                        </div>
                        <div class="cgRow">
                            <label for="cust-billingAddress" class="cgLabel">Számlázási cím:</label>
                            <input type="text" class="cgInput" id="cust-billingAddress">
                        </div>
                        <div class="cgRow">
                            <label for="cust-billingAddress" class="cgLabel">Iban-számlaszám:</label>
                            <input type="text" class="cgInput" id="cust-billingAddress">
                        </div>
                    </div>
                    <div class="cgFoot">
                        <button class="register-hide">
                            <img src="IMG/Global/save.png" alt="">
                            <p>Módosítások mentése</p>
                        </button>
                    </div>
                </div>
            {:else}
                <div class="cardGroup" id="cgShopContacts">
                    <h3 class="cgTitle">Elérhetőségek</h3>
                    <div class="cgBody">
                        <div class="cgRow">
                            <label for="shop-email" class="cgLabel">E-mail-cím:</label>
                            <input type="email" class="cgInput" id="shop-email">
                        </div>
                        <div class="cgRow">
                            <label for="shop-phone" class="cgLabel">Telefonszám:</label>
                            <input type="phone" class="cgInput" id="shop-phone">
                        </div>
                        <div class="cgRow">
                            <label for="shop-settlement" class="cgLabel">Település:</label>
                            <input type="text" class="cgInput" id="shop-settlement">
                        </div>
                        <div class="cgRow">
                            <label for="shop-address" class="cgLabel">Utca, házszám:</label>
                            <input type="text" class="cgInput" id="shop-address">
                        </div>
                        <div class="cgRow">
                            <label for="shop-billingAddress" class="cgLabel">Iban-számlaszám:</label>
                            <input type="text" class="cgInput" id="shop-billingAddress">
                        </div>
                    </div>
                    <div class="cgFoot">
                        <button class="register-hide">
                            <img src="IMG/Global/save.png" alt="">
                            <p>Módosítások mentése</p>
                        </button>
                    </div>
                </div>
            {/if}

            <div class="cardGroup" id="cgPassword">
                <h3 class="cgTitle">{isRegistration ? "Hitelesítés" : "Jelszó módosítása"}</h3>
                <div class="cgBody">
                    <div class="cgRow register-hide">
                        <label for="oldPassword" class="cgLabel">Régi jelszó:</label>
                        <input type="password" class="cgInput" id="oldPassword">
                    </div>
                    <div class="cgRow register-show unset">
                        <label for="username" class="cgLabel">Felhasználónév:</label>
                        <input type="text" class="cgInput" id="username">
                    </div>
                    <div class="cgRow">
                        <label for="newPassword1" class="cgLabel">{isRegistration ? "Jelszó:" : "Új jelszó"}</label>
                        <input type="password" class="cgInput" id="newPassword1">
                    </div>
                    <div class="cgRow">
                        <label for="newPassword2" class="cgLabel">{isRegistration ? "Jelszó" : "Új jelszó"} még egyszer:</label>
                        <input type="password" class="cgInput" id="newPassword2">
                    </div>
                </div>
                <div class="cgFoot">
                    <button class="register-hide">
                        <img src="IMG/Global/replace.png" alt="">
                        <p>Jelszó módosítása</p>
                    </button>
                </div>
            </div>

        </div>
        <div class="bottom">
            <button class="register-show flex">
                <img src="IMG/Global/select.png" alt="">
                <p>Regisztráció</p>
            </button>
        </div>
    
    </section>
    
    <style lang="scss">
        
        @media (min-width: 0px) {
    
            #main-container{
                width: 95%;
            }

            .cardGroup {
                width: calc(100%)!important;
            }

            .cgFoot button {
                font-size: 18px;
            }
    
        }
        @media (min-width: 300px) {
    
    
    
        
        }
        @media (min-width: 340px) {

    
        }
        @media (min-width: 404px) {

            .cgFoot button {
                font-size: 19px;
            }
        }
        @media (min-width: 468px) {

            .cgFoot button {
                font-size: 20px;
            }
    
        }
        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media (min-width: 596px) {
    
            #main-container{
                width: 90%;
                max-width: 1200px;
            }

    
        }
        @media (min-width: 768px) {
    
            #main-container {
                width: 90%;

            }

            .cardGroup {
                width: calc(50% - 4px)!important;
            }

            #cgProfile {
                order: 1;
            }
            #cgCustData, #cgShopData {
                order: 3;
            }
            #cgCustContacts, #cgShopContacts {
                order: 2;
            }
            #cgPassword {
                order: 4;
            }
    
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media (min-width: 992px) {
    
            #main-container {
                width: 80%;

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
    
    
            #main-container {
    
                margin-bottom: 30px;
                margin-top: 5px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;



                .cardGroup {
                    border: 1px solid black;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    border-radius: 3px;
                    box-shadow: 1px 1px 2px black;

                    .cgTitle {
                        margin-top: 0px;
                        margin-bottom: 10px;
                        font-weight: 600;
                        font-size: 20px;
                    }
                    .cgBody{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        justify-content: center;
                        height: 100%;


                        .cgRow{
                            display: flex;
                            flex-direction: column;
                            width: 100%;

                            .cgLabel {
                                flex-grow: 1;
                                display: block;
                                font-size: 15px;
                            }

                            .cgInput {
                                width: 100%;
                                height: 32px;
                                font-size: 19px;
                                padding-left: 4px;
                            }

                            textarea.cgInput {
                                resize: none;
                                height: 250px;
                            }
                        }

                    }

                    .cgBody.profile {
                        align-items: center;
                        padding: 5px;
                        img {
                                max-height: 250px;
                            width: fit-content;
                            background-color: rgb(161, 213, 179);
                            border-radius: 4px;
                            box-shadow: 0.3px 0.3px 1px black;
                            border: 1px solid black;
                        }
                    }

                    .cgFoot {

                        margin-top: auto;
                        justify-content: center;
                        flex-direction: row;

                        button {
                            width: 100%;
                            height: 44px;

                            padding: 4px 12px;
                            margin-top: 7px;
                            border-radius: 3px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 8px;

                            img {
                                height: 90%;
                            }
                            p {
                                margin: 0;
                            }

                        }
                        button:first-child {
                            margin-top: 15px;
                        }
                        
                    }

                    .cgFoot.profile {
                        /*p {
                            width: 200px;
                            text-align: start;
                        }*/
                    }
                }


            }

            .bottom {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 30px;
                margin-top: -5px;

                button {

                    padding: 0px 30px;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    height: 60px;

                    img {
                        height: 65%;
                    }
                    p {
                        font-size: 30px;
                    }

                }
            }
    
        }

        .register-show {
            display: none !important;
        }
    
    
    </style>