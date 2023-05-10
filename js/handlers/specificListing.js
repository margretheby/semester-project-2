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
        createHtmlForSpecificListing(result);

    } catch (error) {
        console.log(error);
    }
}

function createHtmlForSpecificListing(listing) {
    const { title, description, media, seller, bids, endsAt } = listing;
    if (bids.length > 0) { 
        const lastBid = bids[bids.length -1].amount;
        if(media.length === 0) {
            listingContainer.innerHTML = `
                    <h1>${title}</h1>
                    <div class="row d-flex">
                        <div class="col-6">
                            <h3>Seller: </h3>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                            <a href="profile.html?username=${seller.name}" class="nav-link">${seller.name}</a> 
                        </div>
                    </div>
                    <p class="pt-2">${description}</p>
                    <div class="row d-flex mt-5">
                        <div class="col-8">
                            <h3>Current bid:</h3>
                        </div>
                        <div class="col-4 d-flex justify-content-end">
                            <h3>$ ${lastBid}</h3>
                        </div>
                    </div>`
        } else {
            listingContainer.innerHTML = `
            <h1>${title}</h1>
            <div class="row d-flex">
                <div class="col-6">
                    <h3>Seller: </h3>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <a href="profile.html?username=${seller.name}" class="nav-link">${seller.name}</a> 
                </div>
            </div>
            <div class="listing-images"></div>
                    <p class="pt-2">${description}</p>
                    <div class="row d-flex mt-5">
                        <div class="col-8">
                            <h3>Current bid:</h3>
                        </div>
                        <div class="col-4 d-flex justify-content-end">
                            <h3>$ ${lastBid}</h3>
                        </div>
                    </div>
                    `
                    for(let i = 0; i < media.length; i++) {
                        const listingImage = document.querySelector(".listing-images")
                        listingImage.innerHTML += `<img src="${media[i]}" alt="Image for ${title} listing" class="img-fluid my-1">`
                    }
            }

     } else {
    if(media.length === 0) {
        listingContainer.innerHTML = `
                <h1>${title}</h1>
                <div class="row d-flex">
                    <div class="col-6">
                        <h3>Seller: </h3>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <a href="profile.html?username=${seller.name}" class="nav-link">${seller.name}</a> 
                    </div>
                </div>
                <p class="pt-2">${description}</p>
                <div class="row d-flex mt-5">
                    <div class="col-8">
                        <h3>Current bid:</h3>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <h3>$ ${bids}</h3>
                    </div>
                </div>`
    } else {
        listingContainer.innerHTML = `
        <h1>${title}</h1>
        <div class="row d-flex">
            <div class="col-6">
                <h3>Seller: </h3>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <a href="profile.html?username=${seller.name}" class="nav-link">${seller.name}</a> 
            </div>
        </div>
        <div class="listing-images"></div>
                <p class="pt-2">${description}</p>
                <div class="row d-flex mt-5">
                    <div class="col-8">
                        <h3>Current bid:</h3>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <h3>$ ${bids}</h3>
                    </div>
                </div>
                `
                for(let i = 0; i < media.length; i++) {
                    const listingImage = document.querySelector(".listing-images")
                    listingImage.innerHTML += `<img src="${media[i]}" alt="Image for ${title} listing" class="img-fluid my-1">`
                }
        }
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