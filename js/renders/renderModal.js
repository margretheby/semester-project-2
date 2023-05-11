import { bidModal } from "../variables/const.js";

export function renderHtmlForAllBidsModal(listing) {
    const { bids } = listing;
    if (bids.length === 0) {
        const modalContainer = document.createElement("div");
        modalContainer.setAttribute("role", "document");
        modalContainer.classList.add("modal-dialog");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const modalColumn = document.createElement("div");
        modalColumn.classList.add("col-12", "d-flex", "justify-content-between", "modal-body");
        const modalFirstHeading = document.createElement("h5");
        modalFirstHeading.innerText = `No bids have been made yet.`;
        const modalSecondHeading = document.createElement("h5");
        modalSecondHeading.innerText = `Click anywhere go back.`;
        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        const closeButton = document.createElement("button");
        closeButton.classList.add("btn", "btn-secondary", "close-btn");
        closeButton.innerText = "Close";

        bidModal.appendChild(modalContainer);
        modalContainer.appendChild(modalContent);
        modalContent.appendChild(modalColumn);
        modalColumn.appendChild(modalFirstHeading);
        modalColumn.appendChild(modalSecondHeading);
        modalContainer.appendChild(modalFooter);
        modalFooter.appendChild(closeButton);
    } else {
        for (let i = 0; i < bids.length; i++) {
        const modalContainer = document.createElement("div");
        modalContainer.setAttribute("role", "document");
        modalContainer.classList.add("modal-dialog");
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        const modalColumn = document.createElement("div");
        modalColumn.classList.add("col-12", "d-flex", "justify-content-between", "modal-body");
        const modalFirstHeading = document.createElement("h5");
        modalFirstHeading.innerText = bids[i].bidderName;
        const modalSecondHeading = document.createElement("h5");
        modalSecondHeading.innerText = bids[i].amount;
        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        const closeButton = document.createElement("button");
        closeButton.classList.add("btn", "btn-secondary", "close-btn");
        closeButton.innerText = "Back to listing";

        bidModal.appendChild(modalContainer);
        modalContainer.appendChild(modalContent);
        modalContent.appendChild(modalColumn);
        modalColumn.appendChild(modalFirstHeading);
        modalColumn.appendChild(modalSecondHeading);
        modalContainer.appendChild(modalFooter);
        modalFooter.appendChild(closeButton);
        }
    }
}