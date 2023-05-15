import { userListingsContainer, token } from "../variables/const.js";
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
        console.log(result);
        console.log(profileListingsUrl)

        renderHtmlForListings(result, userListingsContainer);

    } catch (error) {
        console.log(error);
    }
};