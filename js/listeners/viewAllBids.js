import { bidModal, bidModalButton, token } from "../variables/const.js";
import { listingItemUrl } from "../api/urls.js";

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
        console.log(result);
        htmlForAllBidsModal(result);
        displayModal();
        closeModal();

    } catch (error) {
        console.log(error);
    };
};

function htmlForAllBidsModal(listing) {
    const { bids } = listing;
    for (let i = 0; i < bids.length; i++) {
        bidModal.innerHTML += `
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="col-12 d-flex justify-content-between modal-body">
                                <h5>${bids[i].bidderName}:</h5>
                                <h5>${bids[i].amount}</h5>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary close-btn">Close</button>
                        </div>
                    </div>
                `
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