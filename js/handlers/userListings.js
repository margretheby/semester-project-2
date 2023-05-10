import { userListingsContainer, token, loading } from "../variables/const.js";
import { profileListingsUrl } from "../api/urls.js";
import { renderHtmlForListing } from "../renders/renderUserListings.js";

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

        renderHtmlForListing(result);

    } catch (error) {
        console.log(error);
    }
};