import { fetchListings } from "./handlers/activeListings.js";
import { setListNewItemListener } from "./listeners/listItem.js";

setListNewItemListener();
fetchListings();