
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

export function open_popup(popupID, create, backButton){

    if (["productPopup","loanPopup","customerPopup"].includes(popupID)){

        if (create){

            document.getElementById(popupID + "-submitText").innerHTML = "Mentés"
            
        }
        else{
            document.getElementById(popupID + "-submitText").innerHTML = "Módosítások mentése"
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