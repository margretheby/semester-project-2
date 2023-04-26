import { profileMediaUrl } from "../api/urls.js";
import { updateAvatarForm, token } from "../variables/const.js";

export function setUpdateProfileAvatarListener() {
    updateAvatarForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const updateAvatarForm = event.target;
        const formData = new FormData(updateAvatarForm);
        const updatedAvatar = Object.fromEntries(formData.entries());

        updateProfileAvatar(updatedAvatar);
    })
}

async function updateProfileAvatar(avatar) {
    try {
        const profileAvatarData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(avatar),
        };
        const response = await fetch(profileMediaUrl, profileAvatarData);
        const result = await response.json();
        
        location.reload();
    } catch (error) {
        console.log(error);
    }
}