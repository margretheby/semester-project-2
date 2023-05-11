import { listingsUrl } from "../api/urls.js";
import { listingsContainer } from "../variables/const.js";
import { searchListings } from "../listeners/searchItems.js"
import { renderHtmlForListings } from "../renders/renderListings.js";

export async function fetchListings() {
    try {
        const listingsData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(listingsUrl, listingsData)
        const result = await response.json();

        renderHtmlForListings(result, listingsContainer);
        searchListings(result);

    } catch (error) {
        console.log(error);
    }
}