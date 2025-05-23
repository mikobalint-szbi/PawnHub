
import {apiUrl} from "$lib/Scripts/variables.js";
import {regex} from "$lib/Scripts/variables.js";
import {open_popup, close_popup} from "$lib/Scripts/popup.js";
import { json } from "@sveltejs/kit";
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';
import { products_toChoose, productList_forNewLoan, customer_forNewLoan, customers_toChoose } from '@/stores/global.js';



export function getNum(str){
    return Number(str.match(/[\d.]+/g)?.join('') || '')
}

export function logout () {
    localStorage.clear()
    location.assign("/")
}

export function getAllQueryParams() {
    const url = new URL(window.location.href); // Read current URL
    const params = Object.fromEntries(url.searchParams.entries()); // Convert query params to an object
    return params;
}
export function setAllQueryParams(params) {
    const url = new URL(window.location.href); // Read current URL

    // Update the query parameters with the object passed
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value); // Set or update the parameter
    });

    // Update the URL without reloading the page, using SvelteKit's `goto`
    goto(url.toString(), { replaceState: true });
}
export function setQueryParam(key, value) {
    const url = new URL(window.location.href);

    if (value) {
        url.searchParams.set(key, value);
    } 
    else {
        url.searchParams.delete(key);
    }

    goto(url.toString(), { replaceState: false });
}
export function getQueryParam(key) {
    let value = null;
    page.subscribe(($page) => {
        value = $page.url.searchParams.get(key);
    })();
    return value
}
export function removeAllQueryParams(exceptSettlements = false) {

    let settlements = getQueryParam("settlements") ?? ""

    const url = new URL(window.location.href);
    url.search = '';  // Clear query parameters
    goto(url.toString(), { replaceState: true });

    setTimeout(() => {
        setQueryParam("settlements", settlements)
    }, 50);

}

export async function api (method, path, body = null) {

    const url = `${apiUrl}${path}`;

    // Set up the request options
    const options = {
        method: method, // The HTTP method (GET, POST, PUT, DELETE, etc.)
        headers: {
            'Content-Type': 'application/json', // Set content type to JSON
        }
    };

    const token = localStorage.getItem('auth_token');
    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    // If the method is POST, PUT, or PATCH, we add the body
    if (body) {
        options.body = JSON.stringify(body); // Convert body to JSON string
    }

    // options.credentials = 'include'

    try {
        const response = await fetch(url, options);

        // Check if the response is successful
        if (!response.ok) {
            // throw new Error(`Error: ${response.statusText}`);
        }

        // Parse and return the response JSON
        let data = await response.text();

        try {
            data = JSON.parse(data);
            return data;
        }
        catch {
            console.log("Error parsing JSON:")
            console.log(data)
            return null;
        }

    } catch (error) {
        console.error('Request failed:', error);
        return null;
    }
};

export function formatPhone(e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    // Count the number of digits only
    const digitCount = value.length;

    // If starts with "06", replace with "+36 "
    if (value.startsWith("06")) {
        value = "+36 " + value.slice(2);
    } else if (value.startsWith("36")) {
        value = "+36 " + value.slice(2);
    } else if (value.startsWith("0")) {
        value = "+" + value.slice(1);
    } else if (!value.startsWith("+")) {
        value = "+" + value;
    }

    // Format based on known patterns
    if (value.startsWith("+36")) {
        // Hungary: +36 1 XXX XXXX (Budapest) or +36 XX XXX XXXX (mobile)
        value = value.replace(/^(\+36) ?(1|[2-9]\d) ?(\d{3}) ?(\d{4})?$/, function (match, g1, g2, g3, g4) {
            return [g1, g2, g3, g4].filter(Boolean).join(" ");
        });
    } else if (value.startsWith("+1")) {
        // North America: +1 XXX XXX XXXX
        value = value.replace(/^(\+1) ?(\d{3}) ?(\d{3}) ?(\d{4})?$/, function (match, g1, g2, g3, g4) {
            return [g1, g2, g3, g4].filter(Boolean).join(" ");
        });
    } else if (value.startsWith("+44")) {
        // UK: +44 XX XXXX XXXX
        value = value.replace(/^(\+44) ?(\d{2,4}) ?(\d{3,4}) ?(\d{3,4})?$/, function (match, g1, g2, g3, g4) {
            return [g1, g2, g3, g4].filter(Boolean).join(" ");
        });
    } else if (value.startsWith("+49")) {
        // Germany: +49 XXX XXX XXXX
        value = value.replace(/^(\+49) ?(\d{2,4}) ?(\d{3,4}) ?(\d{3,4})?$/, function (match, g1, g2, g3, g4) {
            return [g1, g2, g3, g4].filter(Boolean).join(" ");
        });
    } else {
        // General case for +XX X XXX XXXX or +XX XX XXX XXXX
        value = value.replace(/^(\+\d{1,3}) ?(\d{1,4}) ?(\d{3}) ?(\d{3,4})?$/, function (match, g1, g2, g3, g4) {
            return [g1, g2, g3, g4].filter(Boolean).join(" ");
        });
    }

    // Enforce max digit length of 15 digits
    if (digitCount > 15) {
        value = value.slice(0, 15);
    }

    // Update input field
    e.target.value = value.trim();
    
}

