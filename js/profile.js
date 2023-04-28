import { fetchProfile } from "./handlers/userProfile.js";
import { fetchProfileListings } from "./handlers/userListings.js";
import { setUpdateProfileAvatarListener } from "./listeners/updateUserAvatar.js"

fetchProfile();
setUpdateProfileAvatarListener();
fetchProfileListings();