import { profileUrl } from "../api/urls.js";
import { token, usernameProfile, userCredit, userAvatar, usernameParam, creditInfo } from "../variables/const.js";
export async function getProfile () {
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

        createHtmlForProfile(result);

    } catch (error) {
        console.log(error);
    }
}

function createHtmlForProfile(profileInfo) {
    const { name, avatar, credits } = profileInfo;
    if(usernameParam) {
        usernameProfile.innerText = usernameParam;
        creditInfo.classList.add("d-none");
    } else {
    usernameProfile.innerText = name;
    userCredit.innerText = credits;
    const profileImage = document.createElement("img");
    profileImage.classList.add("img-thumbnail", "p-0");
    profileImage.setAttribute("alt", `Profile avatar for ${name}`);
    profileImage.src = avatar;

    userAvatar.appendChild(profileImage);
    }
}