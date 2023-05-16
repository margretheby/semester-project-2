import { registrerUrl } from "../api/urls.js";
import { registrerForm, registrerSuccessMessage } from "../variables/const.js"

export function setRegistrerUserListener() {
    registrerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const registrerForm = event.target;
        const formData = new FormData(registrerForm);
        const userData = Object.fromEntries(formData.entries());

        registrerUser(userData);
    })
}

/**
 * Registrers new user
 * @param { object } user The registrered user data that is sent to the API.
 */
async function registrerUser(user) {
    try {
        const userData = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        };

        const response = await fetch(registrerUrl, userData);
        const result = await response.json();

        if(result.statusCode !== 400) {
            registrerSuccessMessage.innerText = "Success! Your account has been registered."
        } else {
            registrerSuccessMessage.innerText = "Ooobs! Seems like something went wrong, please try again."
        } 
    } catch (error) {
        console.log(error);
    }
}