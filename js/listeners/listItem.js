import { listItemUrl } from "../api/urls.js";
import { listItemForm, token } from "../variables/const.js";

const mediaArray = [];

export function setListNewItemListener() {
    listItemForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const listItemForm = event.target;
        const formData = new FormData(listItemForm);

        const title = formData.get("title");
        const description = formData.get("description");
        const media = [formData.get("media")];
        const endsAt = formData.get("endsAt");

        listNewItem({title, description, media, endsAt});
    })
}

async function listNewItem(title, description, media, endsAt) {
    try {
        const itemData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(title, description, media, endsAt)
        }

        const response = await fetch (listItemUrl, itemData);
        const result = await response.json();

        location.reload();
    } catch (error) {
        console.log(error);
    }
}