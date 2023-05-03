import { fetchProfile } from "./handlers/userProfile.js";
import { fetchProfileListings } from "./handlers/userListings.js";
import { setUpdateProfileAvatarListener } from "./listeners/updateUserAvatar.js"
import { setListNewItemListener } from "./listeners/listItem.js"

fetchProfile();
setUpdateProfileAvatarListener();
fetchProfileListings();