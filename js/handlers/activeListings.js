import { listingsUrl } from "../api/urls.js";
import { listingsContainer, loading } from "../variables/const.js";

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
        createHtmlForListings(result);

    } catch (error) {
        console.log(error);
    }
}

function createHtmlForListings(listing) {
    for (let i = 0; i < listing.length; i++) {
        const { media, title, _count } = listing[i];
        loading.innerHTML = "";
        listingsContainer.innerHTML += `<div class="col-5 my-3 ms-2 col-md-3 col-lg-2 border">
                                            <a href="listing-item.html">
                                            <div class="mt-3">
                                                <img src="${media}" alt="Image" class="img-fluid listing-image">
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