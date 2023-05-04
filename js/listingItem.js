import { fetchSpecificListing } from "./handlers/specificListing.js";
import { setUpdateListingListener } from "./listeners/updateItem.js"
import { setDeleteListingListener } from "./listeners/deleteItem.js"
 
fetchSpecificListing();
setUpdateListingListener();
setDeleteListingListener();
