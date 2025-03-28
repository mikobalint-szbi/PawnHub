<script>
    import {onMount} from "svelte";
    import {apiUrl} from "$lib/Scripts/variables.js";
    import {api} from "$lib/Scripts/functions.js";

    function loginError (text) {
        let er = document.getElementById("loginError")
        er.innerHTML = text
        er.style.display = "block"
    }

    function register (for_) {

        sessionStorage["registerFor"] = for_; 
        location.assign("/register")
    }

    async function loginHandler(){
        
        let username = document.getElementById("l-username").value
        let password = document.getElementById("l-password").value
        document.getElementById("loginError").style.display = "none"

        if (password && username) {

            let reply;


            try {
                reply = await api('POST', '/login', {
                    username: username,
                    password: password
                });
            } catch {

            }

            if (reply){

                if (reply.error) {

                    if (reply.error.code == "USER_NOT_FOUND") {
                        loginError("Hibás felhasználónév vagy e-mail-cím.")
                    }
                    else if (reply.error.code == "INVALID_PASSWORD") {
                        loginError("Hibás jelszó.")
                    }
                }

                else {
                    localStorage["auth_token"] = reply.auth_token
                    localStorage["user"] = JSON.stringify({
                        username: reply.user.username,
                        email: reply.user.email,
                        isCustomer: Boolean(reply.user.isCustomer),
                        img: reply.user.img
                    })

                    location.assign('home')
                }

            }
            else {
                loginError("Nem sikerült csatlakozni a szerverhez.")
            }
        

        }

        else {
            loginError("Kérjük, töltse ki mindkettő beviteli mezőt.")
        }


        
    }

    if (localStorage["auth_token"]) {
        location.assign("/home")
    }


    onMount(()=>{

        document.querySelector('button#login').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                loginHandler()
            }
        });

        sessionStorage.setItem("loginSwitch",1)

        document.querySelector(".switch #opt1").addEventListener("click",(e)=>{
            document.querySelector(".switch #opt2").classList.remove("active")
            e.target.classList.add("active")

            document.getElementById("page1").style.display = "block"
            document.getElementById("page2").style.display = "none"

            sessionStorage.setItem("loginSwitch",1)
        })
        document.querySelector(".switch #opt2").addEventListener("click",(e)=>{
            document.querySelector(".switch #opt1").classList.remove("active")
            e.target.classList.add("active")

            document.getElementById("page1").style.display = "none"
            document.getElementById("page2").style.display = "block"

            sessionStorage.setItem("loginSwitch",2)
        })

    })


