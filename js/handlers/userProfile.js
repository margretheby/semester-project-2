import { profileUrl } from "../api/urls.js";
import { token, usernameProfile, userCredit, userAvatar } from "../variables/const.js";

export async function fetchProfile () {
    try {
        const userData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(profileUrl, userData);
        const result = await response.json();

        console.log(result);
        createHtmlForProfile(result);

    } catch (error) {
        console.log(error);
    }
}

function createHtmlForProfile(profileInfo) {
    const { name, avatar, credits } = profileInfo;
    usernameProfile.innerText = name;
    userCredit.innerText = credits;
    userAvatar.innerHTML = `<img class="img-thumbnail p-0" src="${avatar}" alt="Profile avatar for ${name}">`;
}