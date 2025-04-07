
import {
    toggle_settlDropdown, init_settlInput, getAllQueryParams, setAllQueryParams, setQueryParam, getQueryParam, 
    removeAllQueryParams, add_firstSettlement, add_settlement, api, formatNum, show_pageSelector, hide_pageSelector,
    get_categories
} from "$lib/Scripts/functions.js";


export function fill_queryParams_fromInputs (shopMode = false){
                
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
            setQueryParam("page", sessionStorage["currentPage"])

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

    if (args[0] && args[0] == true) {
        err.style.color = "rgb(64, 108, 78)"
        err.style.marginTop = "-15px"
    }
    else {
        err.style.color = "rgb(156, 30, 30)"
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

    if (getQueryParam("page")) {
        let page = getQueryParam("page");
        if (page >= 1) {
            sessionStorage["currentPage"] = getQueryParam("page")
        }
        else {
            sessionStorage["currentPage"] = "1"
        }

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
        // Fill from LocalStorage:

        let cs = JSON.parse(localStorage["chosenSettlements"] ?? "{}")

        Object.keys(cs).forEach(key=>{
            
            setTimeout(() => {
                add_settlement(key, cs[key], false, true)

            }, 50);

        })

    
    }
}

export function searchButton_pressed () {
    setQueryParam("page", "1");

    setTimeout(() => {
        window.location.reload();
    }, 50);
}
