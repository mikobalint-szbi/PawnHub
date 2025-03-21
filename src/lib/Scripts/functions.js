
import {apiUrl} from "$lib/Scripts/variables.js";
import {regex} from "$lib/Scripts/variables.js";

export function getNum(str){
    return Number(str.match(/[\d.]+/g)?.join('') || '')
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
        const data = await response.json();
        return data;

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

export function isFuture(dateString) {
    const today = new Date();
    const inputDate = new Date(dateString);
    
    // Set time to 00:00:00 for accurate date comparison (ignores time)
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    
    return inputDate >= today;
}

export function registError (text) {
    let er = document.getElementById("registError")
    er.innerHTML = text
    er.style.display = "block"
}

export function validate_customer(data, settingsMode = false){
    
    let good = true;

    if (!data.name || !data.birthday || !data.idCardNum || !data.idCardExp || !data.email || !data.username || !data.password) {
        registError("Kérjük, az összes csillaggal jelölt mezőt töltse ki.")
        good = false
    }
    else if (!regex.custName.test(data.name)){
        registError("Kérjük, adja meg a vezetéknevét és mindegyik keresztnevét.<br>Nagybetűvel kell őket kezdenie.")
        good = false
    }
    else if (!isOver18(data.birthday)){
        registError("Az oldalra 18. életévét be nem töltött személy nem regisztrálhat.")
        good = false
    }
    else if (!isFuture(data.idCardExp)){
        registError("Az ön személyi igazolványa lejárt!")
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