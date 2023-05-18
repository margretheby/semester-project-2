import { listItemUrl } from "../api/urls.js";
import { listItemForm, token } from "../variables/const.js";

export function setListNewItemListener() {
    listItemForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const listItemForm = event.target;
        const formData = new FormData(listItemForm);

        const title = formData.get("title");
        const description = formData.get("description");
        const media = [formData.get("media")];
        const endsAt = formData.get("endsAt");

        if (media[0] !== '') {
            const listing = {
                title, 
                description, 
                media,
                endsAt
            }
            listNewItem(listing);
        } else {
            const listing = {
                title, 
                description, 
                endsAt
            }
            listNewItem(listing);
        }
        
        

    })
}

async function listNewItem(listing) {
    try {
        const itemData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(listing)
        }

        const response = await fetch (listItemUrl, itemData);
        const result = await response.json();

        console.log(response);
        console.log(result);

        location.reload();
    } catch (error) {
        console.log(error);
    }
}