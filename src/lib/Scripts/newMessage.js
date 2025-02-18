export function open_newMessage(receiver,topic,content,customerRequest,overWrite){

    let newMessage = document.querySelector(".message.new")

    if (newMessage.style.display == "" || newMessage.style.display == "none" || overWrite){

        newMessage.style.display = "flex"
        document.querySelector("input#receiver").value = receiver
        document.querySelector("input#topic").value = topic
        document.querySelector("textarea#messageBody").textContent = content
        document.querySelector("input#customerRequest").checked = customerRequest

    }

    window.scrollTo(0, 0);

}

export function close_newMessage(){

    document.querySelector(".message.new").style.display = "none"
    document.querySelector("input#receiver").value = ""
    document.querySelector("input#topic").value = ""
    document.querySelector("textarea#messageBody").textContent = ""
    document.querySelector("input#customerRequest").checked = false

}