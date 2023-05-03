// localStorage
export const token = localStorage.getItem("token");
export const username = localStorage.getItem("username");

// index page 
export const listingsContainer = document.querySelector(".listings-container");
export const loading = document.querySelector(".loading");
export const listingTitle = document.querySelector(".listing-title");
export const listingImage = document.querySelector(".listing-image");
export const listingBids = document.querySelector(".listing-bids");
export const listItemForm = document.querySelector(".list-item-form")

// registrer page
export const registrerForm = document.querySelector(".registrer-form");
export const registrerSuccessMessage = document.querySelector(".registrer-success");

//login page
export const loginForm = document.querySelector(".login-form");

// login/logout link 
export const loginButton = document.querySelector(".login-link")
export const loginLinkFooter = document.querySelector(".login-link-footer")

// profile page
export const usernameProfile = document.querySelector(".username")
export const userCredit = document.querySelector(".user-credit")
export const userAvatar = document.querySelector(".avatar")
export const updateAvatarForm = document.querySelector(".update-avatar")
export const userListingsContainer = document.querySelector(".user-listing-container")