export function isOver18(birthdayString) {
    const today = new Date();
    const birthDate = new Date(birthdayString);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    
    // Adjust age if the birthday hasn't occurred yet this year
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
        age--;
    }
    
    return age >= 18;
}

export function isDateValid(dateString) {

    return Number(dateString.split('-')[0]) < 3000;
}

export function isFuture(dateString) {
    const today = new Date();
    const inputDate = new Date(dateString);
    
    // Set time to 00:00:00 for accurate date comparison (ignores time)
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    
    return inputDate >= today;
}

export function registError (text, ...args) {
    let er = document.getElementById("registError")
    er.innerHTML = text
    er.style.display = "block"

    if (args[0] && args[0] == true) {
        er.style.color = "rgb(64, 108, 78)"
    }
    else {
        er.style.color = "rgb(156, 30, 30)"
    }
}

export function validate_customer(data){
    
    let good = true;

    if (!data.name || !data.birthday || !data.idCardNum || !data.idCardExp || !data.email || !data.username || !data.password) {
        registError("Kérjük, az összes csillaggal jelölt mezőt töltse ki.")
        good = false
    }
    else if (!regex.custName.test(data.name)){
        registError("Kérjük, adja meg a vezetéknevét és mindegyik keresztnevét.<br>(Nagybetűvel kell őket kezdenie.)")
        good = false
    }
    else if (!isOver18(data.birthday)){
        registError("Az oldalra 18. életévét be nem töltött személy nem regisztrálhat.")
        good = false
    }
    else if (!isDateValid(data.birthday)){
        registError("Hibás születési dátum!")
        good = false
    }
    else if (!isFuture(data.idCardExp)){
        registError("Az ön személyi igazolványa lejárt!")
        good = false
    }
    else if (!isDateValid(data.idCardExp)){
        registError("Hibás személyiigazolvány-lejárati dátum!")
        good = false
    }
    else if (!regex.email.test(data.email)){
        registError("Az megadott e-mail-cím formátuma hibás!")
        good = false
    }
    else if (data.mobile.length > 1 && data.mobile.length < 4){
        registError("Hibás telefonszám!")
        good = false
    }
    else if (data.iban && !regex.iban.test(data.iban)){
        registError("Hibás IBAN-számlaszám-formátum!")
        good = false
    }
    else if (data.username.length > 25 || data.username.length < 3){
        registError("A felhasználónévnek legalább 3 és legfeljebb 25 karakter hosszúnak kell lennie.")
        good = false
    }
    else if (!regex.username.test(data.username)){
        registError("A felhasználónév csak a latin ábécé kisbetűit, nagybetűit, számjegyeket, illetve kötőjelet, pontot vagy alsóvonalat tartalmazhat.")
        good = false
    }
    else if (document.getElementById("newPassword2").value != data.password){
        registError("A jelszavak nem egyeznek!")
        good = false
    }
    else if (data.password.length < 8){
        registError("A jelszónak legalább 8 karakter hosszúnak kell lennie.")
        good = false
    }

    return good;

}

