import { fetchSpecificListing } from "./handlers/specificListing.js";
import { setUpdateListingListener } from "./listeners/updateItem.js"
import { setDeleteListingListener } from "./listeners/deleteItem.js"
import { setBidOnListingListener } from "./listeners/bidOnItem.js";
import { fetchBidsOnListing } from "./listeners/viewAllBids.js"
 
fetchSpecificListing();
setUpdateListingListener();
setDeleteListingListener();
setBidOnListingListener();
fetchBidsOnListing();
