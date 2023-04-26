import { setLogoutListener } from "./listeners/logoutUser.js";
import { loginButton } from "./variables/const.js"
import { token } from "./variables/const.js"

setLogoutListener();

if(token) {
    loginButton.innerHTML = `<i class="fa-sharp fa-solid fa-right-from-bracket"></i> Logout`
}