export function validate_shop(data, settingsMode = false){
    
    let good = true;

    if (data.mobile == "+") {
        data.mobile = ""
    }

    if (!data.name || !data.taxId || !data.email || !data.username || !data.password || !data.mobile || !data.password || !data.address || !document.getElementById("settlInput").value) {
        registError("Kérjük, az összes csillaggal jelölt mezőt töltse ki.")
        good = false
    }
    else if (data.name.length < 5){
        registError("A cég nevének legalább 5 karakter hosszúnak kell lennie!")
        good = false
    }
    else if (data.name.length > 100){
        registError("A cég neve nem lehet hosszabb 100 karakternél!")
        good = false
    }
    else if (!regex.taxId.test(data.taxId)){
        registError("Az megadott adószám formátuma hibás!")
        good = false
    }
    else if (data.estYear > new Date().getFullYear()){
        registError("Az alapítási év nem lehet jövőbeli!")
        good = false
    }
    else if (!regex.email.test(data.email)){
        registError("Az megadott e-mail-cím formátuma hibás!")
        good = false
    }
    else if (data.mobile.length < 4){
        registError("Hibás telefonszám!")
        good = false
    }
    else if (!data.settlement_id) {

        registError("A település nevét kérjük a lenyíló listából válassza ki!")
        good = false
    }
    else if (data.website && !regex.website.test(data.website)){
        registError("A megadott weboldal címének hibás a formátuma!")
        good = false
    }
    else if (data.iban && !regex.iban.test(data.iban)){
        registError("Hibás IBAN-számlaszám-formátum!")
        good = false
    }
    else if (data.username.length > 25 || data.username.length < 3){
        registError("A felhasználónévnek legalább 3 és legfeljebb 25 karakter hosszúnak kell lennie.")
        good = false
    }
    else if (!regex.username.test(data.username)){
        registError("A felhasználónév csak a latin ábécé kisbetűit, nagybetűit, számjegyeket, illetve kötőjelet, pontot vagy alsóvonalat tartalmazhat.")
        good = false
    }
    else if (document.getElementById("newPassword2").value != data.password){
        registError("A jelszavak nem egyeznek!")
        good = false
    }
    else if (data.password.length < 8){
        registError("A jelszónak legalább 8 karakter hosszúnak kell lennie.")
        good = false
    }

    return good;

}

export function validate_reply(reply) {

    if (reply){

        if (reply.errors){

            let taken = {
                username: (reply.errors.username && reply.errors.username == "The username has already been taken."),
                email: (reply.errors.email && reply.errors.email == "The email has already been taken.")
            }

            if (taken.username && taken.email){
                registError("A megadott felhasználónév és e-mail-cím már foglalt.<br>Ha van már PawnHub-fiókja, kérjük, jelentkezzen be.")
            }
            else if (taken.username) {
                registError("A megadott felhasználónév már foglalt.<br>Kérjük, válasszon másik felhasználónevet.")
            }
            else if (taken.email) {
                registError("A megadott e-mail-cím már foglalt.<br>Ha van már PawnHub-fiókja, kérjük, jelentkezzen be.")

            }
            else {
                registError("Ismeretlen szerverhiba történt.")
                console.log(reply.errors)
            }

        }
        else {
            open_popup("messageOK","A regisztráció megtörtént! <br> Kérjük, jelentkezzen be vadonatúj PawnHub-fiókjába.",()=>{location.assign("/")})

        }
    }
    else {
        registError("Nem sikerült csatlakozni a szerverhez.")
    }
}

export function add_firstSettlement() {
    
    if (sessionStorage["settlements_firstResult"]) {
        let firstResult = JSON.parse(sessionStorage["settlements_firstResult"])
        let name = Object.keys(firstResult)[0]
        
        add_settlement(name, firstResult[name])

        sessionStorage.removeItem("settlements_firstResult")

        document.getElementById("dropdownContent").style.display = "none"

        setTimeout(() => {
            document.getElementById("settlInput").focus()
        }, 50);
    }
}
export function complete_settlementName() {
    if (sessionStorage["settlements_firstResult"]) {
        let firstResult = JSON.parse(sessionStorage["settlements_firstResult"])
        let name = Object.keys(firstResult)[0]

        document.getElementById("settlInput").value = name
    }
}

