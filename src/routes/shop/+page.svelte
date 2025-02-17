<script>
    import { onMount } from "svelte";

    function togglePages(id) {

        document.querySelectorAll(".pageTag").forEach((e)=>{
            e.classList.remove("active")
        })

        document.getElementById(id).classList.add("active")

        id = id.slice(-1);

        document.querySelectorAll(".pageContent").forEach((e)=>{
            e.style.display = "none"
        })

        document.getElementById("pageContent" + id).style.display = "flex"


    }

    onMount(()=>{
        document.querySelectorAll(".pageTag").forEach((e)=>{

            e.addEventListener("click", ()=> togglePages(e.id))
        })  
    })
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
                        <a class="value" href="https://www.tothpistazaloghaz.hu">
                            tothpistazaloghaz.hu
                        </a>
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
                    <button id="sendMessage">
                        <img src="IMG/Messages/mail.png" alt="Üzenet küldése">
                        <p>Üzenet küldése</p>
                    </button>
                </div>
            </div>
        </div>
        <div id="mRow2" class="mRow">

            <div class="pageContainer">
                <div class="pageTags">
                    <div class="pageTag active" id="pageTag1">Bemutatkozás</div>
                    <div class="pageTag" id="pageTag2">Árukészlet</div>
                </div>
                <div class="pageContent" id="pageContent1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure magnam, necessitatibus sint nostrum doloremque consectetur sit amet eos soluta cum, debitis ut distinctio nihil eaque alias deserunt dolorum cumque?
                        Autem beatae rerum optio fugiat minus laboriosam id neque harum, tenetur, quia sint ad voluptate hic eum, et fugit corporis ex! Atque incidunt eius esse cum quos perspiciatis aliquam accusamus?
                        Odio nesciunt, voluptatum expedita itaque placeat deleniti esse, debitis dolorem reprehenderit aspernatur officiis quibusdam cumque, maxime quisquam vel ipsam optio officia? Tempore, placeat! Praesentium recusandae, neque magnam quaerat quas non?
                        Fugiat sint, numquam nostrum dolorem eius facere quae amet soluta dolorum! Distinctio aspernatur sint, nihil atque natus veritatis quos magnam. Officia possimus quaerat pariatur aliquid eos quo quasi ut fuga?
                        Animi harum, voluptates maxime saepe quidem neque cumque iure, fugiat repudiandae voluptas expedita rerum nam, dolore laborum recusandae et ducimus? Quam aliquam recusandae voluptate molestias consequuntur, doloremque libero maxime odio!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure magnam, necessitatibus sint nostrum doloremque consectetur sit amet eos soluta cum, debitis ut distinctio nihil eaque alias deserunt dolorum cumque?
                        Autem beatae rerum optio fugiat minus laboriosam id neque harum, tenetur, quia sint ad voluptate hic eum, et fugit corporis ex! Atque incidunt eius esse cum quos perspiciatis aliquam accusamus?
                        Odio nesciunt, voluptatum expedita itaque placeat deleniti esse, debitis dolorem reprehenderit aspernatur officiis quibusdam cumque, maxime quisquam vel ipsam optio officia? Tempore, placeat! Praesentium recusandae, neque magnam quaerat quas non?
                        Fugiat sint, numquam nostrum dolorem eius facere quae amet soluta dolorum! Distinctio aspernatur sint, nihil atque natus veritatis quos magnam. Officia possimus quaerat pariatur aliquid eos quo quasi ut fuga?
                        Animi harum, voluptates maxime saepe quidem neque cumque iure, fugiat repudiandae voluptas expedita rerum nam, dolore laborum recusandae et ducimus? Quam aliquam recusandae voluptate molestias consequuntur, doloremque libero maxime odio!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure magnam, necessitatibus sint nostrum doloremque consectetur sit amet eos soluta cum, debitis ut distinctio nihil eaque alias deserunt dolorum cumque?
                        Autem beatae rerum optio fugiat minus laboriosam id neque harum, tenetur, quia sint ad voluptate hic eum, et fugit corporis ex! Atque incidunt eius esse cum quos perspiciatis aliquam accusamus?
                        Odio nesciunt, voluptatum expedita itaque placeat deleniti esse, debitis dolorem reprehenderit aspernatur officiis quibusdam cumque, maxime quisquam vel ipsam optio officia? Tempore, placeat! Praesentium recusandae, neque magnam quaerat quas non?
                        Fugiat sint, numquam nostrum dolorem eius facere quae amet soluta dolorum! Distinctio aspernatur sint, nihil atque natus veritatis quos magnam. Officia possimus quaerat pariatur aliquid eos quo quasi ut fuga?
                        Animi harum, voluptates maxime saepe quidem neque cumque iure, fugiat repudiandae voluptas expedita rerum nam, dolore laborum recusandae et ducimus? Quam aliquam recusandae voluptate molestias consequuntur, doloremque libero maxime odio!
                    </p>
                </div>
                <div class="pageContent" id="pageContent2">
    
                </div>
            </div>


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
            margin-top: 60px;
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;

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
                    justify-content: start;
                    

                    img {
                        height: 100%;
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
                            margin-top: -3px;
                            margin-bottom: 3px;
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
                                border: 1px solid rgb(84, 131, 100);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 1000px;
                                background-color: rgb(128, 204, 154);

                                img {
                                    height: 70%;
                                }
                            }
                            .value {
                                margin: 0;
                                font-size: 19px;
                                text-decoration: none;
                                color:  black !important;
                            }

                        }
                    }

                    .buttonField {
                        display: flex;
                        margin-top: auto;
                        

                        button {
                            height: 50px;
                            width: 330px;
                            display: flex;
                            align-items: center;
                            padding: 5px;
                            gap: 10px;
                            justify-content: center;
                            border-radius: 5px;

                            img {
                                height: 100%;
                            }

                            p {
                                margin: 0;
                                font-size: 25px;
                            }
                        }
                    }

                }
            }

            #mRow2 {
                flex-direction: column;
                margin-top: 30px;

                .pageContainer {
                    border: 1px solid rgb(141, 141, 141);
                    margin-top: 40px;
                    box-shadow: 1px -0.5px 1px rgba($color: black, $alpha: 0.3),
                                -1px -0.5px 1px rgba($color: black, $alpha: 0.3),
                                0px 0.8px 0px rgba($color: black, $alpha: 0.3);

                    .pageTags {
                        display: flex;
                        
                        .pageTag {
                            border: 1px solid rgb(141, 141, 141);
                            border-right: none;
                            border-bottom: none;
                            padding: 8px;
                            width: 130px;
                            text-align: center;
                            height: 39px;
                            margin-top: -40px;
                            margin-left: -1px;
                            cursor: pointer;
                            background-color: rgb(164, 199, 175);
                            border-radius: 3px 3px 0 0;
                            box-shadow: 1px -1px 1px rgba($color: black, $alpha: 0.3) inset,
                            -1px -1px 1px rgba($color: black, $alpha: 0.3) inset;
                            font-weight: 300;

                        }
                        .pageTag.active {
                            //background-color: rgb(118, 199, 146);
                            z-index: 30;
                            height: 50px;
                            background-color: rgb(180, 221, 197);
                            border-right: 1px solid rgb(141, 141, 141);
                            height: 40px !important;
                            cursor: default;
                            box-shadow: 1.2px -1px 1.1px rgba($color: black, $alpha: 0.3),
                                        -1.2px -1px 1.1px rgba($color: black, $alpha: 0.3);

                            font-weight: 500;
                            
                        }

                        .pageTag:last-child{
                            border-right: 1px solid rgb(141, 141, 141) !important;
                        }
                    }

                    .pageContent {

                        padding: 20px;

                    }
                }




                #pageContent1 {

                }
                #pageContent2 {
                    display: none;
                }


                p {
                    margin: 0;
                }

            }


        }
    }




</style>