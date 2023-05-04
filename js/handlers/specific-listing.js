import { listingItemUrl } from "../api/urls.js";
import { listingContainer, token } from "../variables/const.js";

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
        console.log(result);
        createHtmlForSpecificListing(result);

    } catch (error) {
        console.log(error);
    }
}

function createHtmlForSpecificListing(listing) {
    const { title, description, media, seller, _count } = listing;
    listingContainer.innerHTML = `
    <p class="mb-0"><img src="${seller.avatar}" class="img-thumbnail p-0 me-2">${seller.name}</p>
    <img src="${media[0]}" alt="Image for ${title} listing" class="img-fluid">
    <h1>${title}</h1>
            <p class="pt-2">${description}</p>
            <div class="row d-flex mt-5">
                <div class="col-8">
                    <h3>Current bid:</h3>
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <h3>${_count.bids}</h3>
                </div>
            </div>`
}