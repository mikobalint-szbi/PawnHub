import { getNum } from "$lib/Scripts/functions.js";

export function close_popup(popupID){
    let popup = document.getElementById(popupID)

    if (popup) {
        document.getElementById("body").style.display = "flex"
        popup.style.maxHeight = "unset"
        popup.style.margin = "0"
    
        popup.close()
    }

}

export function save_popup(popupID){
    let popup = document.getElementById(popupID)
    document.getElementById("body").style.display = "flex"
    popup.style.maxHeight = "unset"
    popup.style.margin = "0"

    popup.close()

    if (popupID == "productPopup"){

    }


}

/*export function load_popupData(popupID, object) {

    if (popupID == "loanPopup_forCustomers") {
        document.getElementById("")
    }

}*/

export function open_popup(popupID, ...args){

    close_popup(popupID)

    let backButton = false
    let object

    if (["productPopup","loanPopup","customerPopup"].includes(popupID)){

        let create = args[0]
        //object = args[1]

        if (create){

            document.getElementById(popupID + "-submitText").innerHTML = "Mentés"
            
        }
        else{
            document.getElementById(popupID + "-submitText").innerHTML = "Módosítások mentése"
        }

    }
    else if (popupID == "messageOK"){

        let text = args[0]
        let okbutton

        if (args[1]){
            okbutton = args[1]
        }
        else {
            okbutton = ()=>close_popup("messageOK")
        }


        document.querySelector("#okMessage p").innerHTML = `${text}`
        document.getElementById("okButton").addEventListener("click",okbutton)

    }
    else if (popupID == "confirmDelete") {
        let textID = args[0]
        let yesButton = args[1]
        let noButton = args[2] // default: close_popup

        let texts = {
            "customer1": "Biztosan törölni szeretné a PawnHub-fiókkal nem rendelkező ügyfelet a zálogház adattárjából?",
            "customer2": "Biztosan törölni szeretné a PawnHub-fiókkal rendelkező felhasználót az ügyfelei közül?",
            "product1": "Biztosan törölni szeretné a terméket a zálogban tartott termékek közül?",
            "product2": "Biztosan törölni szeretné a terméket a zálogház kínálatából?",
            "loan": "Biztosan törölni szeretné az adósságot?",
            "account": "Biztosan törölni szeretné PawnHub-fiókját?",
            "profilePic": "Biztosan törölni szeretné a fiókjához tartozó profilképet?",
            "productPic": "Biztosan törölni szeretné a termékhez tartozó képet?"
        }


        if (texts[textID]) {
            document.querySelector("#cdMessage p").innerHTML = `${texts[textID]}`
        }
        else {
            document.querySelector("#cdMessage p").innerHTML = `${textID}`
        }

        document.getElementById("yesButton").addEventListener("click", yesButton)

        if (noButton){
            document.getElementById("noButton").addEventListener("click", noButton)
        }
    }
    /*else {
        object = args[0]
    }*/

    if (backButton){
        document.getElementById(popupID + "-backButton").style.visibility = "visible"
    }
    else{
        document.getElementById(popupID + "-backButton").style.visibility = "hidden"

    }

    if (document.getElementById("userDropdown") != null){

        document.getElementById("userDropdown").style.display = "none"
    }

    let popup = document.getElementById(popupID)


    if (window.innerWidth < 596){
        document.getElementById("body").style.display = "none"
        popup.style.margin = "30px 0"
        document.getElementById("marginBottom").style.height = "25px"

        popup.show()
    }
    else{
        popup.style.maxHeight = "90vh"
        popup.style.margin = "15px 0"
        document.getElementById("marginBottom").style.height = "0"
        popup.showModal()
    }

    document.getElementById("p-name").focus()

}

export function initial_sizing() {
    // for ImageViewer

    let img = document.getElementById("popup-img")
    let styles = getComputedStyle(img)

    if (getNum(styles.height) > getNum(styles.width)) {

        img.style.setProperty("height", "95%", "important");
        img.style.setProperty("width", "unset", "important");

    }
    else {
        img.style.setProperty("height", "unset", "important");
        img.style.setProperty("width", "97%", "important");

    }

}

export function resize_image(ratio){
    document.querySelectorAll(".imageViewer-image").forEach(img => {

        let imgStyles = getComputedStyle(img)
        let h = getNum(imgStyles.height)
        let w = getNum(imgStyles.width)
    
        /*let container = document.getElementById("popup-div")
        let ch = container.clientHeight
        let cw = container.clientWidth*/
    
        img.style.setProperty("height", h*ratio + "px", "important");
        img.style.setProperty("width", w*ratio + "px", "important");
    });


    /*if (ratio < 1) {

        if (h >= w && h < ch-170) {
            console.log(h < ch-170)
            img.style.setProperty("height", "95%", "important");
            img.style.setProperty("width", "unset", "important");
        }
        else if (w >= h && w < cw-170) {
            img.style.setProperty("height", "unset", "important");
            img.style.setProperty("width", "97%", "important");
        }
    }*/

}

