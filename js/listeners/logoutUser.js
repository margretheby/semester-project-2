import { token, loginButton } from "../variables/const.js";

export function setLogoutListener() {
    loginButton.addEventListener("click", () => {
        logOut();
    })
}

function logOut() {
    localStorage.clear();
}