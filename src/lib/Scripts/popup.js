
export function close_popup(popupID){
    let popup = document.getElementById(popupID)
    document.getElementById("body").style.display = "flex"
    popup.style.maxHeight = "unset"
    popup.style.margin = "0"

    popup.close()
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

export function open_popup(popupID, ...args){

    let backButton = false

    if (["productPopup","loanPopup","customerPopup"].includes(popupID)){

        let create = args[0]

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
            "profilePic": "Biztosan törölni szeretné a fiókjához tartozó profilképet?"
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