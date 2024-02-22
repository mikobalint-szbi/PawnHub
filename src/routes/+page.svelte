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

    }

    #offer{
        li{
            margin-bottom: 10px;
        }
    }


</style>
