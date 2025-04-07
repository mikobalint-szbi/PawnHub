<script>
    import { onMount } from "svelte";
    import '$lib/Styles/shopAndProduct.scss';
    import '$lib/Styles/productCard.scss';
    import { open_popup, close_popup } from "$lib/Scripts/popup.js";
    import {togglePages, close_newMessage, open_newMessage, resizing, get_itemData, get_shopData, init} from "$lib/Scripts/shopAndProduct.js"



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
                <div class="image shop"></div>

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
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="productCard" on:click={()=>location.assign('product')}>
                        <div class="row1">
                            <div class="col1">
                                <img src="IMG/Global/no-image.png" alt="A termék fotója">
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

</style>