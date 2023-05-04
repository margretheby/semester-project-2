import { updateListingForm, token } from "../variables/const.js";
import { listingItemUrl } from "../api/urls.js";

export function setUpdateListingListener() {
    updateListingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const updateItemForm = event.target;
        const formData = new FormData(updateItemForm);
        const title = formData.get("title");
        const description = formData.get("description");
        const media = [formData.get("media")];
        const endsAt = formData.get("endsAt");

        const updatedListingInfo = { title, description, media, endsAt };

        updateListing(updatedListingInfo)
        
    })
}

async function updateListing(listing) {
    try {
        const updateListingData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(listing),
        }

        const response = await fetch(listingItemUrl, updateListingData);
        const result = await response.json();

        location.reload();

    } catch (error) {
        console.log(error);
    }
}