import { deleteButton, token, listingContainer, bidForm } from "../variables/const.js";
import { updateListingUrl } from "../api/urls.js"

export function setDeleteListingListener() {
    deleteButton.addEventListener("click", (event) => {
        if(confirm("Are you sure you want to delete this listing?") === true) {
            deleteListing();
            successDeleteListing();
            setTimeout(relocateToProfile, 2000);
        }
    })
}

async function deleteListing() {
    try {
        const deleteListingData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(),
        }

        const response = await fetch(updateListingUrl, deleteListingData);
        const result = await response.json();


    } catch (error) {
        console.log(error);
    }
}

function relocateToProfile() {
    location.href = "profile.html"
}

function successDeleteListing() {
    listingContainer.innerHTML = `<div class="pb-5 mb-5"><h1 class="pb-5 mb-5">Your item was deleted.</h1></div>`
    bidForm.style.display = "none";
}