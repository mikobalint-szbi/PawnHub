export function close_product(){
    let popup = document.getElementById("productPopup")
    document.getElementById("body").style.display = "flex"
    popup.style.maxHeight = "unset"
    popup.style.margin = "0"

    popup.close()
}

export function save_product(){
    let popup = document.getElementById("productPopup")
    document.getElementById("body").style.display = "flex"
    popup.style.maxHeight = "unset"
    popup.style.margin = "0"

    popup.close()
}

export function open_product(create){

    if (create){
        document.getElementById("submitText").innerHTML = "Mentés"
        
    }
    else{
        document.getElementById("submitText").innerHTML = "Módosítások mentése"
    }


    let popup = document.getElementById("productPopup")
    

    if (window.innerWidth < 596){
        document.getElementById("body").style.display = "none"
        popup.style.margin = "30px 0"
        document.getElementById("marginBottom").style.height = "25px"

        popup.show()
    }
    else{
        popup.style.maxHeight = "90vh"
        document.getElementById("marginBottom").style.height = "0"
        popup.showModal()
    }


    document.getElementById("p-name").focus()




}