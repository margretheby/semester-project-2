import { username, idParam } from "../variables/const.js";

const API_BASE_URL = "https://api.noroff.dev/api/v1/auction/";

// auth
export const loginUrl = `${API_BASE_URL}auth/login`;
export const registrerUrl = `${API_BASE_URL}auth/register`;

// listings
export const listingsUrl = `${API_BASE_URL}listings?_seller=true&_active=true`;
export const listItemUrl = `${API_BASE_URL}listings`;

// specific listing
export const listingItemUrl = `${listItemUrl}/${idParam}?_seller=true&_bids=true`

// profile 
export const profileUrl = `${API_BASE_URL}profiles/${username}`;
export const profileMediaUrl = `${profileUrl}/media`;
export const profileListingsUrl = `${profileUrl}/listings`;