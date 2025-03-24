<script>
    import '$lib/Styles/settings.scss';
    import { onMount } from "svelte";
    import { page } from "$app/stores"
    import { replaceState } from "$app/navigation";
    import {api, formatPhone, isOver18, isFuture, validate_customer, registError} from "$lib/Scripts/functions.js";
    import {open_popup, close_popup, save_popup} from "$lib/Scripts/popup.js";



    let isCustomer = true;



    function psOption1_clicked(){
        document.getElementById("ps-option1").classList.add("active")
        document.getElementById("ps-option2").classList.remove("active")
        isCustomer  =  true
        // window.history.pushState(null, "", "/register?for=customer");
        //replaceState("/register?for=customer", {})

    }
    function psOption2_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.add("active")
        isCustomer  =  false
        // window.history.pushState(null, "", "/register?for=shop");
        //replaceState("/register?for=shop", {})
        
    }

    async function register () {

        document.getElementById("registError").style.display = "none"

        if (isCustomer == true) {

            let data = {
                name: document.getElementById("customerName").value,
                birthday: document.getElementById("birthDate").value,
                idCardNum: document.getElementById("idCardNum").value,
                idCardExp: document.getElementById("idCardExp").value,
                email: document.getElementById("cust-email").value,
                mobile: document.getElementById("cust-phone").value,
                shippingAddress: document.getElementById("cust-shippingAddress").value,
                billingAddress: document.getElementById("cust-billingAddress").value,
                iban: document.getElementById("cust-iban").value.toUpperCase(),
                username: document.getElementById("username").value,
                password: document.getElementById("newPassword1").value

            }

            // console.log(data)

            // open_popup("messageOK","A regisztráció megtörtént! <br> Kérjük, jelentkezzen be vadonatúj PawnHub-fiókjába.",()=>{location.assign("/")})
            //open_popup("confirmDelete","A regisztráció megtörtént! <br> Kérjük, jelentkezzen be vadonatúj PawnHub-fiókjába.",()=>{location.assign("/")})


            if (validate_customer(data)) {

                let reply = await api('POST', '/customer', data);

                console.log("reply:")
                console.log(reply)

                if (reply.errors){

                    let taken = {
                        username: (reply.errors.username && reply.errors.username == "The username has already been taken."),
                        email: (reply.errors.email && reply.errors.email == "The email has already been taken.")
                    }

                    if (taken.username && taken.email){
                        registError("A megadott felhasználónév és e-mail-cím már foglalt.<br>Ha van már PawnHub-fiókja, kérjük, jelentkezzen be.")
                    }
                    else if (taken.username) {
                        registError("A megadott felhasználónév már foglalt.<br>Kérjük, válasszon másik felhasználónevet.")
                    }
                    else if (taken.email) {
                        registError("A megadott e-mail-cím már foglalt.<br>Ha van már PawnHub-fiókja, kérjük, jelentkezzen be.")

                    }
                    else {
                        registError("Ismeretlen szerverhiba történt.")
                        console.log(reply.errors)
                    }

                }
                else {
                    open_popup("messageOK","A regisztráció megtörtént! <br> Kérjük, jelentkezzen be vadonatúj PawnHub-fiókjába.",()=>{location.assign("/")})

                }



            }





        }
        else {

            let data = {
                name: document.getElementById("shopName").value,
                taxId: document.getElementById("taxId").value,
                estYear: document.getElementById("estYear").value,
                intro: document.getElementById("intro").value,
                email: document.getElementById("shop-email").value,
                mobile: document.getElementById("shop-phone").value,
                settlement_id: 23, // TEENDŐ !!
                address: document.getElementById("shop-address").value,
                iban: document.getElementById("shop-iban").value,
                username: document.getElementById("username").value,
                password: document.getElementById("newPassword1").value

            }

            console.log(data)

        }
    }

    if (!localStorage["auth_token"]) {}
    else {
        location.assign("/home")
    }


    onMount(()=> {

        if ($page.url.searchParams.get("for") == null || $page.url.searchParams.get("for") == "customer"){
            isCustomer  =  true
            psOption1_clicked()
        }
        else {
            isCustomer  =  false
            psOption2_clicked()
        }

        try {
            replaceState("/register", {})
        } 
        catch {}

        document.getElementById("cust-phone").addEventListener("input",formatPhone)
        document.getElementById("shop-phone").addEventListener("input",formatPhone)

    })


