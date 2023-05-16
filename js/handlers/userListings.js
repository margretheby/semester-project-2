import { userListingsContainer, token, loading } from "../variables/const.js";
import { profileListingsUrl } from "../api/urls.js";
import { renderHtmlForListings } from "../renders/renderListings.js";

export async function getProfileListings() {
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

        if(result[0]) {
            renderHtmlForListings(result, userListingsContainer);
        } else {
            loading.innerHTML = "You currently have no listings.";
        }

        

    } catch (error) {
        console.log(error);
    }
};