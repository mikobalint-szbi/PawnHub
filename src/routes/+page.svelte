<script>

</script>

<svelte:head>

</svelte:head>

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

        <h3>Mit kérünk cserébe?</h3>
        <p>Engedélyt:</p>
        <ul>
            <li>Személyes adatainak eltulajdonítására.</li>
            <li>Névjegyeinek és emailjeinek időnkénti áttekintésére.</li>
            <li>Webkamerájának és mikrofonjának rendszeres felülvizsgálatára</li>
            <li>SMS-ek küldésére és fogadására az telefonján</li>
            <li>Utalások szabad lebonyolítására bankfiókjában.</li>
            <li>Elhalálozás esetén belső szerveinek felhasználására</li>
        </ul>
    </div>
    <div id="body-col2">
        <div id="loginBox">
            <h3>Bejelentkezés</h3>
            <label for="l-username">Felhasználónév vagy e-mail:</label>
            <input type="text" name="l-username" id="l-username">
            <label for="l-password">Jelszó:</label>
            <input type="password" name="l-password" id="l-password">
            <button id="login">Bejelentkezés</button>
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
    </div>

</section>

<style lang="scss">

    #body {
        flex-grow: 1;
        width: 100%;
        display: flex;
    }
    #body-col1{
        border-right: 1px solid black;
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    #body-col2{
        width: 45%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }
    #loginBox{
        display: flex;
        flex-direction: column;
        padding: 12px;
        border: 1px solid black;
        input{
            width: 270px;
        }

        #login{
            margin-top: 10px;
        }
    }

    #registerBox{
        display: flex;
        flex-direction: column;
        padding: 12px;
        border: 1px solid black;
        input{
            width: 270px;
        }

        #register{
            margin-top: 10px;
        }
    }


    #offer{
        li{
            margin-bottom: 10px;
        }
    }


</style>
