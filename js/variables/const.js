// localStorage
export const token = localStorage.getItem("token");
export const username = localStorage.getItem("username");

// all pages 
export const profileLink = document.querySelector(".profile-nav");

// index page 
export const listingsContainer = document.querySelector(".listings-container");
export const loading = document.querySelector(".loading");
export const listingTitle = document.querySelector(".listing-title");
export const listingImage = document.querySelector(".listing-image");
export const listingBids = document.querySelector(".listing-bids");
export const listItemForm = document.querySelector(".list-item-form");

// registrer page
export const registrerForm = document.querySelector(".registrer-form");
export const registrerSuccessMessage = document.querySelector(".registrer-success");

//login page
export const loginForm = document.querySelector(".login-form");
export const loginError = document.querySelector(".login-error");

// login/logout link 
export const loginButton = document.querySelector(".login-link");
export const loginLinkFooter = document.querySelector(".login-link-footer");

// profile page
export const usernameProfile = document.querySelector(".username");
export const userCredit = document.querySelector(".user-credit");
export const creditInfo = document.querySelector(".credit-info");
export const userAvatar = document.querySelector(".avatar");
export const updateAvatarForm = document.querySelector(".update-avatar");
export const userListingsContainer = document.querySelector(".user-listing-container");

// specific listing item
export const listingContainer = document.querySelector(".listing-container");
export const deleteButton = document.querySelector(".delete-button");
export const bidForm = document.querySelector(".bid-form");
export const editingTools = document.querySelector(".editing-tools");
export const bidMessage = document.querySelector(".bid-message");
export const bidModal = document.querySelector(".modal")
export const bidModalButton = document.querySelector(".view-bids-btn")

// parameters
const params = new URLSearchParams(window.location.search);
export const idParam = params.get("id"); 
export const usernameParam = params.get("username"); 
export const listingsParam = params.get("listings");

// update listing
export const updateListingForm = document.querySelector(".update-listing-form");
export const updateTitle = document.querySelector("#title");
export const updateDescription = document.querySelector("#description");
export const updateMedia = document.querySelector("#media");

// search
export const searchDesktop = document.querySelector("#search-desktop-form");
export const searchMobile = document.querySelector("#search-form");