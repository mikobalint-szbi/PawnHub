<script>

</script>
<section id="body">
    <div id="main-container">

        <div id="mRow1" class="mRow">
            <div class="col1">
                <img src="IMG/Shops/no-shop-image.png" alt="">
            </div>
            <div class="col2">
                <div class="nameField">
                    <p class="name">Tóth Pista Zálogház és Ékszerüzlet</p>
                    <p class="estab">Alapítva: 2015</p>
                </div>
                <div class="contactsField">
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/location.png" alt="Hely">
                        </div>
                        <p class="value">
                            Nagykőrös, Szent Benedek u. 6.
                        </p>
                    </div>
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/website.png" alt="Honlap">
                        </div>
                        <p class="value">
                            tothpistazaloghaz.hu
                        </p>
                    </div>
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/email.png" alt="Email">
                        </div>
                        <p class="value">
                            tothpistazaloghaz@mail.org
                        </p>
                    </div>
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/phone.png" alt="Telefon">
                        </div>
                        <p class="value">
                            +36 12 345 6789
                        </p>
                    </div>
                </div>
                <div class="buttonField">

                </div>
            </div>
        </div>
        <div id="mRow2" class="mRow">

        </div>
        <div id="mRow3" class="mRow">

        </div>

    </div>
</section>
<style lang="scss">

    #body {
        width: 100%;
        display: flex;
        justify-content: center;

        #main-container {
            min-height: 100vh;
            max-width: 1000px;
            width: 80%;
            border: 1px solid black;
            border-top: none;
            margin-top: 60px;
            display: flex;
            flex-direction: column;

            .mRow {
                width: 100%;
                display: flex;
            }

            #mRow1 {
                height: 350px;
                gap: 10px;


                .col1 {

                    width: 40%;
                    width: 360px;
                    display: flex;
                    justify-content: center;

                    img {
                        width: 95%;
                        background-color: rgb(161, 213, 179);
                        border: 1px solid black;
                        border-radius: 5px;
                    }

                }
                .col2 {

                    flex-grow: 10;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    .nameField {
                        .name {
                            margin: 0;
                            font-weight: 500;
                            font-size: 30px;
                        }
                        .estab {
                            margin: 0;
                        }
                    }
                    .contactsField {
                        display: flex;
                        flex-direction: column;
                        padding-left: 30px;
                        gap: 8px;

                        .contactRow {
                            display: flex;
                            align-items: center;
                            gap: 10px;

                            .icon {
                                width: 40px;
                                height: 40px;
                                border: 1px solid black;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 1000px;

                                img {
                                    height: 75%;
                                }
                            }
                            .value {
                                margin: 0;
                            }

                        }
                    }

                }
            }


        }
    }




</style>