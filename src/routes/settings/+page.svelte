<script>

    import '$lib/Styles/settings.scss';
    import '$lib/Styles/settlInput.scss';
    import { onMount } from "svelte";
    import { page } from "$app/stores"
    import { replaceState } from "$app/navigation";
    import {
        api, formatPhone, isOver18, isFuture, validate_customer, validate_shop, registError, 
        toggle_settlDropdown, init_settlInput, validate_reply, get_profilePic, del_profilePic, isDateValid
    } from "$lib/Scripts/functions.js";
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";
import {regex} from "$lib/Scripts/variables.js";


    let isCustomer;
    let user;
    
    if (localStorage["auth_token"]) {
        user = JSON.parse(localStorage["user"]);
        isCustomer = user.isCustomer;
    }
    else {
        location.assign("/")
    }

    function settingsError(text, id, ...args) {
        let er = document.getElementById(id)
        er.innerHTML = text
        er.style.display = "block"

        if (args[0] && args[0] == true) {
            er.style.color = "rgb(64, 108, 78)"
        }
        else {
            er.style.color = "rgb(156, 30, 30)"
        }
    }

    async function cust_change_general() {

        let id = "settingsError-custGeneral"
        document.getElementById(id).style.display = "none"

        let data = {
            name: document.getElementById("customerName").value,
            idCardNum: document.getElementById("idCardNum").value,
            idCardExp: document.getElementById("idCardExp").value,
        }

        if (!data.name || !data.idCardNum || !data.idCardExp ) {
            settingsError("Kérjük, az összes csillaggal jelölt mezőt töltse ki.", id)
        }
        else if (!regex.custName.test(data.name)){
            settingsError("Kérjük, adja meg a vezetéknevét és mindegyik keresztnevét.<br>(Nagybetűvel kell őket kezdenie.)", id)
        }
        else if (!isFuture(data.idCardExp)){
            settingsError("Az ön személyi igazolványa lejárt!", id)
        }
        else if (!isDateValid(data.idCardExp)){
            settingsError("Hibás személyiigazolvány-lejárati dátum!", id)
        }
        else {

            settingsError("Egy pillanat...", id,true)
            let reply = await api('PATCH', '/customer', data);
            document.getElementById(id).style.display = "none"

            console.log("reply", reply)         
            if (reply){

                if (reply.errors){
                    settingsError("Ismeretlen szerverhiba történt.", id)
                    console.log(reply.errors)
                }
                else {
                    open_popup("messageOK","A az adatok módosítása megtörtént.")

                }
            }
            else {
                settingsError("Nem sikerült csatlakozni a szerverhez.", id)
            }

        }

    }

    async function shop_change_general() {

        let id = "settingsError-shopGeneral"
        document.getElementById(id).style.display = "none"



    }

    async function cust_change_contacts() {

        let id = "settingsError-custContacts"
        document.getElementById(id).style.display = "none"

        let data = {
            email: document.getElementById("cust-email").value,
            mobile: document.getElementById("cust-phone").value,
            shippingAddress: document.getElementById("cust-shippingAddress").value,
            billingAddress: document.getElementById("cust-billingAddress").value,
            iban: document.getElementById("cust-iban").value.toUpperCase(),

        }

        if (!data.email) {
            settingsError("Kérjük, az összes csillaggal jelölt mezőt töltse ki.", id)
        }
        else if (!regex.email.test(data.email)){
            settingsError("Az megadott e-mail-cím formátuma hibás!", id)
        }
        else if (data.mobile.length > 1 && data.mobile.length < 4){
            settingsError("Hibás telefonszám!", id)
        }
        else if (data.iban && !regex.iban.test(data.iban)){
            settingsError("Hibás IBAN-számlaszám-formátum!", id)
        }
        else {

            for (const key in data) {
                if (!data[key]) {
                    data[key] = "<null>"
                }
            }

            settingsError("Egy pillanat...", id, true)
            let reply = await api('PATCH', '/customer', data);
            document.getElementById(id).style.display = "none"

            if (reply){

                if (reply.error){

                    if (reply.error.code == "EXISTING_EMAIL") {
                        settingsError("A megadott e-mail-cím már foglalt.", id)
                    }
                    else {
                        settingsError("Ismeretlen szerverhiba történt.", id)
                        console.log(reply.error)
                    }


                }
                else if (reply.errors) {
                    settingsError("Ismeretlen szerverhiba történt.", id)
                    console.log(reply.errors)
                }
                else {
                    open_popup("messageOK","A az adatok módosítása megtörtént.")

                }
            }
            else {
                settingsError("Nem sikerült csatlakozni a szerverhez.", id)
            }

        }

    }

    async function shop_change_contacts() {

        let id = "settingsError-shopContacts"
        document.getElementById(id).style.display = "none"


    }

    async function change_password() {

        let id = "settingsError-password"
        document.getElementById(id).style.display = "none"

        let password2 = document.getElementById("newPassword2").value

        let data = {
            oldPassword: document.getElementById("oldPassword").value,
            password: document.getElementById("newPassword1").value
        }

        if (!data.oldPassword || !data.password || !password2) {
            settingsError("Kérjük, az összes csillaggal jelölt mezőt töltse ki.", id)
        }
        else if (password2 != data.password){
            settingsError("A jelszavak nem egyeznek!", id)
        }
        else if (data.password.length < 8){
            settingsError("A jelszónak legalább 8 karakter hosszúnak kell lennie.", id)
        }
        else {
            
            settingsError("Egy pillanat...", id, true)
            let reply = await api('PATCH', '/customer', data);
            document.getElementById(id).style.display = "none"

            if (reply){

                if (reply.error){

                    if (reply.error.code == "INVALID_PASSWORD") {
                        settingsError("Hibás eddigi jelszó!", id)
                    }
                    else {
                        settingsError("Ismeretlen szerverhiba történt.", id)
                        console.log(reply.error)
                    }

                }
                else if (reply.errors) {
                    settingsError("Ismeretlen szerverhiba történt.", id)
                    console.log(reply.errors)
                }
                else {
                    open_popup("messageOK","A az adatok módosítása megtörtént.")

                }
            }
            else {
                settingsError("Nem sikerült csatlakozni a szerverhez.", id)
            }

        }

    }


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
                    <p class="error" id="settingsError-profilePic"></p>
                    <button on:click={get_profilePic}>
                        <img src="IMG/Global/upload.png" alt="">
                        <p>Új {isCustomer ? "profilkép" : "fénykép"} feltöltése</p>
                    </button>
                    <button on:click={()=>open_popup("confirmDelete","profilePic",()=>{alert("Ide kell egy profilképtörlő api-t is tartalmazó funkció.")})
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
                            <label for="customerName" class="cgLabel">Teljes név: <span class="star">*</span></label>
                            <input type="text" class="cgInput" id="customerName">
                        </div>
                        <div class="cgRow">
                            <label for="birthDate" class="cgLabel">Születési dátum: <span class="star">*</span></label>
                            <input type="date" class="cgInput" id="birthDate" disabled>
                        </div>
                        <div class="cgRow">
                            <label for="idCardNum" class="cgLabel">Személyi igazolvány száma: <span class="star">*</span></label>
                            <input type="text" class="cgInput" id="idCardNum">
                        </div>
                        <div class="cgRow">
                            <label for="idCardExp" class="cgLabel">Személyi igazolvány lejárati dátuma: <span class="star">*</span></label>
                            <input type="date" class="cgInput" id="idCardExp">
                        </div>
                    </div>
                    <div class="cgFoot">
                        <p class="error" id="settingsError-custGeneral">Kérjük, várjon...</p>
                        <button on:click={cust_change_general}>
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
                            <label for="shopName" class="cgLabel">Cégnév: <span class="star">*</span></label>
                            <input type="text" class="cgInput" id="shopName">
                        </div>
                        <div class="cgRow">
                            <label for="taxId" class="cgLabel">Adószám: <span class="star">*</span></label>
                            <input type="text" class="cgInput" id="taxId" disabled>
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
                        <p class="error" id="settingsError-shopGeneral"></p>
                        <button on:click={shop_change_general}>
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
                            <label for="cust-email" class="cgLabel">E-mail-cím: <span class="star">*</span></label>
                            <input type="email" class="cgInput" id="cust-email">
                        </div>
                        <div class="cgRow">
                            <label for="cust-phone" class="cgLabel">Telefonszám:</label>
                            <input type="phone" class="cgInput" id="cust-phone" value="" on:input={formatPhone}>
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
                        <p class="error" id="settingsError-custContacts"></p>
                        <button on:click={cust_change_contacts}>
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
                            <label for="shop-email" class="cgLabel">E-mail-cím: <span class="star">*</span></label>
                            <input type="email" class="cgInput" id="shop-email">
                        </div>
                        <div class="cgRow">
                            <label for="shop-phone" class="cgLabel">Telefonszám: <span class="star">*</span></label>
                            <input type="phone" class="cgInput" id="shop-phone" value="" on:input={formatPhone}>
                        </div>
                        <div class="cgRow">
                            <label for="shop-settlement" class="cgLabel">Település: <span class="star">*</span></label>
                            <input type="text" class="cgInput" id="shop-settlement">
                        </div>
                        <div class="cgRow">
                            <label for="shop-address" class="cgLabel">Utca, házszám: <span class="star">*</span></label>
                            <input type="text" class="cgInput" id="shop-address">
                        </div>
                        <div class="cgRow">
                            <label for="shop-billingAddress" class="cgLabel">IBAN-számlaszám:</label>
                            <input type="text" class="cgInput" id="shop-billingAddress">
                        </div>
                    </div>
                    <div class="cgFoot">
                        <p class="error" id="settingsError-shopContacts"></p>
                        <button on:click={shop_change_contacts}>
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
                        <div class="cgRow">
                            <label for="oldPassword" class="cgLabel">Eddigi jelszó: <span class="star">*</span></label>
                            <input type="password" class="cgInput" id="oldPassword" autocomplete="current-password">
                        </div>
                        <div class="cgRow">
                            <label for="newPassword1" class="cgLabel">Új jelszó <span class="star">*</span></label>
                            <input type="password" class="cgInput" id="newPassword1" autocomplete="new-password">
                        </div>
                        <div class="cgRow">
                            <label for="newPassword2" class="cgLabel">Új jelszó még egyszer: <span class="star">*</span></label>
                            <input type="password" class="cgInput" id="newPassword2" autocomplete="new-password">
                        </div>
                    </form>
                </div>
                <div class="cgFoot">
                    <p class="error" id="settingsError-password"></p>
                    <button on:click={change_password}>
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