export function remove_settlement(name, code) {


    // Query Params:

    let param = getQueryParam("settlements") ?? ""

    param = param.replaceAll(`${code}`,"").replaceAll("__","_")
    
    if (param[0] == "_")
        param = param.slice(1)
    if (param.charAt(param.length - 1) == "_")
        param = param.slice(0, -1);


    setQueryParam("settlements", param)

    // LocalStorage:

    let cs = JSON.parse(localStorage["chosenSettlements"] ?? "{}")
    delete cs[name]

    if (Object.keys(cs).length == 0){
        document.getElementById("selectedSettlements").style.display = "none"
    }

    localStorage["chosenSettlements"] = JSON.stringify(cs)

    // User Interface:

    let sender = document.getElementById("settlTag_" + code)

    if (sender)
        sender.remove()

    
}

export function add_settlement (name, code, skipParams = false, skipLocStorage = false ) {
    
    // Query Params: 

    if (!skipParams){

    let param = getQueryParam("settlements") ?? ""

    if (param != "") {
        if (!param.split("_").includes(`${code}`)) {
            param += `_${code}`
        }
    }
    else {
        param = code
    }
    setQueryParam("settlements", param)

    }

    // LocalStorage:

    let cs = JSON.parse(localStorage["chosenSettlements"] ?? "{}")
    let skip = Object.keys(cs).includes(name)

    if (!skipLocStorage && !skip) {
        cs[name] = code
        localStorage["chosenSettlements"] = JSON.stringify(cs)
    }

    // User Interface:


    if (!skip){
        
        let ss = document.getElementById("selectedSettlements")

        const settlTag = document.createElement("div");
        settlTag.className = "settlTag";
        settlTag.id = "settlTag_" + code;
        settlTag.title = "Kattintson a törléshez!";
        settlTag.onclick = () => remove_settlement(name, code);

        const namePara = document.createElement("p");
        namePara.className = "name";
        namePara.textContent = name;

        const delButton = document.createElement("button");
        delButton.className = "delButton";
        

        const img = document.createElement("img");
        img.src = "IMG/Global/close.png";
        img.alt = "Bezárás";

        delButton.appendChild(img);
        settlTag.appendChild(namePara);
        settlTag.appendChild(delButton);
        ss.appendChild(settlTag);

    }

    
    // Etc 
    document.getElementById("settlInput").value = ""
    
    if (document.getElementById("selectedSettlements"))
        document.getElementById("selectedSettlements").style.display = "flex"
    
}



export async function toggle_settlDropdown(multiple_=false){

    if (window.location.href.includes("/settings") || window.location.href.includes("/register")) {
        multiple_ = false
    }
    else {
        multiple_ = true
    }


    console.log(multiple_)
    let dropdown = document.getElementById("dropdownContent")
    let input = document.getElementById("settlInput")
    dropdown.style.width = input.offsetWidth + "px"

    dropdown.innerHTML = ""
    localStorage.removeItem("chosenSettlement")

    if (input.value != "" && input.value.length >= 2){ 

        let reply;

        try {

            if (regex.isFirstCharDigit.test(input.value)){
                reply = await api('GET', `/settlements?postCode=${input.value}`);
    
            }
            else {
                reply = await api('GET', `/settlements?searchKey=${input.value}`);
            }
        }
        catch {
            reply = []
        }


        dropdown.innerHTML = ""

        let l = {}

        if (reply) {

            reply.forEach((e)=>{
                if (!l.hasOwnProperty(e.name)){
                    l[e.name] = e.id

                }
                else {
                    l[e.name] += "-" + e.id
                }
    
            })
            if (Object.keys(l).length >= 1) {

                let settlements_firstResult = {}
                let firstKey = Object.keys(l)[0]
                settlements_firstResult[firstKey] = l[firstKey]


                sessionStorage["settlements_firstResult"] = JSON.stringify(settlements_firstResult)

                for (const key in l) {
                    let link = document.createElement("a")
                    link.id = l[key]
                    link.text = key
                    link.onclick = () =>{
                        if (!multiple_){
                            localStorage["chosenSettlement"] = l[key]
                            input.value = key

                        }
                        else {
                            add_settlement(key, l[key])

                        }
                        sessionStorage.removeItem("settlements_firstResult")

                        dropdown.style.display = "none"

                        setTimeout(() => {
                            input.focus()
                        }, 50);

                    }
                    dropdown.appendChild(link)
                }
            }
            else {
                let link = document.createElement("a")
                link.id = "empty"
                link.innerHTML = "Nincs találat"
                dropdown.appendChild(link)

            }

        }




        dropdown.style.display = "block"

            // API-kérés:
            // Lekéri az összeset, ami a megadott két betűvel kezdődik,
            // azután, amíg az első két betű nem változik, a JS maga végzi a szűrést a harmadik betűtől fogva
        

    }
    else {
        dropdown.innerHTML = ""
        dropdown.style.display = "none"
    }

}


