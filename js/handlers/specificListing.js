import { listingItemUrl } from "../api/urls.js";
import {  token } from "../variables/const.js";
import { renderHtmlForSpecificListing } from "../renders/renderSpecificListing.js";

export async function fetchSpecificListing() {
    try {
        const listingData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify()
        }

        const response = await fetch(listingItemUrl, listingData);
        const result = await response.json();
        renderHtmlForSpecificListing(result);

    } catch (error) {
        console.log(error);
    }
}