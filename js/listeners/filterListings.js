import { userListingsContainer, token, listingsParam } from "../variables/const.js";
import { profileActiveListingsUrl } from "../api/urls.js";
import { renderHtmlForListings } from "../renders/renderListings.js";
import { getProfileListings } from "../handlers/userListings.js";

export function renderActiveProfileListings() {
    if(listingsParam) {
        getActiveProfileListings();
    } else {
        getProfileListings();
    }
}

async function getActiveProfileListings() {
    try {
        const userData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify()
        }
        const response = await fetch(profileActiveListingsUrl, userData);
        const result = await response.json();

        renderHtmlForListings(result, userListingsContainer);

    } catch (error) {
        console.log(error);
    }
};