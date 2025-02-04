<script>
    async function switchtoRegister(regDirector){

        if (regDirector && screen.width >= 868){
            document.getElementById("regDriector").style.display = "block"
            await new Promise(r => setTimeout(r, 100));
        }



        document.getElementById("loginBox").style.display = "none"
        document.getElementById("registerBox").style.display = "flex"

        document.getElementById("toRegister-p").style.display = "none"
        document.getElementById("toLogin-p").style.display = "block"

    }

    function switchtoLogin(){
        document.getElementById("loginBox").style.display = "flex"
        document.getElementById("registerBox").style.display = "none"

        document.getElementById("toRegister-p").style.display = "block"
        document.getElementById("toLogin-p").style.display = "none"

        document.getElementById("regDriector").style.display = "none"
    }

    function loginHandler(){
        window.location.href = "home"
    }


</script>

<section id="body">
    <div id="body-col1">
        <h2>Zálogházak irányítása egyszerűbben mint valaha.</h2>
        <p>Ön is zálogháztulajdonos, akinek <b>elege van </b> a papíralapú adminisztráció  <b>fáradalmas munkájából? </b> </p>
        <p>Nincs megelégedve üzlete <b> szervezettségével? </b></p>
        <p>
            <b>Ez esetben a lehető legjobb helyen jár.</b> Munkatársaink <b>sok évtizednyi</b> fáradalmas munkát fektettek a lehető legtökéletesebb zálogházmenedzsment-szoftver struktúrájának kidolgozásába, valamint a tervek művészi precizitású megvalósításába csak azért, hogy Önnek mostantól fogva <b>kényelmesebben </b>mehessen az üzletvezetés.
        </p>
           

        <h3>Mit kínálunk önnek?</h3>
        <ul id="offer">
            <li>Könnyedén <b>átláthatja </b> és kezelheti zálogházába érkező <b>ügyfelek</b> és <b>értéktárgyak</b> adatait, valamint zálogházáhan megköttetett <b> hitelek </b> táblázatát.</li>
            <li>Számontarthatja <b>egyenlegét</b>, <b>profitját</b> és <b>költségeit.</b></li>
            <li>Feljegyezheti és követheti üzlete <b>pénzmozgásait.</b></li>
            <li><b>Képeket tölthet fel</b> ügyfeleiről és értéktárgyairól, ezzel tökéletesítheti adatbázisa átláthatóságát és vizuális élményét.</li>
            <li><b>Bárhonnan</b> elérheti saját fiókját és adatait.</li>
        </ul>

        <h3 class="none">Mit kérünk cserébe?</h3>
        <p class="none">Engedélyt:</p>
        <ul class="none">
            <li>Személyes adatainak eltulajdonítására.</li>
            <li>Névjegyeinek és emailjeinek időnkénti áttekintésére.</li>
            <li>Webkamerájának és mikrofonjának rendszeres felülvizsgálatára</li>
            <li>SMS-ek küldésére és fogadására az telefonján</li>
            <li>Utalások szabad lebonyolítására bankfiókjában.</li>
            <li>Elhalálozás esetén belső szerveinek felhasználására</li>
        </ul>

        <div id="registerPromotion-div">
            <a href="#registerBox">
                <button id="registerPromotion" onclick={() => switchtoRegister(true)}>Regisztráljon hozzánk még ma!</button>
            </a>
            <p id="regDriector">🠦 Tekintsen a képernyő jobb oldalára! 🠦</p>
        </div>


    </div>
    <div id="body-col2">
        <div id="loginBox" class="formBox">
            <h3>Bejelentkezés</h3>
            <label for="l-username">Felhasználónév vagy e-mail:</label>
            <input type="text" name="l-username" id="l-username">
            <label for="l-password">Jelszó:</label>
            <input type="password" name="l-password" id="l-password">
            <button id="login" onclick={loginHandler}>Bejelentkezés</button>
        </div>

        <div id="registerBox" class="formBox">
            <h3>Regisztráció</h3>
            <label for="r-surname">Vezetéknév:</label>
            <input type="text" name="r-surname" id="r-surname">
            <label for="r-forename">Keresztnév:</label>
            <input type="text" name="r-forename" id="r-forename">
            <label for="r-username">Felhasználónév:</label>
            <input type="text" name="r-username" id="r-username">
            <label for="r-email">E-mail-cím:</label>
            <input type="text" name="r-email" id="r-email">
            <label for="r-password">Jelszó:</label>
            <input type="password" name="r-password" id="r-password">
            <label for="r-passwordAgain">Jelszó újra:</label>
            <input type="password" name="r-passwordAgain" id="r-passwordAgain">
            <button id="register">Regisztráció</button>
        </div>

        <!-- svelte-ignore a11y_invalid_attribute -->
        <p id="toRegister-p">Regisztrálni szeretne? <a href="#" onclick={() => switchtoRegister(false)}>Kattintson ide!</a></p>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <p id="toLogin-p">Már van PawnHub-fiókja? <a href="#" onclick={switchtoLogin}>Kattintson ide!</a></p>

    </div>

</section>

<style lang="scss">

    @media (min-width: 0px) {
        #body{
            flex-direction: column;

            #body-col1{
                width: 100%;
            }
            #body-col2{
                width: 100%;
            }

        }

    }
    @media (min-width: 868px) {
        #body{
            flex-direction: row;

            #body-col1{
                width: 55%;
            }
            #body-col2{
                width: 45%;
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
        padding: 30px;
        padding-right: 60px;
        padding-top: 6vh;
        background-color: rgb(156, 210, 177);

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
        padding-top: 13vh;
        gap: 10px;
        box-shadow: -0.8px 0px 3px black;
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
