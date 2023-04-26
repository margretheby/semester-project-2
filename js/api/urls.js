import { username } from "../variables/const.js";

const API_BASE_URL = "https://api.noroff.dev/api/v1/auction/";

// auth
export const loginUrl = `${API_BASE_URL}auth/login`;
export const registrerUrl = `${API_BASE_URL}auth/register`

// profile 
export const profileUrl = `${API_BASE_URL}profiles/${username}`
export const profileMediaUrl = `${profileUrl}/media`