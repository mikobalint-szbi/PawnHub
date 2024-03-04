<script>
    async function switchtoRegister(regDirector){

        if (regDirector){
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
        <p>Ön is zálogháztulajdonos, akinek elege van a papír alapú adminisztráció fáradalmas munkájából? Nincs megelégedve üzlete szervezettségével? Regisztráljon oldalunkra még ma!</p>

        <h3>Mit kínálunk önnek?</h3>
        <ul id="offer">
            <li>Könnyedén átláthatja és kezelheti zálogházába érkező ügyfelek és értéktárgyak adatait, valamint zálogházáhan megköttetett hitelek táblázatát.</li>
            <li>Számontarthatja egyenlegét, profitját és költségeit.</li>
            <li>Követheti és feljegyezheti üzlete pénzmozgásait.</li>
            <li>Képeket tölthet fel ügyfeleiről és értéktárgyairól, ezzel tökéletesítheti adatbázisa átláthatóságát és vizuális élményét.</li>
            <li>Bárhonnan elérheti saját fiókját és adatait.</li>
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
            <button id="registerPromotion" on:click={() => switchtoRegister(true)}>Regisztráljon hozzánk még ma!</button>
            <p id="regDriector">🠦 Tekintsen a képernyő jobb oldalára! 🠦</p>
        </div>
        <p style="font-size: 30px; color: red">Még nincs kész a Bejelentkezés-oldal reszponzivitása.</p>


    </div>
    <div id="body-col2">
        <div id="loginBox">
            <h3>Bejelentkezés</h3>
            <label for="l-username">Felhasználónév vagy e-mail:</label>
            <input type="text" name="l-username" id="l-username">
            <label for="l-password">Jelszó:</label>
            <input type="password" name="l-password" id="l-password">
            <button id="login" on:click={loginHandler}>Bejelentkezés</button>
        </div>

        <div id="registerBox">
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

        <!-- svelte-ignore a11y-invalid-attribute -->
        <p id="toRegister-p">Regisztrálni szeretne? <a href="#" on:click={() => switchtoRegister(false)}>Kattintson ide!</a></p>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <p id="toLogin-p">Már van PawnHub-fiókja? <a href="#" on:click={switchtoLogin}>Kattintson ide!</a></p>

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
    @media (min-width: 340px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {


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
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 1000px) {


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {


    }



    .none{
        display: none;
    }

    #body {
        flex-grow: 1;
        width: 100%;
        display: flex;
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

        h3, h2{
            margin-bottom: 0px;
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