</script>
{#if !localStorage["auth_token"]}
<section id="body">

    <div id="head-div">
        <div id="h-col1">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <a href="/" id="back">
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
            <h1>Regisztráció</h1>


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
                    <p>Ügyfélként</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option2" class="ps-option"  on:click={psOption2_clicked} tabindex="0" role="button">
                    <p>Zálogházként</p>
                </div>

            </div>

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
                        <label for="customerName" class="cgLabel">Teljes név: <span class="star">*</span></label>
                        <input type="text" class="cgInput" id="customerName">
                    </div>
                    <div class="cgRow">
                        <label for="birthDate" class="cgLabel">Születési dátum: <span class="star">*</span></label>
                        <input type="date" class="cgInput" id="birthDate">
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
                        <input type="text" class="cgInput" id="taxId">
                    </div>
                    <div class="cgRow">
                        <label for="estYear" class="cgLabel">Alapítás éve:</label>
                        <input type="number" class="cgInput" id="estYear">
                    </div>
                    <div class="cgRow">
                        <label for="intro" class="cgLabel">Bemutatkozószöveg:</label>
                        <textarea name="intro" class="cgInput" id="intro"></textarea>
                    </div>
                </div>
                <div class="cgFoot">

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
                        <input type="phone" class="cgInput" id="cust-phone" value="+">
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
                        <input type="phone" class="cgInput" id="shop-phone" value="+">
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
                        <label for="shop-iban" class="cgLabel">IBAN-számlaszám:</label>
                        <input type="text" class="cgInput" id="shop-billingAddress">
                    </div>
                </div>
                <div class="cgFoot">

                </div>
            </div>
        {/if}

        <div class="cardGroup" id="cgPassword">
            <h3 class="cgTitle">Hitelesítés</h3>
            <div class="cgBody">
                <form action="">
                    <div class="cgRow unset">
                        <label for="username" class="cgLabel">Felhasználónév: <span class="star">*</span></label>
                        <input type="text" class="cgInput" id="username" autocomplete="username">
                    </div>
                    <div class="cgRow">
                        <label for="newPassword1" class="cgLabel">Jelszó: <span class="star">*</span></label>
                        <input type="password" class="cgInput" id="newPassword1" autocomplete="new-password">
                    </div>
                    <div class="cgRow">
                        <label for="newPassword2" class="cgLabel">Jelszó még egyszer: <span class="star">*</span></label>
                        <input type="password" class="cgInput" id="newPassword2" autocomplete="new-password">
                    </div>
                </form>
            </div>

            <div class="cgFoot">

            </div>
        </div>

    </div>
    <div class="bottom">
        <p class="error" id="registError">A Lorem Ipsum egy egyszerű szövegrészlete, szövegutánzata a betűszedő és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betűkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betűkészleteknél is változatlanul megmaradt. Az 1960-as években népszerűsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.</p>

        <button on:click={register}>
            <img src="IMG/Global/select.png" alt="">
            <p>Regisztráció</p>
        </button>
    </div>

</section>
{/if}

<style lang="scss">
    

    @media (min-width: 0px) {
        
        #headDiv-lower {
            height: 34px !important;

        }

    }
    @media (min-width: 300px) {


    }
    @media (min-width: 340px) {


    }
    @media (min-width: 404px) {

        
    }
    @media (min-width: 468px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #headDiv-lower {
            height: 44px !important;

        }

    }
    @media (min-width: 768px) {

    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {
        
        
    }

    #headDiv-lower {
        display: flex !important;

        #hl-col2 {
            #product-status {

                display: flex;

            }
        }

    }

    .bottom {
        display: flex !important;
        flex-direction: column !important;
    
        #registError {
            margin-top: -8px;
            text-align: center;
            padding: 0 10px;
        }
    }


</style>