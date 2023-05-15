import { setLogoutListener } from "./listeners/logoutUser.js";
import { loginButton, loginLinkFooter } from "./variables/const.js"
import { token, profileLink } from "./variables/const.js"

setLogoutListener();

if(token) {
    loginButton.innerHTML = `<i class="fa-sharp fa-solid fa-right-from-bracket"></i> Logout`
    loginLinkFooter.innerText = `Logout`
} else {
    profileLink.style.display = "none";
}