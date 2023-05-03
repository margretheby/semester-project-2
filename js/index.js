import { setLogoutListener } from "./listeners/logoutUser.js";
import { setListNewItemListener } from "./listeners/listItem.js";
import { loginButton, loginLinkFooter } from "./variables/const.js"
import { token } from "./variables/const.js"

setLogoutListener();
setListNewItemListener();

if(token) {
    loginButton.innerHTML = `<i class="fa-sharp fa-solid fa-right-from-bracket"></i> Logout`
    loginLinkFooter.innerText = `Logout`
}