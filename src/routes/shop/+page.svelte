<script>
    import { onMount } from "svelte";
    import '$lib/Styles/shopAndProduct.scss';
    import '$lib/Styles/productCard.scss';
    import { open_popup, close_popup } from "$lib/Scripts/popup.js";
    import {
        formatNum, api, setQueryParam, getQueryParam, get_categories
    } from "$lib/Scripts/functions.js";
    import {togglePages, close_newMessage, open_newMessage, resizing, get_shopItems, get_shopData} from "$lib/Scripts/shopAndProduct.js"


    async function init() {
        categories = await get_categories()
        shop = await get_shopData(shopId)
        items = await get_shopItems(shopId)
    }

    let shopId = getQueryParam("id")
    let shop = null;
    let items = null;
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
        {#if shop}
        <div id="mRow1" class="mRow">
            <div class="col1">
                {#if shop.img}
                    <div class="image shop" style="background-image: url('data:image/png;base64,{shop.img}');"></div>
                {:else}
                    <div class="image shop" style="background-image: url('IMG/Global/no-image.png');"></div>
                {/if}

            </div>
            <div class="col2">
                <div class="nameField">
                    <p class="name">{shop.name}</p>
                    {#if shop.estYear}
                        <p class="estab">Alapítva: {shop.estYear}</p>
                    {:else}
                        <p class="estab">&nbsp;</p>
                    {/if}
                </div>
                <div class="contactsField">
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/location.png" alt="Hely">
                        </div>
                        <p class="value">
                            {shop.settlement.postalCode} {shop.settlement.name}, {shop.address}
                        </p>
                    </div>
                    {#if shop.website}
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/website.png" alt="Honlap">
                        </div>
                        <a class="value" href="{shop.website}">
                            {shop.website_out}
                        </a>
                    </div>
                    {/if}
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/email.png" alt="Email">
                        </div>
                        <p class="value">
                            {shop.email}
                        </p>
                    </div>
                    <div class="contactRow">
                        <div class="icon">
                            <img src="IMG/Shop/phone.png" alt="Telefon">
                        </div>
                        <p class="value">
                            {shop.mobile}
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
                    <button class="pageTag active" id="pageTag1" on:click={()=>togglePages("pageTag1")}>Bemutatkozás</button>
                    <button class="pageTag" id="pageTag2" on:click={()=>togglePages("pageTag2")}>Árukészlet</button>
                    <button class="pageTag" id="pageTag3" on:click={()=>togglePages("pageTag3")}>Üzenet</button>
                </div>
                <div class="pageContent" id="pageContent1">
                    <p>
                        {shop.intro.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>")}
                    </p>
                </div>
                <div class="pageContent" id="pageContent2">
    
                    {#if items}
                    {#if items.length == 0}
                    <p id="emptyMsg">A zálogház nem kínál jelenleg egy terméket sem.</p>
                    {/if}
                    {#each items as item}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="productCard" on:click={()=>location.assign(`product/?id=${item.id}`)}>
                        <div class="row1">
                            <div class="col1">
                                {#if item.img}
                                    <img src="data:image/png;base64,{item.img}" class="productImage" alt="A termék fotója">
                                {:else}
                                    <img src="IMG/Global/no-image.png" class="productImage" alt="A termék fotója">
                                {/if}
                            </div>
                            <div class="col2">
                                <h3 class="productTitle" title="Termék neve">{item.name}</h3>
                                <p class="productCategory">{categories[item.type_id]}</p>
                                <p class="productDescription">
                                    {item.description.replaceAll("\n\n","</p><p>").replaceAll("\n","<br>")}
                                </p>
                                <div class="innerRow">
                                    <div class="productLocation">
                                    </div>
                                    <div class="productPrice">
                                        <p >{formatNum(item.estimatedValue)} Ft</p>
                                    </div>
            
                                </div>
            
                            </div>
                        </div>
                    </div>
                    {/each}
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
        {/if}
    </div>

</section>

<style lang="scss">
    #emptyMsg {
        text-align: center;
        margin: 60px 10px !important;
        color: rgb(64, 108, 78);
        font-size: 21px;
    }
</style>