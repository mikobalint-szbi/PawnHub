export function close_product(){
    let popup = document.getElementById("productPopup")
    popup.close()
}

export function save_product(){
    let popup = document.getElementById("productPopup")
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
    popup.showModal()
    document.getElementById("p-name").focus()




}