export function init_settlInput (multiple=false) {
    let settlInput = document.getElementById("settlInput")

    settlInput.addEventListener('keyup', ()=> toggle_settlDropdown(multiple))
    
    settlInput.addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {
            add_firstSettlement()
        }
    });

    settlInput.addEventListener('keydown', function (e) {

        if (e.key === 'Tab') {
            setTimeout(() => {
                e.target.focus()
                complete_settlementName()
            }, 5);
        }
    });


    //document.onkeypress = toggle_settlDropdown

    window.addEventListener("resize", ()=> {

        if (document.getElementById("dropdownContent") != null){

            document.getElementById("dropdownContent").style.width = document.getElementById("settlInput").offsetWidth + "px"
        }
    })


}

export function cancel_profilePic(isCustomer, settingsMode = false) {

    localStorage.removeItem("newProfilePic")
    
    if (!settingsMode) {
        document.getElementById("profile-picture").style.backgroundImage = `url('IMG/Global/${isCustomer ? 'no-profile-image.png' : 'no-shop-image.png'}')`

    }
    else {

        if (localStorage["user"]) {
            let user = JSON.parse(localStorage["user"])

            if (user.img) {
                document.getElementById("profile-picture").style.backgroundImage = `url('data:image/png;base64,${user.img}')`;
            }
        }

        document.getElementById("profPicButton4").style.display = "none"
        document.getElementById("profPicButton3").style.display = "none"
        document.getElementById("profPicButton2").setAttribute('style', 'display:flex !important');
        document.getElementById("profPicButton1").setAttribute('style', 'display:flex !important');
    }

}

export function settingsError(text, id, ...args) {
    let er = document.getElementById(id)
    er.innerHTML = text
    er.style.display = "block"

    if (args[0] && args[0] == true) {
        er.style.color = "rgb(64, 108, 78)"
    }
    else {
        er.style.color = "rgb(156, 30, 30)"
    }
}

export function sleep(n) {
    return new Promise(resolve => setTimeout(resolve, n * 1000));
}

export async function get_profilePic(settingsMode = false) {

    localStorage.removeItem("newProfilePic")
    let error = false

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*"; // Accepts only image files

    input.addEventListener("change", function (event) {
        const file = event.target.files[0]; // Get the selected file
        if (!file) return;

        if (file.size > 3 * 1024 * 1024) {
            open_popup("messageOK","A feltöltött kép mérete nem lehet nagyobb, mint 3 MB.",()=>{close_popup("messageOK")})
            error = true
            return; // Exit function if the file is too large
        }

        const reader = new FileReader();
        reader.readAsDataURL(file); // Convert file to Base64

        reader.onload = function () {
            document.getElementById("profile-picture").style.backgroundImage = `url(${reader.result})`
            localStorage["newProfilePic"] = reader.result.split("base64,")[1]
            
        };

        reader.onerror = function (error) {
            console.error("Error converting file to Base64:", error);
        };
    });

    input.click(); // Open file dialog

    if (settingsMode) {
        let id = "settingsError-profilePic"

        if (!error) {
            while (!localStorage["newProfilePic"]) {
                await sleep(0.2)
            }

            //settingsError("Előnézet", id, true)
            document.getElementById("profPicButton1").style.display = "none"
            document.getElementById("profPicButton2").style.display = "none"
            document.getElementById("profPicButton3").setAttribute('style', 'display:flex !important');
            document.getElementById("profPicButton4").setAttribute('style', 'display:flex !important');


        }


    }

}

