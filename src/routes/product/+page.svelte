<script>
    import { onMount } from "svelte";
    import '$lib/Styles/shopAndProduct.scss';
    import { getNum } from "$lib/Scripts/functions.js"

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

        // ContactRows:

        let w = document.getElementById("main-container").offsetWidth
        document.getElementById("head-div").style.width = w +"px"

        w = w - (40+10+2*20)

        document.querySelectorAll(".contactRow .value").forEach((e)=>{

            e.style.maxWidth = w + "px"

        })

        // Title:

        w = document.getElementById("main-container").offsetWidth
        let name = document.querySelector(".name")


        if (window.innerWidth < 596) {
            name.style.setProperty("max-width",  (w - 20) * 1 + "px", "important")
        }
        else if (window.innerWidth < 768) {
            name.style.setProperty("max-width",  (w - 40) * 1 + "px", "important")
        }
        else if (window.innerWidth < 992) {
            name.style.setProperty("max-width",  (w - 40) * 0.56 + "px", "important")
        }
        else if (window.innerWidth < 1230) {
            name.style.setProperty("max-width",  (w - 40) * 0.605 + "px", "important")
        }
        else {
            name.style.setProperty("max-width",  (w - 40) * 0.627 + "px", "important")
        }




    }


    onMount(()=>{
        resizing()

        document.querySelectorAll(".pageTag").forEach((e)=>{

            e.addEventListener("click", ()=> togglePages(e.id))
        })

        window.addEventListener("resize", ()=> {
            resizing()
 
        })

        // open_popup("imageViewer")
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
                <div class="image product"></div>

            </div>
            <div class="col2">
                <div class="nameField">
                    <p class="name">SamsungSamsungSamsungSamsungSamsungSamsung Galaxy S23 5G 128GB 8GB RAM Dual</p>
                    <p class="category">Kategória</p>
                </div>
                <div class="priceField">
                    <div class="priceField-inner">
                        <p class="priceLabel">A termék ára:</p>
                        <p class="price">30 000 000 Ft</p>
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
                    <div class="pageTag active" id="pageTag1">Leírás</div>
                    <div class="pageTag" id="pageTag2">Zálogház</div>
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
    
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="shopCard" on:click={()=>location.assign('shop')}>
                        <div class="row1">
                            <div class="col1">
                                <img src="IMG/Global/no-shop-image.png" alt="Zálogház fotója">
                            </div>
                            <div class="col2">
                                <h3 class="shopTitle" title="Zálogház neve">Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve Zálogház neve </h3>
                                <p class="shopDescription">
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
                                    <div class="shopLocation">
                                        <p class="shopSettlement">Nagykőrös</p>
                                        <p class="shopAddress">Nursiai Hosszúnevű Szent Szent Szent Szent Szent Benedek u. 337.</p>

                                    </div>
            
                                </div>
            
                            </div>
                        </div>
                    </div>

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

</style>