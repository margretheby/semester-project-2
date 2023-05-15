import { getProfile } from "./handlers/userProfile.js";
import { getProfileListings } from "./handlers/userListings.js";
import { setUpdateProfileAvatarListener } from "./listeners/updateUserAvatar.js"
import { setListNewItemListener } from "./listeners/listItem.js"
import { renderActiveProfileListings } from "./listeners/filterListings.js"

getProfile();
renderActiveProfileListings();
setUpdateProfileAvatarListener();
setListNewItemListener();