export function formatNum(num) {
    return num.toString().replace(regex.formatNum, " ");
}


export function show_pageSelector() {
    document.getElementById("pagesContainer").setAttribute('style', 'display:flex !important');
    document.getElementById("pagesContainer").setAttribute('style', 'visibility: visible !important');

}

export function hide_pageSelector() {
    document.getElementById("pagesContainer").setAttribute('style', 'display:none !important');
    document.getElementById("pagesContainer").setAttribute('style', 'visibility: hidden !important');

}

export async function get_categories() {
    let categories

    if (!localStorage["categories"]) {
        categories = await api('GET', "/types");

        if (categories) {
            let dict = {}

            categories.forEach(e=> {
                dict[e.id] = e.name
            })

            localStorage["categories"] = JSON.stringify(dict)
            categories = dict
        }
        else {
            searchError("Ismeretlen szerverhiba történt.")
        }
        

        //console.log(categories)
    }
    else {
        categories = JSON.parse(localStorage["categories"])
    }

    return categories
}

export function dateDisplay(text) {

    return text.replaceAll("-",'.') + "."

}

export function timeToDate(text){

    text = text.split(" ")[0]
    return dateDisplay(text)
}

export function timeToDateValue(text){

    return text.split(" ")[0]
}

export function dateTodayValue(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function roundForint(price) {
    return Math.round(price / 5) * 5
}

export function isExpired(dateStr) {
    const inputDate = new Date(dateStr);
    const today = new Date();
  
    // Normalize both dates to midnight to compare only the date part
    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
  
    return inputDate < today;
}

export async function get_allProducts () {
        
    let m = document.getElementById("pcMessage")

    if (m) {
        m.style.fontSize = "20px"
        m.innerHTML = "Adatok lekérése folyamatban..."
        m.style.color = "rgb(64, 108, 78)"
    }

    let reply = await api('GET', "/shopAllItems");


    if (reply) {

        const productList = get(productList_forNewLoan);

        for (let i = 0; i < reply.length; i++) {

            if (productList.some(obj => obj.id == reply[i].id)){
                reply[i].selected = true

                // Put the element to the beginning:
                const [item] = reply.splice(i, 1);
                reply.unshift(item);
            }
            else {
                reply[i].selected = false
            }

        }

        products_toChoose.set(reply) 

        if (reply.length == 0) {

            
            if (m) {
                m.innerHTML = "Nincs találat!"
                m.style.fontSize = "27px"
            }
        }

        // console.log(reply)

    }
    else {
        m.innerHTML = "Ismeretlen szerverhiba történt!"
        m.style.fontSize = "24px"
        m.style.color = "rgb(156, 30, 30)"

    }

}

export async function get_allCustomers () {
        
    let m = document.getElementById("ccMessage")

    if (m) {
        m.style.fontSize = "20px"
        m.innerHTML = "Adatok lekérése folyamatban..."
        m.style.color = "rgb(64, 108, 78)"
    }

    let reply = await api('GET', "/customers");


    if (reply) {

        const customer = get(customer_forNewLoan);

        if (customer) {

            for (let i = 0; i < reply.length; i++) {

                if (reply[i].id == customer.id){
                    reply[i].selected = true
    
                    // Put the element to the beginning:
                    const [item] = reply.splice(i, 1);
                    reply.unshift(item);
    
                    break
                }
                else {
                    reply[i].selected = false
                }
    
            }

        }

        customers_toChoose.set(reply) 

        if (reply.length == 0) {

            
            if (m) {
                m.innerHTML = "Nincs találat!"
                m.style.fontSize = "27px"
            }
        }

    }
    else {
        m.innerHTML = "Ismeretlen szerverhiba történt!"
        m.style.fontSize = "24px"
        m.style.color = "rgb(156, 30, 30)"
    }

}