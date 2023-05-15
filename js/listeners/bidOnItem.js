import { bidOnListingUrl } from "../api/urls.js";
import { token, bidForm, bidMessage } from "../variables/const.js"

export function setBidOnListingListener() {
    bidForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const bidForm = event.target;
        const formData = new FormData(bidForm);
        const bidData = [Object.fromEntries(formData.entries())];
        const bid = bidData.map(({amount}) => +amount);

        bidOnListing( {amount: bid[0]} );
    })
}


async function bidOnListing(bid) {
    try {
        const bidData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(bid)
        };

        const response = await fetch(bidOnListingUrl, bidData);
        const result = await response.json();

        if (response.ok) {
            successMessage();
            setTimeout(reloadPage, 5000);

        } else {
            bidMessage.innerText = `Sorry! Your bid must be higher than the current bid.`;
        }


    } catch(error) {
        console.log(error);
    }
}


function successMessage() {
        bidMessage.innerText = `Success! Your bid was accepted.`; 
}

function reloadPage() {
    location.reload();
}
