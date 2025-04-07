

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
