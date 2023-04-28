import { userListingsContainer, token } from "../variables/const.js";
import { profileListingsUrl } from "../api/urls.js";

export async function fetchProfileListings() {
    try {
        const userData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify()
        }
        const response = await fetch(profileListingsUrl, userData);
        const result = await response.json();
        console.log(result);

        

    } catch (error) {
        console.log(error);
    }
}