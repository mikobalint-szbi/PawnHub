
import {apiUrl} from "$lib/Scripts/variables.js";
import {regex} from "$lib/Scripts/variables.js";
import {open_popup, close_popup} from "$lib/Scripts/popup.js";

export function getNum(str){
    return Number(str.match(/[\d.]+/g)?.join('') || '')
}

export function logout () {
    localStorage.clear()
    location.assign("/")
    console.log("heeeee")
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



export async function toggle_settlDropdown(){
        
    let dropdown = document.getElementById("dropdownContent")
    let input = document.getElementById("settlInput")
    dropdown.style.width = input.offsetWidth + "px"

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

            for (const key in l) {
                let link = document.createElement("a")
                link.id = l[key]
                link.text = key
                link.onclick = () =>{
                    localStorage["chosenSettlement"] = l[key]
                    input.value = key
                    dropdown.style.display = "none"
                }

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


export function init_settlInput () {
    document.getElementById("settlInput").addEventListener('keyup', toggle_settlDropdown)
    
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