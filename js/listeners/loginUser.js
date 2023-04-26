import { loginUrl } from "../api/urls.js";
import { loginForm } from "../variables/const.js";

export function setLoginListener() {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const loginForm = event.target;
        const formData = new FormData(loginForm);
        const loginUserInfo = Object.fromEntries(formData.entries());

        login(loginUrl, loginUserInfo);
    });
}

async function login(url, info) {
    try {
        const userInfo = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        };

        const response = await fetch(url, userInfo);
        const result = await response.json();
        const token = result.accessToken;
        const userName = result.name;
        const userCredits = result.credits;
        console.log(result);

        localStorage.setItem("token", token);
        localStorage.setItem("username", userName);
        localStorage.setItem("credits", userCredits);

        if(token) {
            window.location.href = "profile.html";
        } 
    } catch (error) {
        console.log(error);
    }
}