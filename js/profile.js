import { fetchProfile } from "./handlers/userProfile.js";
import { setUpdateProfileAvatarListener } from "./listeners/updateUserAvatar.js"

fetchProfile();
setUpdateProfileAvatarListener();