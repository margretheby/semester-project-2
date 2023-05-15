import { bidModal, bidModalButton, token } from "../variables/const.js";
import { listingItemUrl } from "../api/urls.js";
import { renderHtmlForAllBidsModal } from "../renders/renderModal.js";

export async function fetchBidsOnListing() {
    try {
        const listingData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify()
        }

        const response = await fetch(listingItemUrl, listingData);
        const result = await response.json();

        renderHtmlForAllBidsModal(result);
        displayModal();
        closeModal();

    } catch (error) {
        console.log(error);
    };
};


function displayModal() {
    bidModalButton.addEventListener("click", () => {
        bidModal.style.display = "block";
    });
};

function closeModal() {
    bidModal.addEventListener("click", () => {
        bidModal.style.display = "none";
    });
};