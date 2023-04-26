import { registrerUrl } from "../api/urls.js";
import { registrerForm } from "../variables/const.js"

export function setRegistrerUserListener() {
    registrerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const registrerForm = event.target;
        const formData = new FormData(registrerForm);
        const userData = Object.fromEntries(formData.entries());

        registrerUser(userData);
    })
}

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

        console.log(result)
    } catch (error) {
        console.log(error);
    }
}