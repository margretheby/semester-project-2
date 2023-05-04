import { listingItemUrl } from "../api/urls.js";
import { listingContainer, token, updateDescription, updateTitle, updateMedia, editingTools, username } from "../variables/const.js";

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
    const { title, description, media, seller, bids, endsAt } = listing;
    if(media.length === 0) {
        listingContainer.innerHTML = `
        <p class="mb-0"><a href="profile.html?username=${seller.name}" class="nav-link"><img src="${seller.avatar}" class="img-thumbnail p-0 me-2">${seller.name}</p></a>
        <h1>${title}</h1>
                <p class="pt-2">${description}</p>
                <div class="row d-flex mt-5">
                    <div class="col-8">
                        <h3>Current bid:</h3>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <h3>${bids[0].amount}</h3>
                    </div>
                </div>`
    } else {
        listingContainer.innerHTML = `
        <p class="mb-0"><a href="profile.html?username=${seller.name}" class="nav-link"><img src="${seller.avatar}" class="img-thumbnail p-0 me-2">${seller.name}</p></a>
        <img src="${media[0]}" alt="Image for ${title} listing" class="img-fluid">
        <h1>${title}</h1>
                <p class="pt-2">${description}</p>
                <div class="row d-flex mt-5">
                    <div class="col-8">
                        <h3>Current bid:</h3>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <h3>${bids[0].amount}</h3>
                    </div>
                </div>`
        }

    updateTitle.value = title;
    updateDescription.value = description;
    updateMedia.value = media;

    matchSellerWithLoggedInUser(username, seller.name);
}

function matchSellerWithLoggedInUser(username, seller) {
    if (username !== seller) {
        editingTools.style.display = "none"; 
    }
}