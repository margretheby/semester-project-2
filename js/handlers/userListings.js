import { userListingsContainer, token, loading } from "../variables/const.js";
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

        createHtmlForProfileListings(result);

        

    } catch (error) {
        console.log(error);
    }
}

function createHtmlForProfileListings(listing) {
    for (let i = 0; i < listing.length; i++) {
        const { title, media, _count, id } = listing[i];
        loading.innerHTML = "";
        userListingsContainer.innerHTML += `<div class="col-5 my-3 ms-2 col-md-3 col-lg-2 border">
        <a href="listing-item.html?id=${id}">
        <div class="mt-3">
            <img src="${media[0]}" alt="Image" class="img-fluid listing-image">
        </div>
        <div class="row d-flex mt-2">
            <div class="col-8">
                <h3>${title}</h3>
            </div>
            <div class="col-4 d-flex justify-content-end">
                <h3>${_count.bids}</h3>
            </div>
        </div>
        </a>
    </div>`
    }
}