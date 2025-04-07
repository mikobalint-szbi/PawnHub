<script>
    import { onMount } from "svelte";
    import '$lib/Styles/shopAndProduct.scss';
    import '$lib/Styles/shopCard.scss';
    import {
        formatNum, api, setQueryParam, getQueryParam, get_categories
    } from "$lib/Scripts/functions.js";
    import { open_popup, close_popup } from "$lib/Scripts/popup.js";



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
        if (localStorage["user"]) {
            document.getElementById("pageTag3").style.display = "block"
            togglePages("pageTag3")
        }
        else {
            open_popup("messageOK","Az üzenetküldéshez be kell jelentkeznie.",()=>{location.assign("/")})
        }
    }

    function resizing () {

        // ContactRows:

        let w = document.getElementById("main-container")

        if (w){
            w = w.offsetWidth
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



    }

    async function get_itemData () {
        if (!itemId) {
            history.go(-1)
        }
        else {
            let reply = await api("GET", `/item/${itemId}`)

            if (reply) {
                if (reply.error) {
                    if (reply.error.code = "NOT_FOUND") {
                        console.log("A termék nem található.")
                        location.assign("/home")
                    }
                    else {
                        console.log("Ismeretlen szerverhiba történt. [#1]")
                    }
                }
                else {
                    return reply
                }
            }
            else {
                console.log("Ismeretlen szerverhiba történt. [#2]")
            }

        }
    }


    async function get_shopData () {
        if (!item || !item.shop_id) {
            history.go(-1)
        }
        else {
            shopId = item.shop_id

            let reply = await api("GET", `/shop/${shopId}`)

            if (reply) {
                if (reply.error) {
                    if (reply.error.code = "NOT_FOUND") {
                        console.log("A zálogház nem található.")
                        location.assign("/home")
                    }
                    else {
                        console.log("Ismeretlen szerverhiba történt. [#1]")
                    }
                }
                else {
                    return reply
                }
            }
            else {
                console.log("Ismeretlen szerverhiba történt. [#2]")
            }

        }
    }



    async function init() {
        
        categories = await get_categories()
        item = await get_itemData()
        shop = await get_shopData()

    }

    let itemId = getQueryParam("id")
    let item = null;
    let shopId = null;
    let shop = null;
    let categories;

    init()


  


    onMount(()=>{

        resizing()

        window.addEventListener("resize", ()=> {
            resizing()
        })



        // open_popup("imageViewer")
    })
</script>

{#if item}
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
                {#if item.img}
                    <div class="image product" style="background-image: url('data:image/png;base64,{item.img}');"></div>
                {:else}
                    <div class="image product" style="background-image: url('IMG/Global/no-image.png');"></div>
                {/if}

            </div>
            <div class="col2">
                <div class="nameField">
                    <p class="name">{item.name}</p>
                    <p class="category">{categories[item.type_id]}</p>
                </div>
                <div class="priceField">
                    <div class="priceField-inner">
                        <p class="priceLabel">A termék ára:</p>
                        <p class="price">{formatNum(item.estimatedValue)} Ft</p>
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
                    <button class="pageTag active" id="pageTag1" on:click={()=>togglePages("pageTag1")}>Leírás</button>
                    <button class="pageTag" id="pageTag2" on:click={()=>togglePages("pageTag2")}>Kínálja</button>
                    <button class="pageTag" id="pageTag3" on:click={()=>togglePages("pageTag3")}>Üzenet</button>
                </div>
                <div class="pageContent" id="pageContent1">
                    <p>
                        {item.description.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>")}
                    </p>
                </div>
                <div class="pageContent product" id="pageContent2">
    
                    {#if shop}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="shopCard" on:click={()=>location.assign(`shop/?id=${shop.id}`)}>
                        <div class="row1">
                            <div class="col1">
                                {#if shop.img}
                                    <img src="data:image/png;base64,{shop.img}" class="shopImage" alt="A zálogház fotója">
                                {:else}
                                    <img src="IMG/Global/no-shop-image.png" class="shopImage" alt="A zálogház fotója">
                                {/if}
                            </div>
                            <div class="col2">
                                <h3 class="shopTitle" title="Zálogház neve">{shop.name}</h3>
                                <p class="shopDescription">
                                    {shop.intro.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>")}
                                </p>
                                <div class="innerRow">
                                    <div class="shopLocation">
                                        <p class="shopSettlement">{shop.settlement.name}</p>
                                        <p class="shopAddress">{shop.address}</p>

                                    </div>
            
                                </div>
            
                            </div>
                        </div>
                    </div>
                    {/if}


                </div>
                <div class="pageContent" id="pageContent3">
                    {#if shop && localStorage["user"]}
                    <div class="message new">
                        <div class="mHeader new">
                            <div class="col1 mhCol">
                                <img src="IMG/Messages/out.png" alt="">
                            </div>
                            <div class="col2 mhCol" alt="Címzett" title="Címzett">
                                <input type="text" name="receiver" id="receiver" placeholder="Címzett" alt="Címzett" class="messageInput" value="{shop.username}" disabled>
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
                    {/if}
                </div>
            </div>


        </div>
        <div id="mRow3" class="mRow">

        </div>

    </div>
</section>
{/if}

<style lang="scss">

</style>