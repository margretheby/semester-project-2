import { listingsContainer, searchDesktop, searchMobile, loading } from "../variables/const.js";

export function searchListings(listings) {
    searchDesktop.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();
        const filteredSearch = listings.filter(function (listings) {
            if (listings.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });
        displaySearchResult(filteredSearch);
    }
    searchMobile.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();
        const filteredSearch = listings.filter(function (listings) {
            if (listings.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });
        displaySearchResult(filteredSearch);
    } 
}


function displaySearchResult(result) {
    listingsContainer.innerHTML = "";
    result.forEach(function (result) {
        const { media, title, _count, id } = result;
        loading.innerHTML = "";
        if(media.length === 0) {
            listingsContainer.innerHTML += `<div class="col-5 my-3 ms-2 col-md-3 col-lg-2 border pt-2">
                                            <a href="listing-item.html?id=${id}">
                                            <div class="row d-flex mt-2">
                                                <div class="col-8">
                                                    <h3>${title}</h3>
                                                </div>
                                                <div class="col-4 d-flex justify-content-end">
                                                    <h3>Bids: ${_count.bids}</h3>
                                                </div>
                                            </div>
                                            </a>
                                        </div>`
        } else {
        listingsContainer.innerHTML += `<div class="col-5 my-3 ms-2 col-md-3 col-lg-2 border">
                                            <a href="listing-item.html?id=${id}">
                                            <div class="mt-3">
                                                <img src="${media}" alt="Image" class="img-fluid listing-image">
                                            </div>
                                            <div class="row d-flex mt-2">
                                                <div class="col-8">
                                                    <h3>${title}</h3>
                                                </div>
                                                <div class="col-4 d-flex justify-content-end">
                                                    <h3>Bids: ${_count.bids}</h3>
                                                </div>
                                            </div>
                                            </a>
                                        </div>`
        }
    })
    
    
}