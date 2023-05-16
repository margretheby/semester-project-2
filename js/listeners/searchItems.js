import { listingsContainer, searchDesktop, searchMobile, loading } from "../variables/const.js";
import { renderSearchResult } from "../renders/renderSearchResult.js";

export function searchListings(listings) {
    searchDesktop.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();
        const filteredSearch = listings.filter(function (listings) {
            if (listings.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });
        renderSearchResult(filteredSearch);
    }
    searchMobile.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();
        const filteredSearch = listings.filter(function (listings) {
            if (listings.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });
        renderSearchResult(filteredSearch);
    } 
}