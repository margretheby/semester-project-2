import { getProfile } from "./handlers/userProfile.js";
import { getProfileListings } from "./handlers/userListings.js";
import { setUpdateProfileAvatarListener } from "./listeners/updateUserAvatar.js"
import { setListNewItemListener } from "./listeners/listItem.js"

getProfile();
getProfileListings();
setUpdateProfileAvatarListener();
setListNewItemListener();