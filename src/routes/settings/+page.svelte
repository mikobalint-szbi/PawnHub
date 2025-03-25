<script>

    import '$lib/Styles/settings.scss';
    import '$lib/Styles/settlInput.scss';
    import { onMount } from "svelte";
    import { page } from "$app/stores"
    import { replaceState } from "$app/navigation";
    import {
        api, formatPhone, isOver18, isFuture, validate_customer, validate_shop, registError, 
        toggle_settlDropdown, init_settlInput, validate_reply, get_profilePic, del_profilePic
    } from "$lib/Scripts/functions.js";
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";

    let isCustomer;


    onMount(()=> {


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
                <h1>Beállítások</h1>
    
    
            </div>
            <div id="h-col3">
            </div>
        </div>
    
        <div id="main-container">
            
            <div class="cardGroup" id="cgProfile">
                <h3 class="cgTitle profile">{isCustomer ? "Profilkép" : "Zálogház fényképe"}</h3>
                <div class="cgBody profile">
                    <img id="profile-picture" src="IMG/Global/{isCustomer ? 'no-profile-image.png' : 'no-shop-image.png'}" alt="">
                </div>
                <div class="cgFoot profile">
                    <button on:click={get_profilePic}>
                        <img src="IMG/Global/upload.png" alt="">
                        <p>Új {isCustomer ? "profilkép" : "fénykép"} feltöltése</p>
                    </button>
                    <button on:click={()=>open_popup("confirmDelete","Biztosan törölni szeretné",()=>{location.assign("/")})
                }>
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
                        <button>
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
                        <button>
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
                            <label for="cust-iban" class="cgLabel">IBAN-számlaszám:</label>
                            <input type="text" class="cgInput" id="cust-iban">
                        </div>
                    </div>
                    <div class="cgFoot">
                        <button>
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
                            <label for="shop-billingAddress" class="cgLabel">IBAN-számlaszám:</label>
                            <input type="text" class="cgInput" id="shop-billingAddress">
                        </div>
                    </div>
                    <div class="cgFoot">
                        <button>
                            <img src="IMG/Global/save.png" alt="">
                            <p>Módosítások mentése</p>
                        </button>
                    </div>
                </div>
            {/if}

            <div class="cardGroup" id="cgPassword">
                <h3 class="cgTitle">Jelszó módosítása</h3>
                <div class="cgBody">
                    <form action="">
                        <div class="cgRow unset" style="display: none;">
                            <label for="username" class="cgLabel">Felhasználónév:</label>
                            <input type="text" class="cgInput" id="username" autocomplete="username">
                        </div>
                        <div class="cgRow">
                            <label for="oldPassword" class="cgLabel">Régi jelszó:</label>
                            <input type="password" class="cgInput" id="oldPassword" autocomplete="current-password">
                        </div>
                        <div class="cgRow">
                            <label for="newPassword1" class="cgLabel">Új jelszó</label>
                            <input type="password" class="cgInput" id="newPassword1" autocomplete="new-password">
                        </div>
                        <div class="cgRow">
                            <label for="newPassword2" class="cgLabel">Új jelszó még egyszer:</label>
                            <input type="password" class="cgInput" id="newPassword2" autocomplete="new-password">
                        </div>
                    </form>
                </div>

                <div class="cgFoot">
                    <button>
                        <img src="IMG/Global/replace.png" alt="">
                        <p>Jelszó módosítása</p>
                    </button>
                </div>
            </div>

        </div>
        <div class="bottom">
            <button on:click={() => open_popup("confirmDelete", false, false)}>
                <img src="IMG/Global/delete.png" alt="">
                <p>Fiók törlése</p>
            </button>
        </div>
    </section>
    
    <style lang="scss">
        
    </style>