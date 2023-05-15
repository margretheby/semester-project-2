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

        if (media.length === 0) {
            const divContainer = document.createElement("div");
            divContainer.classList.add("col-5", "my-3", "ms-2", "col-md-3", "col-lg-2", "border", "pt-2")
            const link = document.createElement("a");
            link.href = `listing-item.html?id=${id}`;
            const divRow = document.createElement("div");
            divRow.classList.add("row", "d-flex", "mt-2");
            const divColumn = document.createElement("div");
            divColumn.classList.add("col-8");
            const titleHeading = document.createElement("h1");
            titleHeading.innerText = `${title}`;
            const divSecondColumn = document.createElement("div");
            divSecondColumn.classList.add("col-4", "d-flex", "justify-content-end");
            const bidsHeading = document.createElement("h3");
            bidsHeading.innerText = `Bids: ${_count.bids}`

            listingsContainer.append(divContainer);
            divContainer.appendChild(link);
            link.appendChild(divRow);
            divRow.appendChild(divColumn);
            divColumn.appendChild(titleHeading);
            divRow.appendChild(divSecondColumn);
            divSecondColumn.appendChild(bidsHeading);
        } else {
            const divContainer = document.createElement("div");
            divContainer.classList.add("col-5", "my-3", "ms-2", "col-md-3", "col-lg-2", "border", "pt-2")
            const link = document.createElement("a");
            link.href = `listing-item.html?id=${id}`;
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("mt-3");
            const listingImage = document.createElement("img");
            listingImage.classList.add("img-fluid", "listing-image");
            listingImage.src = media;
            listingImage.setAttribute("alt", `Image for the listing ${title}`);
            const divRow = document.createElement("div");
            divRow.classList.add("row", "d-flex", "mt-2");
            const divColumn = document.createElement("div");
            divColumn.classList.add("col-8");
            const titleHeading = document.createElement("h3");
            titleHeading.innerText = `${title}`;
            const divSecondColumn = document.createElement("div");
            divSecondColumn.classList.add("col-4", "d-flex", "justify-content-end");
            const bidsHeading = document.createElement("h3");
            bidsHeading.innerText = `Bids: ${_count.bids}`
            
            listingsContainer.append(divContainer);
            divContainer.append(link);
            link.appendChild(imageContainer);
            imageContainer.appendChild(listingImage);
            link.appendChild(divRow);
            divRow.appendChild(divColumn);
            divColumn.appendChild(titleHeading);
            divRow.appendChild(divSecondColumn);
            divSecondColumn.appendChild(bidsHeading);


        }
    })
    
    
}