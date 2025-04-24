
import {
    toggle_settlDropdown, init_settlInput, getAllQueryParams, setAllQueryParams, setQueryParam, getQueryParam, 
    removeAllQueryParams, add_firstSettlement, add_settlement, api, formatNum, show_pageSelector, hide_pageSelector,
    get_categories
} from "$lib/Scripts/functions.js";


export function fill_queryParams_fromInputs (shopMode = false){
    console.log("aa" + document.getElementById("searchBar").value)
    if (document.getElementById("searchBar").value) {

        setTimeout(() => {
            setQueryParam("searchKey", document.getElementById("searchBar").value)
        }, 50);
    }
    if (!shopMode && document.getElementById("selectCategory").value != "0") {
        setTimeout(() => {
            setQueryParam("category", document.getElementById("selectCategory").value)
        }, 50);
    }
    if (!shopMode && document.getElementById("minPrice").value) {
        setTimeout(() => {
            setQueryParam("minPrice", document.getElementById("minPrice").value)
        }, 50);
    }
    if (!shopMode && document.getElementById("maxPrice").value) {
        setTimeout(() => {
            setQueryParam("maxPrice", document.getElementById("maxPrice").value)
        }, 50);
    }
    if (document.getElementById("selectCounty").value != "0") {
        setTimeout(() => {
            setQueryParam("holding", document.getElementById("selectCounty").value)
        }, 50);
    }
    if (sessionStorage["currentPage"]) {
        setTimeout(() => {
            if (sessionStorage["currentPage"] != 1) {
                setQueryParam("page", sessionStorage["currentPage"])
            }
            else {
                setQueryParam("page", "")

            }


        }, 50);
    }

}

export function searchError (text, ...args) {

    let mainContainer = document.getElementById("main-container")

    mainContainer.innerHTML = ""

    let err = document.createElement('p');
    err.textContent = text;
    err.id = 'searchError';
    err.className = 'error';
    err.style.display = "block"
    mainContainer.appendChild(err);

    err.style.fontSize = "17px"
    err.style.marginTop = "20px"

    if (args[0] && args[0] == true) {
        err.style.color = "rgb(64, 108, 78)"
    }
    else {
        err.style.color = "rgb(156, 30, 30)"
    }
    if (args[1]) {
        if (args[1] == "top") {
            err.style.marginTop = "-15px"
        }
        else if (args[1] == "big") {
            err.style.fontSize = "25px"
        }
        
    }
    else {

    }
    if (args[2] && args[2] == false) {
        err.style.fontSize = "25px"
    }
}



export function fill_inputs(shopMode = false) {
    if (getQueryParam("searchKey"))
        document.getElementById("searchBar").value = getQueryParam("searchKey")
    /*document.getElementById("").value = getQueryParam("holding")
    document.getElementById("").value = getQueryParam("searchIn")
    document.getElementById("").value = getQueryParam("categoryGroup")
    document.getElementById("").value = getQueryParam("page")
    document.getElementById("").value = getQueryParam("orderBy")*/
    if (!shopMode && getQueryParam("category"))
        document.getElementById("selectCategory").value = getQueryParam("category")
    if (getQueryParam("holding"))
        document.getElementById("selectCounty").value = getQueryParam("holding")
    
    if (!shopMode) {
        document.getElementById("minPrice").value = getQueryParam("minPrice")
        document.getElementById("maxPrice").value = getQueryParam("maxPrice")
    }

    let page = getQueryParam("page");

    if (page) {
        sessionStorage["currentPage"] = page
        if (page == 1){

            setTimeout(() => {
                setQueryParam("pages", "a")
            }, 50);

        }

    }
    else {
        sessionStorage["currentPage"] = "1"
    }

    

    // Settlements:

    fill_settlementTags()

}

export async function fill_settlementTags(){
    
    let settlCodes;

    if (getQueryParam("settlements")) {
        settlCodes = getQueryParam("settlements").split("_")

        localStorage["chosenSettlements"] = "{}"

        settlCodes.forEach(async (code) => {
            let id;

            if (code.includes("-")) {
                id = code.split("-")[0]
            }
            else {
                id = code
            }

            let reply = await api('GET', `/settlement/${id}`);

            if (reply && reply.name) {
            
                add_settlement(reply.name, code, true)
            
            }

        });

    }
    else {

        localStorage["chosenSettlements"] = "{}"

    }/*
        // Fill from LocalStorage:

        let cs = JSON.parse(localStorage["chosenSettlements"] ?? "{}")

        Object.keys(cs).forEach(key=>{
            
            setTimeout(() => {
                add_settlement(key, cs[key], false, true)

            }, 50);

        })

    
    }*/
}


