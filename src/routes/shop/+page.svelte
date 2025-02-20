<script>
    import { onMount } from "svelte";
    import {open_popup, close_popup} from "$lib/Scripts/popup.js"

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

    function close_newMessage () {
        document.getElementById("pageTag3").style.display = "none"
        togglePages("pageTag1")
        document.querySelector("input#receiver").value = ""
        document.querySelector("input#topic").value = ""
        document.querySelector("textarea#messageBody").value = ""
    }

    function open_newMessage () {
        document.getElementById("pageTag3").style.display = "block"
        togglePages("pageTag3")
    }

    function resizing () {


        let w = document.getElementById("main-container").offsetWidth
        document.getElementById("head-div").style.width = w +"px"

        w = w - (40+10+2*20)

        document.querySelectorAll(".contactRow .value").forEach((e)=>{

            e.style.maxWidth = w + "px"

        })
    }


    onMount(()=>{
        resizing()

        document.querySelectorAll(".pageTag").forEach((e)=>{

            e.addEventListener("click", ()=> togglePages(e.id))
        })

        window.addEventListener("resize", ()=> {
            resizing()
 
        })

        open_popup("imageViewer")
    })
</script>
<section id="body">

    <div id="head-div">
        <div id="h-col1">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <a id="back" on:click={()=>window.history.go(-1)}>
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
        </div>
        <div id="h-col3">
        </div>
    </div>

    <div id="main-container">

        <div id="mRow1" class="mRow">
            <div class="col1">
                <div class="image"></div>

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
                    <button id="sendMessage" on:click={open_newMessage}>
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
                    <div class="pageTag" id="pageTag3">Üzenet</div>
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
    
                    {#each {length: 17} as _, i}
                    <div class="productCard">
                        <div class="row1">
                            <div class="col1">
                                <img src="IMG/Global/no-image.png" alt="Termék fotója">
                            </div>
                            <div class="col2">
                                <h3 class="productTitle" title="Termék neve">Termék neve Termék neve Termék neve Termék neve Termék neve Termék neve Termék neve Termék neve </h3>
                                <p class="productCategory">Karóra</p>
                                <p class="productDescription">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum exercitationem iste voluptate aperiam dolor qui animi quis fugiat magnam assumenda distinctio, consequuntur corrupti expedita sit autem iusto provident! Dicta?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            
                                </p>
                                <div class="innerRow">
                                    <div class="productLocation">
                                        <p class="productShop">Tóth Pista Zálogház és Ékszerüzlet</p>
                                        <p class="productSettlement">Nagykőrös</p>
                                    </div>
                                    <div class="productPrice">
                                        <p >30 000 000 Ft</p>
                                    </div>
            
                                </div>
            
                            </div>
                        </div>
                    </div>
                    {/each}
                </div>
                <div class="pageContent" id="pageContent3">
                    
                    <div class="message new">
                        <div class="mHeader new">
                            <div class="col1 mhCol">
                                <img src="IMG/Messages/out.png" alt="">
                            </div>
                            <div class="col2 mhCol" alt="Címzett" title="Címzett">
                                <input type="text" name="receiver" id="receiver" placeholder="Címzett" alt="Címzett" class="messageInput" disabled>
                            </div>
                            <div class="col3 mhCol" alt="Tárgy" title="Tárgy">
                                <input type="text" name="topic" id="topic" placeholder="Tárgy" alt="Tárgy" class="messageInput">
                            </div>
                            <div class="col4 mhCol" alt="Dátum" title="Dátum">2025.02.07.</div>
                        </div>
                        <div class="mBody new" id="mBody-new">
                            <textarea name="messageBody" id="messageBody" placeholder="Ide írhatja az üzenet szövegét..."></textarea>
                        </div>
                        <div class="mFooter new" id="mFooter-new">
                            <button>
                                <img src="IMG/Messages/send.png" alt="">
                                <p>Küldés</p>
                            </button>
                            <button on:click={close_newMessage}>
                                <img src="IMG/Global/delete.png" alt="" >
                                <p>Elvetés</p>
                            </button>
                        </div>
                    </div>   
                    
                </div>
            </div>


        </div>
        <div id="mRow3" class="mRow">

        </div>

    </div>
</section>
<style lang="scss">

        
    @media (min-width: 0px) {
        
        #main-container, #head-div {
            width: 95%;
        }

        #main-container {
            padding: 4px;
        }
        .pageContent {
            padding: 5px 6px;
        }
        #pageContent1 {
            padding: 5px 8px;
        }

        #mRow1 {
            flex-direction: column;

            .col1 {
                .image {
                    height: 200px;
                }
            }
            .col2 {

            }
        }

        .buttonField button {
            width: 100%;
        }

        #mRow2 {
            margin-top: 45px;
        }

        .buttonField button {
            p {
                font-size: 22px;
            }
        }

        .buttonField, .contactsField, #mRow1 .col2{
            padding: 0 4px;
        }
        #mRow1 .col1  {
            padding: 4px;
        }
    }
    @media (min-width: 300px) {

        #mRow1 {

            .col1 {
                .image {
                    height: 235px;
                }
            }
            .col2 {

            }
        }

        .nameField .name {
            font-size: 22px;
        }




        


    }
    @media (min-width: 340px) {

        #mRow1 {

            .col1 {
                .image {
                    height: 285px;
                }
            }
            .col2 {

            }
        }

        .buttonField button {
            p {
                font-size: 25px;
            }
        }

    }
    @media (min-width: 404px) {

        .pageContent {
            padding: 5px 10px;
        }

        #main-container {
            padding: 10px;
        }

        #mRow1 {

            .col1 {
                .image {
                    height: 340px;
                }
            }
            .col2 {

            }
        }

        .nameField .name {
            font-size: 25px;
        }

        .buttonField, .contactsField, #mRow1 .col1, #mRow1 .col2 {
            padding: 0;
        }

        
    }
    @media (min-width: 468px) {

        #mRow1 {

            .col1 {
                .image {
                    height: 420px;
                }
            }
            .col2 {

            }
        }

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

        #mRow1 {

            .col1 {
                .image {
                    height: 550px;
                }
            }
            .col2 {

            }
        }

        .contactsField {
            padding-left: 30px;
        }

        .nameField .name {
            font-size: 30px;
        }

        
        .buttonField button {
            width: 420px;
        }

        .pageContent {
            max-height: 80vh;
            padding: 5px 20px;
        }

        .pageContainer {
            padding-right: 5px;
        }

        #main-container {
            padding: 20px;
        }
        

    }
    @media (min-width: 768px) {

        #mRow1 {
            flex-direction: row;

            .col1 {
                flex-grow: 6;

                .image {
                    height: unset;
                }
            }
            .col2 {
                flex-grow: 8;
            }
        }

        #mRow2 {
            margin-top: 30px;
        }

        .buttonField button {
            width: 340px;
        }

 
    }   
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {
        #mRow1 {

            .col1 {
                flex-grow: 10;
            }
            .col2 {
                flex-grow: 16;
            }
        }

    }
    @media (min-width: 1111px){

        #main-container, #head-div {
            width: 90%;
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {
        
        #main-container, #head-div {
            width: 80%;
        }

        #mRow1 {
            .col1 {
                flex-grow: 9;
            }
            .col2 {
                flex-grow: 16;
            }
        }


        
    }


    #body {
        width: 100%;
        display: flex;
        justify-content: center;

        #head-div {
            max-width: 1200px;

            #h-col1 {
                justify-content: start;
            }
        }

        #main-container {
            min-height: 100vh;
            max-width: 1200px;
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;

            box-shadow: 1px -0.5px 1px rgba($color: black, $alpha: 0.3),
                        -1px -0.5px 1px rgba($color: black, $alpha: 0.3),
                        0px 0.8px 0px rgba($color: black, $alpha: 0.3);


            border: 1px solid rgb(141, 141, 141);
            //border-bottom: none;
            border-radius: 4px;

            .mRow {
                width: 100%;
                display: flex;
            }

            #mRow1 {
                min-height: 350px !important;
                gap: 18px;

                .col1 {

                    display: flex;
                    justify-content: start;
                    flex-basis: 0;

                    

                    .image {
                        width: 100%;
                        background-color: rgb(161, 213, 179);
                        border: 1px solid black;
                        border-radius: 5px;
                        background-image: url("IMG/Shops/no-shop-image.png");
                        background-size: cover;
                        background-position: center;
                    }

                }
                .col2 {
                    flex-basis: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    .nameField {
                        .name {
                            margin: 0;
                            font-weight: 500;

                        }
                        .estab {
                            margin-top: -3px;
                            margin-bottom: 3px;
                        }
                    }
                    .contactsField {
                        display: flex;
                        flex-direction: column;

                        gap: 8px;
                        margin-bottom: 15px;

                        .contactRow {
                            display: flex;
                            align-items: center;
                            gap: 10px;

                            .icon {
                                width: 40px;
                                height: 40px;
                                min-width: 40px;
                                max-width: 40px;
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

                                white-space: pre-wrap; /* css-3 */
                                white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
                                white-space: -pre-wrap; /* Opera 4-6 */
                                white-space: -o-pre-wrap; /* Opera 7 */
                                word-wrap: break-word; /* Internet Explorer 5.5+ */
                                overflow-wrap: break-word;
                            }

                        }
                    }

                    .buttonField {
                        display: flex;
                        margin-top: auto;
                        

                        button {
                            height: 50px;
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

                            }
                        }
                    }

                }
            }

            #mRow2 {
                flex-direction: column;

                .pageContainer {
                    border: 1px solid rgb(141, 141, 141);
                    margin-top: 40px;
                    box-shadow: 1px -0.5px 1px rgba($color: black, $alpha: 0.3),
                                -1px -0.5px 1px rgba($color: black, $alpha: 0.3),
                                0px 0.8px 0px rgba($color: black, $alpha: 0.3);

                    padding-top: 20px;
                    padding-bottom: 20px;

                    
                    .pageTags {
                        display: flex;
                        padding-left: 0.3px;
                        
                        .pageTag {
                            border: 1px solid rgb(141, 141, 141);
                            border-right: none;
                            border-bottom: none;
                            padding: 8px;
                            width: 130px;
                            text-align: center;
                            height: 39px;
                            margin-top: -60px;
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
                        #pageTag3 {
                            display: none;
                        }

                        .pageTag:last-child{
                            border-right: 1px solid rgb(141, 141, 141) !important;
                        }
                    }

                    .pageContent {

                        min-height: 500px;
                        overflow: auto;

                    }

                    
                    /*#pageContent1 {

                    }*/
                    #pageContent2 {
                        display: none;
                        flex-direction: column;

                        .productCard {
                            background-color: rgb(161, 213, 179);

                            .productImage {
                                background-color: rgb(160, 206, 180);
                            }
                        }

                    }

                    #pageContent3 {
                        display: none;
                        padding-bottom: 0;

                        .message.new {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            margin-bottom: 5px;
                        }
                    }
                }






                p {
                    margin: 0;
                }

            }


        }
    }




</style>