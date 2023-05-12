import { listingContainer, updateDescription, updateTitle, updateMedia, editingTools, username, loading } from "../variables/const.js";

export function renderHtmlForSpecificListing(listing) {
    const { title, description, media, seller, bids, endsAt } = listing;
    const date = endsAt.slice(0, 10);
    loading.innerHTML = "";
    if (bids.length > 0) { 
        const lastBid = bids[bids.length -1].amount;
        const lastBidder = bids[bids.length -1].bidderName;
        if(media.length === 0) {
            const itemTitle = document.createElement("h1");
            itemTitle.innerText = title;
            const containerFirstRow = document.createElement("div");
            containerFirstRow.classList.add("row", "d-flex")
            const containerFirstCol = document.createElement("div");
            containerFirstCol.classList.add("col-6");
            const itemSeller = document.createElement("h3");
            itemSeller.innerText = `Seller: `;
            const containerSecondCol = document.createElement("div");
            containerSecondCol.classList.add("col-6", "d-flex", "justify-content-end");
            const linkToSeller = document.createElement("a");
            linkToSeller.classList.add("nav-link");
            linkToSeller.href = `profile.html?username=${seller.name}`;
            linkToSeller.innerText = `${seller.name}`;
            const itemDescription = document.createElement("p");
            itemDescription.classList.add("pt-2");
            itemDescription.innerText = description;
            const datesContainer = document.createElement("div");
            const datesEndsAt = document.createElement("p");
            datesEndsAt.innerText = `Ends at: ${date}`;
            const containerSecondRow = document.createElement("div");
            containerSecondRow.classList.add("row", "d-flex", "mt-5");
            const secondRowFirstCol = document.createElement("div");
            secondRowFirstCol.classList.add("col-8");
            const currentBidHeading = document.createElement("h3");
            currentBidHeading.innerText = `Current Bid: `;
            const secondRowSecondCol = document.createElement("div");
            secondRowSecondCol.classList.add("col-4", "d-flex", "justify-content-end");
            const lastBidHeading = document.createElement("h3");
            lastBidHeading.innerText = `$ ${lastBid}`
            const containerThirdRow = document.createElement("div");
            containerThirdRow.classList.add("row", "d-flex");
            const thirdRowFirstCol = document.createElement("div");
            thirdRowFirstCol.classList.add("col-8");
            const currentBidder = document.createElement("p");
            currentBidder.innerText = `Made by: `;
            const thirdRowSecondCol = document.createElement("div");
            thirdRowSecondCol.classList.add("col-4", "d-flex", "justify-content-end");
            const lastBidderName = document.createElement("p");
            lastBidderName.innerText = `${lastBidder}`

            listingContainer.appendChild(itemTitle);
            listingContainer.appendChild(containerFirstRow);
            containerFirstRow.appendChild(containerFirstCol);
            containerFirstCol.appendChild(itemSeller);
            containerFirstRow.appendChild(containerSecondCol);
            containerSecondCol.appendChild(linkToSeller);
            listingContainer.appendChild(itemDescription);
            listingContainer.appendChild(datesContainer);
            datesContainer.appendChild(datesEndsAt);
            listingContainer.appendChild(containerSecondRow);
            containerSecondRow.appendChild(secondRowFirstCol);
            secondRowFirstCol.appendChild(currentBidHeading);
            containerSecondRow.appendChild(secondRowSecondCol);
            secondRowSecondCol.appendChild(lastBidHeading); 
            listingContainer.appendChild(containerThirdRow);
            containerThirdRow.appendChild(thirdRowFirstCol);
            thirdRowFirstCol.appendChild(currentBidder);
            containerThirdRow.appendChild(thirdRowSecondCol);
            thirdRowSecondCol.appendChild(lastBidderName); 
        } else { 
            const itemTitle = document.createElement("h1");
            itemTitle.innerText = title;
            const containerFirstRow = document.createElement("div");
            containerFirstRow.classList.add("row", "d-flex")
            const containerFirstCol = document.createElement("div");
            containerFirstCol.classList.add("col-6");
            const itemSeller = document.createElement("h3");
            itemSeller.innerText = `Seller: `;
            const containerSecondCol = document.createElement("div");
            containerSecondCol.classList.add("col-6", "d-flex", "justify-content-end");
            const linkToSeller = document.createElement("a");
            linkToSeller.classList.add("nav-link");
            linkToSeller.href = `profile.html?username=${seller.name}`;
            linkToSeller.innerText = `${seller.name}`;
            const itemMedia = document.createElement("div");
            itemMedia.classList.add("listing-images");
            const itemDescription = document.createElement("p");
            itemDescription.classList.add("pt-2");
            itemDescription.innerText = description;
            const datesContainer = document.createElement("div");
            const datesEndsAt = document.createElement("p");
            datesEndsAt.innerText = `Ends at: ${date}`;
            const containerSecondRow = document.createElement("div");
            containerSecondRow.classList.add("row", "d-flex", "mt-5");
            const secondRowFirstCol = document.createElement("div");
            secondRowFirstCol.classList.add("col-8");
            const currentBidHeading = document.createElement("h3");
            currentBidHeading.innerText = `Current Bid: `;
            const secondRowSecondCol = document.createElement("div");
            secondRowSecondCol.classList.add("col-4", "d-flex", "justify-content-end");
            const lastBidHeading = document.createElement("h3");
            lastBidHeading.innerText = `$ ${lastBid}`;
            const containerThirdRow = document.createElement("div");
            containerThirdRow.classList.add("row", "d-flex");
            const thirdRowFirstCol = document.createElement("div");
            thirdRowFirstCol.classList.add("col-8");
            const currentBidder = document.createElement("p");
            currentBidder.innerText = `Made by: `;
            const thirdRowSecondCol = document.createElement("div");
            thirdRowSecondCol.classList.add("col-4", "d-flex", "justify-content-end");
            const lastBidderName = document.createElement("p");
            lastBidderName.innerText = `${lastBidder}`

            listingContainer.appendChild(itemTitle);
            listingContainer.appendChild(containerFirstRow);
            containerFirstRow.appendChild(containerFirstCol);
            containerFirstCol.appendChild(itemSeller);
            containerFirstRow.appendChild(containerSecondCol);
            containerSecondCol.appendChild(linkToSeller);
            listingContainer.appendChild(itemMedia);
            listingContainer.appendChild(itemDescription);
            listingContainer.appendChild(datesContainer);
            datesContainer.appendChild(datesEndsAt);
            listingContainer.appendChild(containerSecondRow);
            containerSecondRow.appendChild(secondRowFirstCol);
            secondRowFirstCol.appendChild(currentBidHeading);
            containerSecondRow.appendChild(secondRowSecondCol);
            secondRowSecondCol.appendChild(lastBidHeading); 
            listingContainer.appendChild(containerThirdRow);
            containerThirdRow.appendChild(thirdRowFirstCol);
            thirdRowFirstCol.appendChild(currentBidder);
            containerThirdRow.appendChild(thirdRowSecondCol);
            thirdRowSecondCol.appendChild(lastBidderName); 



            for(let i = 0; i < media.length; i++) {
                const listingImages = document.querySelector(".listing-images")
                const listingImage = document.createElement("img");
                listingImage.classList.add("img-fluid", "my-1")
                listingImage.setAttribute("alt", `Image for ${title} listing`)
                listingImage.src = media[i];
                listingImages.appendChild(listingImage);
            }
        }
    } else if (media.length === 0) {
        const itemTitle = document.createElement("h1");
        itemTitle.innerText = title;
        const containerFirstRow = document.createElement("div");
        containerFirstRow.classList.add("row", "d-flex")
        const containerFirstCol = document.createElement("div");
        containerFirstCol.classList.add("col-6");
        const itemSeller = document.createElement("h3");
        itemSeller.innerText = `Seller: `;
        const containerSecondCol = document.createElement("div");
        containerSecondCol.classList.add("col-6", "d-flex", "justify-content-end");
        const linkToSeller = document.createElement("a");
        linkToSeller.classList.add("nav-link");
        linkToSeller.href = `profile.html?username=${seller.name}`;
        linkToSeller.innerText = `${seller.name}`;
        const itemDescription = document.createElement("p");
        itemDescription.classList.add("pt-2");
        itemDescription.innerText = description;
        const datesContainer = document.createElement("div");
        const datesEndsAt = document.createElement("p");
        datesEndsAt.innerText = `Ends at: ${date}`;
        const containerSecondRow = document.createElement("div");
        containerSecondRow.classList.add("row", "d-flex", "mt-5");
        const secondRowFirstCol = document.createElement("div");
        secondRowFirstCol.classList.add("col-8");
        const currentBidHeading = document.createElement("h3");
        currentBidHeading.innerText = `Current Bid: `;
        const secondRowSecondCol = document.createElement("div");
        secondRowSecondCol.classList.add("col-4", "d-flex", "justify-content-end");
        const lastBidHeading = document.createElement("h3");
        lastBidHeading.innerText = `$ ${bids}`

        listingContainer.appendChild(itemTitle);
        listingContainer.appendChild(containerFirstRow);
        containerFirstRow.appendChild(containerFirstCol);
        containerFirstCol.appendChild(itemSeller);
        containerFirstRow.appendChild(containerSecondCol);
        containerSecondCol.appendChild(linkToSeller);
        listingContainer.appendChild(itemDescription);
        listingContainer.appendChild(datesContainer);
        datesContainer.appendChild(datesEndsAt);
        listingContainer.appendChild(containerSecondRow);
        containerSecondRow.appendChild(secondRowFirstCol);
        secondRowFirstCol.appendChild(currentBidHeading);
        containerSecondRow.appendChild(secondRowSecondCol);
        secondRowSecondCol.appendChild(lastBidHeading); 
    } else {
        const itemTitle = document.createElement("h1");
        itemTitle.innerText = title;
        const containerFirstRow = document.createElement("div");
        containerFirstRow.classList.add("row", "d-flex")
        const containerFirstCol = document.createElement("div");
        containerFirstCol.classList.add("col-6");
        const itemSeller = document.createElement("h3");
        itemSeller.innerText = `Seller: `;
        const containerSecondCol = document.createElement("div");
        containerSecondCol.classList.add("col-6", "d-flex", "justify-content-end");
        const linkToSeller = document.createElement("a");
        linkToSeller.classList.add("nav-link");
        linkToSeller.href = `profile.html?username=${seller.name}`;
        linkToSeller.innerText = `${seller.name}`;
        const itemMedia = document.createElement("div");
        itemMedia.classList.add("listing-images");
        const itemDescription = document.createElement("p");
        itemDescription.classList.add("pt-2");
        itemDescription.innerText = description;
        const datesContainer = document.createElement("div");
        const datesEndsAt = document.createElement("p");
        datesEndsAt.innerText = `Ends at: ${date}`;
        const containerSecondRow = document.createElement("div");
        containerSecondRow.classList.add("row", "d-flex", "mt-5");
        const secondRowFirstCol = document.createElement("div");
        secondRowFirstCol.classList.add("col-8");
        const currentBidHeading = document.createElement("h3");
        currentBidHeading.innerText = `Current Bid: `;
        const secondRowSecondCol = document.createElement("div");
        secondRowSecondCol.classList.add("col-4", "d-flex", "justify-content-end");
        const lastBidHeading = document.createElement("h3");
        lastBidHeading.innerText = `$ ${bids}`

        listingContainer.appendChild(itemTitle);
        listingContainer.appendChild(containerFirstRow);
        containerFirstRow.appendChild(containerFirstCol);
        containerFirstCol.appendChild(itemSeller);
        containerFirstRow.appendChild(containerSecondCol);
        containerSecondCol.appendChild(linkToSeller);
        listingContainer.appendChild(itemMedia);
        listingContainer.appendChild(itemDescription);
        listingContainer.appendChild(datesContainer);
        datesContainer.appendChild(datesEndsAt);
        listingContainer.appendChild(containerSecondRow);
        containerSecondRow.appendChild(secondRowFirstCol);
        secondRowFirstCol.appendChild(currentBidHeading);
        containerSecondRow.appendChild(secondRowSecondCol);
        secondRowSecondCol.appendChild(lastBidHeading);  



        for(let i = 0; i < media.length; i++) {
            const listingImages = document.querySelector(".listing-images")
            const listingImage = document.createElement("img");
            listingImage.classList.add("img-fluid", "my-1")
            listingImage.setAttribute("alt", `Image for ${title} listing`)
            listingImage.src = media[i];
            listingImages.appendChild(listingImage);
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