</script>
{#if !localStorage["auth_token"]}
<section id="body">
    <div id="body-col1">

        <div class="switch-container">
            <div class="switch">
                <div class="option active" id="opt1">Regisztráció Ügyfélként</div>
                <div class="option" id="opt2">Regisztráció Zálogházként</div>
            </div>
        </div>

        <div class="page" id="page1">

            
            <h2>Használt áruk vásárlása és online kölcsönfelvétel egyszerűbben, mint valaha.</h2>
            <p>Elege van abból, hogy csak a helyi zálogházak <b>erősen limitált</b> kínálatából válogathat? </p>
            <p>Nem szeret <b>állandóan</b> bejárogatni az üzletekbe minden egyes apró ügyintézés miatt?</p>
            <p>Szüksége lenne egy <b>kiterjedt kínálattal rendelkező</b> online <b>használttermék-kereső központra</b>, ahol bármilyen terméket azonnal megtalál?</p>
            <p>
                <b>Ez esetben a lehető legjobb helyen jár.</b> Munkatársaink <b>sok évtizednyi</b> fáradalmas munkát fektettek a lehető legtökéletesebb zálogházközpont struktúrájának kidolgozásába, valamint a tervek művészi precizitású megvalósításába csak azért, hogy Ön mostantól fogva <b>kényelmesebben </b> és <b>hatékonyabban</b> tudjon használt árukat vásárolni és kölcsönöket felvenni.
            </p>
               
    
            <h3>Mit kínálunk önnek?</h3>
            <ul id="offer">
                <li>Könnyedén <b>átláthatja </b> és kezelheti a zálogba adott, vásárolt és vásárolni kívánt <b>értéktárgyak</b> adatait, valamint az ön számára megköttetett <b> hitelek </b> táblázatát.</li>
                <li><b>Több száz</b> zálogház kínálatából válogathat <b>tengernyi eladó terméket</b> és akár <b>több tucatnyi szolgáltatást</b>.</li>
                <li><b>Funkciódús kereső- és szűrőrendszert</b> biztosítunk az Ön számára, amellyel <b>pofonegyszerűen</b> megtalálhatja a megvásárolni kívánt árukat.</li>
                <li><b>Bárhonnan</b>, bármilyen méretű eszközön elérheti saját fiókját és adatait.</li>
            </ul>
    
            <div id="registerPromotion-div">

                <!-- svelte-ignore a11y-missing-attribute -->
                <a>
                    <button on:click={()=>register("customer")} id="registerPromotion">Regisztráljon hozzánk még ma!</button>
                </a>
                <p id="regDriector">🠦 Tekintsen a képernyő jobb oldalára! 🠦</p>
            </div>

        </div>
        <div class="page" id="page2">
            
            <h2>Zálogházak irányítása egyszerűbben, mint valaha.</h2>
            <p>Ön is zálogháztulajdonos, akinek <b>elege van </b> a papíralapú adminisztráció  <b>fáradalmas munkájából? </b> </p>
            <p>Nincs megelégedve üzlete <b> szervezettségével? </b></p>
            <p>Szüksége lenne egy kiterjedt online ügyfélkörre, de nem áll módjában saját webshopot készíteni?</p>
            <p>
                <b>Ez esetben a lehető legjobb helyen jár.</b> Munkatársaink <b>sok évtizednyi</b> fáradalmas munkát fektettek a lehető legtökéletesebb zálogházközpont struktúrájának kidolgozásába, valamint a tervek művészi precizitású megvalósításába csak azért, hogy Önnek mostantól fogva <b>kényelmesebben </b> és <b>hatékonyabban</b> menjen az üzletvezetés.
            </p>
               
    
            <h3>Mit kínálunk önnek?</h3>
            <ul id="offer">
                <li>Könnyedén <b>átláthatja </b> és kezelheti zálogházába érkező <b>ügyfelek</b> és <b>értéktárgyak</b> adatait, valamint zálogházáhan megköttetett <b> hitelek </b> táblázatát.</li>
                <li><b>Sokezres létszámú</b> online <b>ügyfélkör</b> számára meghirdetheti kínált termékeit és szolgáltatásait.</li>
                <li><b>Képeket tölthet fel</b> ügyfeleiről, illetve meghirdetett vagy éppen zálogban tartott értéktárgyairól, ezzel tökéletesítve zálogháza átláthatóságát és ügyfelei vizuális élményeit.</li>
                <li><b>Bárhonnan</b>, bármilyen méretű eszközön elérheti saját fiókját és adatait.</li>
            </ul>
    
            <div id="registerPromotion-div">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a>
                    <button on:click={()=>register("shop")} id="registerPromotion">Regisztráljon hozzánk még ma!</button>
                </a>
                <p id="regDriector">🠦 Tekintsen a képernyő jobb oldalára! 🠦</p>
            </div>
    
        </div>

    </div>
    <div id="body-col2">

        <form action="" id="loginBox" class="formBox" on:submit|preventDefault={loginHandler}>
            <h3>Bejelentkezés</h3>
            <label for="l-username">Felhasználónév vagy e-mail:</label>
            <input type="text" name="l-username" id="l-username" autocomplete="username">
            <label for="l-password">Jelszó:</label>
            <input type="password" name="l-password" id="l-password" autocomplete="current-password">
            <button id="login">Bejelentkezés</button>
        </form>

        <p class="error" id="loginError"></p>
        
    </div>

</section>
{/if}

<style lang="scss">

    @media (min-width: 0px) {
        #body{
            flex-direction: column;

            #body-col1{
                width: 100%;
                order: 2;
                padding: 20px !important;
            }
            #body-col2{
                width: 100%;
                order: 1;
                box-shadow: 0px 0.8px 3px black;
                z-index: 5;
            }

        }

    }
    @media (min-width: 868px) {
        #body{
            flex-direction: row;

            #body-col1{
                width: 55%;

                order: 1;
                padding: 30px !important;
                padding-right: 60px !important;
            }
            #body-col2{
                width: 45%;
                order: 2;
                box-shadow: -0.8px 0px 3px black;
            }
        }
    }



    .none{
        display: none;
    }

    #body {
        flex-grow: 1;
        width: 100%;
        display: flex;


        .formBox{
            padding-bottom: 15px;

            button{
                height: 37px;
                font-size: 18px;
            }
            input{
                height: 32px;
                font-size: 18px;
            }

            h3{
                font-size: 26px;
                font-weight: 600;
            }

            }



    }
    #body-col1{
        border-right: 1px solid black;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 6vh;
        background-color: rgb(156, 210, 177);

        
        .switch-container {
            width: 100%;
            display: flex;
            justify-content: center;

            .switch {
            display: flex;

                .option {
                    padding: 8px 12px;
                    border: 1px solid black;
                    border-right: none;
                    cursor: pointer;
                    box-shadow: 1px 1px 1.5px black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .option:first-child {
                    border-radius: 8px 0 0 8px;
                }
                .option:last-child {
                    border-right: 1px solid black;
                    border-radius: 0 8px 8px 0;

                }
                .option.active {
                    background-color: rgb(113, 194, 142);
                    z-index: 4;
                    cursor: default;
                }
            }
        }

        .page {
            width: 100%;
        }
        #page1 {

        }
        #page2 {
            display: none;
        }


        h2{
            margin-bottom: 18px;
            font-size: 34px;
        }
        h3{
            margin-bottom: 0px;
            font-size: 28px;
        }
        p, li{
            font-size: 22px;
        }

        p{
            margin: 8px 0;
            
        }
        b{
            font-weight: 500;
        }

    }
    #body-col2{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: baseline;
        flex-direction: column;
        padding-top: 9vh;
        padding-bottom: 9vh;
        gap: 10px;

    }
    #loginBox{
        display: flex;
        flex-direction: column;
        padding: 12px;
        border: 1px solid black;
        h3{
            margin-top: 15px;
        }

        input{
            width: 270px;
        }

        #login{
            margin-top: 11px;
        }
    }

    #registerBox{
        display: flex;
        display: none;
        flex-direction: column;
        padding: 12px;
        border: 1px solid black;
        h3{
            margin-top: 15px;
        }
        input{
            width: 270px;
        }

        #register{
            margin-top: 14px;
        }

        #r-username{
            margin-bottom: 10px;
        }

    }

    #toLogin-p{
        display: none;
        margin-bottom: 40px;
    }
    #toRegister-p{
        margin-bottom: 40px;
    }


    #offer{
        li{
            margin-bottom: 10px;
        }
    }

    #registerPromotion-div{
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        #registerPromotion{
            font-size: 30px;
            width: fit-content;
            padding: 10px 20px;

        }
        #regDriector{
            margin: 0;
            display: none;
        }

    }



</style>
